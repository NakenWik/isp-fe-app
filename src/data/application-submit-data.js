
const application = {
    applicationId: null,
    proposalNo: null,
    applyDate: "2023-07-27T10:37:05.434+0000",
    deliverType: "E-POLICY",
    sourceChannel: "ONLINE",
    agentCode: "HOD0001", // Head Office
    policyStatus: "Initail",
    premiumCalCondition:{
        age: "12",
        gender: "FeMale",
        premiumPerYear: "35000.00"
    },
    productList: [
            {
                productCode: "EA0001",
                productName: "ประกันชีวิตแบบสะสมทรัพย์ระยะสั้น",
                productType: "BASE",
                sa: 200113.9,
                premium: 200113.9,
                policyValueList:[
                    {
                        labelY:['ปีที่ 1', 'ปีที่ 2', 'ปีที่ 3', 'ปีที่ 4', 'ปีที่ 5', 'ปีที่ 6', 'ปีที่ 7', 'ปีที่ 8', 'ปีที่ 9', 'ปีที่ 10'], 
                        premium: [100000, 100000, 100000, 100000, 100000, 0, 0, 0, 0, 0],
                        coupon: [20000, 20000, 20000, 20000, 20000, 100000, 100000, 100000, 100000,25000]
                    }
                ]
                
            }
    ],
    insureInfo: {
            salutationCode: "T10",
            citizenId: "1234567890123",
            citizenCardImage: "[applicationId]1234567890123.jpg",
            firstNameTh: "นาเคนทร์",
            lastNameTh: "วิกาหะ",
            firstNameEn: "firstNameEng",
            lastNameEn: "firstNameEng",
            dateOfBirth: "1999-01-02",
            countryCode: "THA",
            gender: "MALE",
            relationCode: "001",
            occupationCode: "O01",
            maritalStatus: "O01",
            phoneNumber: "0839383938",
            email: "example@mail.com",
            clientType: "INSURED",
    },
    // clientList: [
    //     {
    //     salutationCode: "",
    //     citizenId: "",
    //     citizenCardImage: "[applicationId]1234567890123.jpg",
    //     firstNameTh: "",
    //     lastNameTh: "",
    //     firstNameEn: "",
    //     lastNameEn: "",
    //     dateOfBirth: "1999-01-02",
    //     countryCode: "",
    //     gender: "MALE",
    //     relationCode: "",
    //     occupationCode: "",
    //     maritalStatus: "",
    //     phoneNumber: "",
    //     otherPhoneNumber: "",
    //     email: "",
    //     clientType: "INSURED",
    //     residentialAddress: {
    //         addressNo: "99/99",
    //         moo: "10",
    //         soi: "-",
    //         road: "Sukhumvit 41",
    //         buildingName: "lpn condo sukhumvit 41",
    //         companyName: "KWI",
    //         provinceCode: "10",
    //         provinceName: "กรุงเทพ ฯลฯ",
    //         districtCode: "10",
    //         districtName: "สวนหลวง",
    //         subDistrictCode: "10",
    //         subDistrictName: "สวนหลวง",
    //         postalCode: "12110",
    //         addressType: "CURRENT|RESIDENTIAL|BUSINESS",
    //         dispatchAddress: "Y"
    //         }
    //     }
    // ],
    // payoutInfo: {
    //     payoutType: "BANK_TRANSFER",
    //     bankCode: "00001",
    //     bankBranchCode: "B00001",
    //     bankAccountName: "Naken Wikaha",
    //     bankAccountNumber: "0112345678"
    //     }
    //     ,
    // beneficiaryList: [
    //         {
    //         salutationCode: "",
    //         citizenId: "1234567890123",
    //         firstNameTh: "firstName",
    //         lastNameTh: "lastName",
    //         firstNameEn: "firstNameEng",
    //         lastNameEn: "firstNameEng",
    //         dateOfBirth: "1999-01-02",
    //         countryCode: "THA",
    //         gender: "MALE",
    //         relationCode: "001",
    //         occupationCode: "O01",
    //         maritalStatus: "O01",
    //         phoneNumber: "0839383938",
    //         otherPhoneNumber: "0839383938",
    //         email: "example@mail.com",
    //         clientType: "INSURED",
    //         residentialAddress: {
    //             addressNo: "99/99",
    //             moo: "10",
    //             soi: "-",
    //             road: "Sukhumvit 41",
    //             buildingName: "lpn condo sukhumvit 41",
    //             companyName: "KWI",
    //             provinceCode: "10",
    //             provinceName: "กรุงเทพ ฯลฯ",
    //             districtCode: "10",
    //             districtName: "สวนหลวง",
    //             subDistrictCode: "10",
    //             subDistrictName: "สวนหลวง",
    //             postalCode: "12110",
    //             addressType: "CURRENT|RESIDENTIAL|BUSINESS",
    //             dispatchAddress: "Y"
    //             }
    //         }
    //     ],
    // alternateAddressList: [
    //         {
    //         addressNo: "",
    //         moo: "",
    //         soi: "",
    //         road: "",
    //         buildingName: "",
    //         companyName: "",
    //         provinceCode: "",
    //         provinceName: "",
    //         districtCode: "",
    //         districtName: "",
    //         subDistrictCode: "",
    //         subDistrictName: "",
    //         postalCode: "",
    //         addressType: "CURRENT|RESIDENTIAL|BUSINESS",
    //         dispatchAddress: "Y"
    //         }
    //     ]
    }

export default application
