let ESkipTracingTasks = {
  phonetoPrefill: 'phonetoPrefill',
  mobiletoUAN: 'mobiletoUAN',
  epfoVerification: 'epfoVerification',
  mobiletoMultipleUPI: 'mobiletoMultipleUPI',
  mobileNetworkDetails: 'mobileNetworkDetails',
  phoneNameAttribute: 'phoneNameAttribute',
  panPremium: 'panPremium',
  pantoCKYC: 'pantoCKYC',
  phoneToName: 'phoneToName',
  socialMediaStep1: 'socialMediaStep1',
  socialMediaStep2: 'socialMediaStep2',
  ifscVerification: 'ifscVerification',
  backgroundVerification: 'backgroundVerification',
  amlPepCheck: 'amlPepCheck',
  upiAnalysis: 'upiAnalysis',
}


const taskMapping = {
  personalDetails: [
    ESkipTracingTasks.phonetoPrefill,
    ESkipTracingTasks.mobiletoUAN,
    ESkipTracingTasks.panPremium
  ],
  contactDetails: [
    ESkipTracingTasks.phonetoPrefill,
  ],
  addressDetails: [ESkipTracingTasks.phonetoPrefill],
  bankDetails: [ESkipTracingTasks.mobiletoMultipleUPI, ESkipTracingTasks.upiAnalysis],
  bgv: [
    ESkipTracingTasks.backgroundVerification,
    ESkipTracingTasks.amlPepCheck,
  ],
  companyAddress: [ESkipTracingTasks.mobiletoUAN, ESkipTracingTasks.epfoVerification],
  networkDetails: [ESkipTracingTasks.mobileNetworkDetails],
};

const addTaks = (data, task) => {
  console.log(`added ${task}.....`, data)

}

const executeTask = () => {
  return 'executing......'
}



const request = {
  firstName: 'hello',
  mobile: 7238468723,
  responseParameter:{
  bankDetails: true,
  addressDetails:true,
  personalDetails:true,
  bgv:true
  }
}


const { mobile, firstName, responseParameter } = request;
console.log(responseParameter)

const apiCalled = new Set()

for (const parameter in responseParameter) {
  if (responseParameter[parameter] === true && taskMapping[parameter]) {

    for (const task of taskMapping[parameter]) {
      if (apiCalled.has(task)) continue;
      apiCalled.add(task)
      let data = {}

      switch (task) {
        case ESkipTracingTasks.phonetoPrefill:
          data = { phoneNumber: mobile, firstName };
          break;

        case ESkipTracingTasks.mobiletoUAN:
          data = { mobile };
          break;

        case ESkipTracingTasks.panPremium:
          const stage1PersonalResult = executeTask()
          const prefill = stage1PersonalResult?.[ESkipTracingTasks.phonetoPrefill]
          console.log(stage1PersonalResult)
          const extractedPan = prefill?.pan || 'wjehfgjwh'
          data = { pan: extractedPan }
          break;

        case ESkipTracingTasks.mobiletoMultipleUPI:
          data = { mobile }
          break;

        case ESkipTracingTasks.upiAnalysis:
          const stage1Result = executeTask();
          const upiId = stage1Result?.[ESkipTracingTasks.mobiletoMultipleUPI]?.upi || ['upi123','upi456'];
          if (upiId.length > 0) {
            addTaks(ESkipTracingTasks.upiAnalysis, upiId);
          }
          continue;

        case ESkipTracingTasks.backgroundVerification:
          data = { firstName }
          break;

        case ESkipTracingTasks.mobileNetworkDetails:
        case ESkipTracingTasks.phoneNameAttribute:
          data = { phoneNumber: mobile }
          break;
      }

      addTaks(data, task)
    }
  }
}

console.log(executeTask())
