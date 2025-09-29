import { IActivityMeta } from "./activityMeta";
const x = [
    {
        "_id": "64fb3fa424f3146bfa6c0bb2",
        "user": {
            "id": "64fb3fa124f3146bfa6c0bad"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276479596554354690"
        },
        "commitId": "64fb3fa4c3cbe69b667650f9",
        "numInstances": 1
    },
    {
        "_id": "64fb3fa458d942553fb31aa1",
        "user": {
            "id": "64fb3fa2ca33d3322411ef56"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276479618029191170"
        },
        "commitId": "64fb3fa4c3cbe69b6676516c",
        "edit_ts": "2023-09-08T15:37:13.057Z",
        "numInstances": 1
    },
    {
        "_id": "64fb3fa658d942553fb31aa3",
        "user": {
            "id": "64fb3fa458d942553fb31aa2"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276479605144289281"
        },
        "commitId": "64fb3fa6c3cbe69b66765291",
        "numInstances": 1
    },
    {
        "_id": "64fb3fa958d942553fb31aa4",
        "user": {
            "id": "64fb3fa72eeb2859f3626cf0"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276479635209060354"
        },
        "commitId": "64fb3fa9c3cbe69b66765631",
        "edit_ts": "2023-09-08T15:37:17.814Z",
        "numInstances": 1
    },
    {
        "_id": "64fb3faeca33d3322411ef5f",
        "user": {
            "id": "64fb3facca33d3322411ef5e"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276479648093962248"
        },
        "commitId": "64fb3faec3cbe69b6676594e",
        "edit_ts": "2023-09-08T15:37:20.995Z",
        "numInstances": 1
    },
    {
        "_id": "64fb3fb424f3146bfa6c0bbc",
        "user": {
            "id": "64fb3fb1ca33d3322411ef62"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276479678158733313"
        },
        "commitId": "64fb3fb4c3cbe69b66765cc4",
        "edit_ts": "2023-09-08T15:37:27.326Z",
        "numInstances": 1
    },
    {
        "_id": "64fb3fb524f3146bfa6c0bbd",
        "user": {
            "id": "64fb3fb358d942553fb31aaa"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276479682453700609"
        },
        "commitId": "64fb3fb5c3cbe69b66765d5a",
        "edit_ts": "2023-09-08T15:37:28.655Z",
        "numInstances": 1
    },
    {
        "_id": "64fb4125004fde3cfe602f82",
        "user": {
            "id": "64fb41220f189de5b93177f7"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276481263001665538"
        },
        "commitId": "64fb4125c3cbe69b667691e5",
        "edit_ts": "2023-09-08T15:43:36.992Z",
        "numInstances": 1
    },
    {
        "_id": "64fb41251e0c91ee5badc67f",
        "user": {
            "id": "64fb41230f189de5b93177f8"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276481267296632834"
        },
        "commitId": "64fb4125c3cbe69b66769235",
        "edit_ts": "2023-09-08T15:43:37.488Z",
        "numInstances": 1
    },
    {
        "_id": "64fb415c0fcb4c977b28a6b1",
        "user": {
            "id": "64fb415a0fcb4c977b28a6b0"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276481499224866822"
        },
        "commitId": "64fb415cc3cbe69b66769d7f",
        "edit_ts": "2023-09-08T15:44:31.494Z",
        "numInstances": 1
    },
    {
        "_id": "64fb415f0f189de5b93177fe",
        "user": {
            "id": "64fb415d0f189de5b93177fd"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276481516404736001"
        },
        "commitId": "64fb415fc3cbe69b6676a001",
        "edit_ts": "2023-09-08T15:44:35.224Z",
        "numInstances": 1
    },
    {
        "_id": "64fb41610fcb4c977b28a6b6",
        "user": {
            "id": "64fb415e1e0c91ee5badc687"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276481524994670608"
        },
        "commitId": "64fb4161c3cbe69b6676a174",
        "edit_ts": "2023-09-08T15:44:37.930Z",
        "numInstances": 1
    },
    {
        "_id": "64fb41610fcb4c977b28a6b7",
        "user": {
            "id": "64fb415e004fde3cfe602f8a"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276481524994670604"
        },
        "commitId": "64fb4161c3cbe69b6676a1f1",
        "edit_ts": "2023-09-08T15:44:37.644Z",
        "numInstances": 1
    },
    {
        "_id": "64fb41630fcb4c977b28a6b8",
        "user": {
            "id": "64fb4161004fde3cfe602f8d"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276481516404736011"
        },
        "commitId": "64fb4163c3cbe69b6676a3a8",
        "numInstances": 1
    },
    {
        "_id": "64fb41661e0c91ee5badc68d",
        "user": {
            "id": "64fb41640fcb4c977b28a6b9"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276481546469507073"
        },
        "commitId": "64fb4166c3cbe69b6676a5d0",
        "edit_ts": "2023-09-08T15:44:42.025Z",
        "numInstances": 1
    },
    {
        "_id": "64fb41691e0c91ee5badc68e",
        "user": {
            "id": "64fb41661e0c91ee5badc68c"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276481555059441669"
        },
        "commitId": "64fb4169c3cbe69b6676a87b",
        "edit_ts": "2023-09-08T15:44:44.621Z",
        "numInstances": 1
    },
    {
        "_id": "64fb416f0f189de5b931780a",
        "user": {
            "id": "64fb416d004fde3cfe602f96"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276481585124212738"
        },
        "commitId": "64fb416fc3cbe69b6676ac67",
        "edit_ts": "2023-09-08T15:44:51.226Z",
        "numInstances": 1
    },
    {
        "_id": "64fb4178f9973b6b3ded3a70",
        "user": {
            "id": "64fb4177c07394505f0ddb2e"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276481619483951106"
        },
        "commitId": "64fb4178c3cbe69b6676af9d",
        "edit_ts": "2023-09-08T15:44:59.785Z",
        "numInstances": 1
    },
    {
        "_id": "64fb418da2187cb071da919c",
        "user": {
            "id": "64fb418959fff68c459f5f00"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276481713973231617"
        },
        "commitId": "64fb418dc3cbe69b6676b434",
        "edit_ts": "2023-09-08T15:45:21.561Z",
        "numInstances": 1
    },
    {
        "_id": "64fb41ab59fff68c459f5f03",
        "user": {
            "id": "64fb41a9a2187cb071da91a2"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276481825642381318"
        },
        "commitId": "64fb41abc3cbe69b6676baaa",
        "numInstances": 1
    },
    {
        "_id": "64fb41adf9973b6b3ded3a76",
        "user": {
            "id": "64fb41acc07394505f0ddb36"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276481834232315905"
        },
        "commitId": "64fb41adc3cbe69b6676bc50",
        "numInstances": 1
    },
    {
        "_id": "64fb41afa2187cb071da91a5",
        "user": {
            "id": "64fb41adc07394505f0ddb39"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276481855707152390"
        },
        "commitId": "64fb41afc3cbe69b6676bdea",
        "edit_ts": "2023-09-08T15:45:54.659Z",
        "numInstances": 1
    },
    {
        "_id": "64fb41b1c07394505f0ddb3c",
        "user": {
            "id": "64fb41aff9973b6b3ded3a77"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276481864297086979"
        },
        "commitId": "64fb41b1c3cbe69b6676bef3",
        "edit_ts": "2023-09-08T15:45:56.567Z",
        "numInstances": 1
    },
    {
        "_id": "64fb41cff9973b6b3ded3a79",
        "user": {
            "id": "64fb41cdc07394505f0ddb41"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276481993146105864"
        },
        "commitId": "64fb41cfc3cbe69b6676c81c",
        "edit_ts": "2023-09-08T15:46:26.376Z",
        "numInstances": 1
    },
    {
        "_id": "64fb41d159fff68c459f5f10",
        "user": {
            "id": "64fb41cec07394505f0ddb42"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276482001736040455"
        },
        "commitId": "64fb41d1c3cbe69b6676c8df",
        "edit_ts": "2023-09-08T15:46:28.282Z",
        "numInstances": 1
    },
    {
        "_id": "64fb41d8c07394505f0ddb43",
        "user": {
            "id": "64fb41d5a2187cb071da91af"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276482031800811521"
        },
        "commitId": "64fb41d8c3cbe69b6676cc5a",
        "edit_ts": "2023-09-08T15:46:35.016Z",
        "numInstances": 1
    },
    {
        "_id": "64fb41ddc07394505f0ddb46",
        "user": {
            "id": "64fb41daf9973b6b3ded3a7c"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276482057570615298"
        },
        "commitId": "64fb41ddc3cbe69b6676ce63",
        "edit_ts": "2023-09-08T15:46:41.853Z",
        "numInstances": 1
    },
    {
        "_id": "64fb43f5c91ef92b3d457a34",
        "user": {
            "id": "64fb43f3c91ef92b3d457a31"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276484359673085955"
        },
        "commitId": "64fb43f6c3cbe69b6677131c",
        "edit_ts": "2023-09-08T15:55:37.241Z",
        "numInstances": 1
    },
    {
        "_id": "64fb43fac91ef92b3d457a37",
        "user": {
            "id": "64fb43f7c4d86f228e7fa502"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276484376852955138"
        },
        "commitId": "64fb43fac3cbe69b667714c7",
        "edit_ts": "2023-09-08T15:55:41.743Z",
        "numInstances": 1
    },
    {
        "_id": "64fb43fac4d86f228e7fa504",
        "user": {
            "id": "64fb43f9c4d86f228e7fa503"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276484381147922433"
        },
        "commitId": "64fb43fac3cbe69b66771561",
        "edit_ts": "2023-09-08T15:55:42.221Z",
        "numInstances": 1
    },
    {
        "_id": "64fb43fec4d86f228e7fa50b",
        "user": {
            "id": "64fb43fbc91ef92b3d457a38"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276484398327791618"
        },
        "commitId": "64fb43fec3cbe69b66771756",
        "edit_ts": "2023-09-08T15:55:46.763Z",
        "numInstances": 1
    },
    {
        "_id": "64fb440b22c9ff66e84a1b55",
        "user": {
            "id": "64fb44092c02a4af55a9bf88"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276484454162366471"
        },
        "commitId": "64fb440bc3cbe69b66771d70",
        "edit_ts": "2023-09-08T15:55:59.744Z",
        "numInstances": 1
    },
    {
        "_id": "64fb440d22c9ff66e84a1b57",
        "user": {
            "id": "64fb440b2c02a4af55a9bf89"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276484458457333761"
        },
        "commitId": "64fb440dc3cbe69b66771e37",
        "edit_ts": "2023-09-08T15:56:00.340Z",
        "numInstances": 1
    },
    {
        "_id": "64fb440f2c02a4af55a9bf8d",
        "user": {
            "id": "64fb440d22c9ff66e84a1b56"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276484471342235655"
        },
        "commitId": "64fb440fc3cbe69b66771f56",
        "edit_ts": "2023-09-08T15:56:03.578Z",
        "numInstances": 1
    },
    {
        "_id": "64fb44162c02a4af55a9bf94",
        "user": {
            "id": "64fb441422c9ff66e84a1b5c"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276484484227137538"
        },
        "commitId": "64fb4416c3cbe69b6677232d",
        "numInstances": 1
    },
    {
        "_id": "64fb446249d308f22743770e",
        "user": {
            "id": "64fb445f49d308f22743770d"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276484823529553922"
        },
        "commitId": "64fb4462c3cbe69b66772f22",
        "edit_ts": "2023-09-08T15:57:25.984Z",
        "numInstances": 1
    },
    {
        "_id": "64fb446749d308f227437710",
        "user": {
            "id": "64fb446449d308f22743770f"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276484845004390401"
        },
        "commitId": "64fb4467c3cbe69b667730a1",
        "edit_ts": "2023-09-08T15:57:30.270Z",
        "numInstances": 1
    },
    {
        "_id": "64fb446749d308f227437711",
        "user": {
            "id": "64fb4464fa6af7322087b505"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276484845004390405"
        },
        "commitId": "64fb4467c3cbe69b667730e1",
        "edit_ts": "2023-09-08T15:57:30.960Z",
        "numInstances": 1
    },
    {
        "_id": "64fb4471fa6af7322087b50d",
        "user": {
            "id": "64fb447049d308f227437718"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276484892249030657"
        },
        "commitId": "64fb4471c3cbe69b6677354e",
        "edit_ts": "2023-09-08T15:57:41.176Z",
        "numInstances": 1
    },
    {
        "_id": "64fb4526816cf84839e0ceff",
        "user": {
            "id": "64fb4523816cf84839e0cefd"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276485682523013124"
        },
        "commitId": "64fb4526c3cbe69b66774ed8",
        "edit_ts": "2023-09-08T16:00:45.413Z",
        "numInstances": 1
    },
    {
        "_id": "64fb4527816cf84839e0cf01",
        "user": {
            "id": "64fb45258267daf449a9c06f"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276485682523013121"
        },
        "commitId": "64fb4527c3cbe69b66774f7d",
        "edit_ts": "2023-09-08T16:00:45.392Z",
        "numInstances": 1
    },
    {
        "_id": "64fb45278267daf449a9c070",
        "user": {
            "id": "64fb4525816cf84839e0cefe"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276485673933078530"
        },
        "commitId": "64fb4527c3cbe69b66774ffc",
        "edit_ts": "2023-09-08T16:00:43.470Z",
        "numInstances": 1
    },
    {
        "_id": "64fb4534816cf84839e0cf0b",
        "user": {
            "id": "64fb4531816cf84839e0cf0a"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276485729767653379"
        },
        "commitId": "64fb4534c3cbe69b66775623",
        "edit_ts": "2023-09-08T16:00:56.500Z",
        "numInstances": 1
    },
    {
        "_id": "64fb45fc2dcfd9d55f308f03",
        "user": {
            "id": "64fb45fa2dcfd9d55f308f01"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276486588761112577"
        },
        "commitId": "64fb45fcc3cbe69b667772a5",
        "edit_ts": "2023-09-08T16:04:16.493Z",
        "numInstances": 1
    },
    {
        "_id": "64fb45fe2dcfd9d55f308f06",
        "user": {
            "id": "64fb45fc2dcfd9d55f308f02"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276486597351047173"
        },
        "commitId": "64fb45fec3cbe69b66777431",
        "edit_ts": "2023-09-08T16:04:18.867Z",
        "numInstances": 1
    },
    {
        "_id": "64fb46002dcfd9d55f308f07",
        "user": {
            "id": "64fb45feec914996e51f9b63"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276486605940981762"
        },
        "commitId": "64fb4600c3cbe69b667774e8",
        "edit_ts": "2023-09-08T16:04:20.070Z",
        "numInstances": 1
    },
    {
        "_id": "64fb46082dcfd9d55f308f10",
        "user": {
            "id": "64fb4606ec914996e51f9b66"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276486636005752879"
        },
        "commitId": "64fb4608c3cbe69b6677790e",
        "edit_ts": "2023-09-08T16:04:27.560Z",
        "numInstances": 1
    },
    {
        "_id": "64fb4627a0de7675356de31d",
        "user": {
            "id": "64fb4626d7227bd298f7747c"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276486773444706306"
        },
        "commitId": "64fb4627c3cbe69b66777fdb",
        "edit_ts": "2023-09-08T16:04:59.120Z",
        "numInstances": 1
    },
    {
        "_id": "64fb4628a0de7675356de31e",
        "user": {
            "id": "64fb4626a0de7675356de31c"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276486773444706309"
        },
        "commitId": "64fb4628c3cbe69b66778038",
        "edit_ts": "2023-09-08T16:04:59.813Z",
        "numInstances": 1
    },
    {
        "_id": "64fb465fa0de7675356de325",
        "user": {
            "id": "64fb465ee14d0a69449dab79"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276487009667907594"
        },
        "commitId": "64fb465fc3cbe69b66778b12",
        "edit_ts": "2023-09-08T16:05:54.821Z",
        "numInstances": 1
    },
    {
        "_id": "64fb4662d7227bd298f77481",
        "user": {
            "id": "64fb4660e14d0a69449dab7b"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276487022552809473"
        },
        "commitId": "64fb4662c3cbe69b66778e05",
        "edit_ts": "2023-09-08T16:05:57.029Z",
        "numInstances": 1
    },
    {
        "_id": "64fb4663a0de7675356de32b",
        "user": {
            "id": "64fb4661d7227bd298f77480"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276487031142744076"
        },
        "commitId": "64fb4663c3cbe69b66778ef6",
        "edit_ts": "2023-09-08T16:05:59.624Z",
        "numInstances": 1
    },
    {
        "_id": "64fb4664a0de7675356de32d",
        "user": {
            "id": "64fb4662a0de7675356de32a"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276487035437711361"
        },
        "commitId": "64fb4664c3cbe69b66779049",
        "edit_ts": "2023-09-08T16:06:00.063Z",
        "numInstances": 1
    },
    {
        "_id": "64fb4665e14d0a69449dab81",
        "user": {
            "id": "64fb4664a0de7675356de32c"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276487039732678658"
        },
        "commitId": "64fb4665c3cbe69b66779175",
        "edit_ts": "2023-09-08T16:06:01.358Z",
        "numInstances": 1
    },
    {
        "_id": "64fb4666d7227bd298f77482",
        "user": {
            "id": "64fb4664910cfd8f140f4cc7"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276487026847776769"
        },
        "commitId": "64fb4666c3cbe69b667791cd",
        "numInstances": 1
    },
    {
        "_id": "64fb4666910cfd8f140f4cce",
        "user": {
            "id": "64fb4664e14d0a69449dab80"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276487044027645955"
        },
        "commitId": "64fb4666c3cbe69b667792b7",
        "edit_ts": "2023-09-08T16:06:02.271Z",
        "numInstances": 1
    },
    {
        "_id": "64fb4668d7227bd298f77486",
        "user": {
            "id": "64fb4666d7227bd298f77483"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276487052617580546"
        },
        "commitId": "64fb4668c3cbe69b66779440",
        "edit_ts": "2023-09-08T16:06:04.472Z",
        "numInstances": 1
    },
    {
        "_id": "64fb46a0b3d3999ca6fc715a",
        "user": {
            "id": "64fb469fa71cd8b43825a02c"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276487293135749122"
        },
        "commitId": "64fb46a0c3cbe69b6677a1e0",
        "edit_ts": "2023-09-08T16:07:00.094Z",
        "numInstances": 1
    },
    {
        "_id": "64fb46a32dde87227ff6f440",
        "user": {
            "id": "64fb46a02dde87227ff6f43f"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276487306020651009"
        },
        "commitId": "64fb46a3c3cbe69b6677a2e6",
        "edit_ts": "2023-09-08T16:07:03.471Z",
        "numInstances": 1
    },
    {
        "_id": "64fb46a4b3d3999ca6fc715b",
        "user": {
            "id": "64fb46a18f3d00d192285949"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276487306020651012"
        },
        "commitId": "64fb46a4c3cbe69b6677a35a",
        "edit_ts": "2023-09-08T16:07:03.775Z",
        "numInstances": 1
    },
    {
        "_id": "64fb46af8f3d00d19228594e",
        "user": {
            "id": "64fb46ac2dde87227ff6f446"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276487357560258565"
        },
        "commitId": "64fb46afc3cbe69b6677a833",
        "edit_ts": "2023-09-08T16:07:15.440Z",
        "numInstances": 1
    },
    {
        "_id": "64fb46dc2dde87227ff6f44a",
        "user": {
            "id": "64fb46daa71cd8b43825a02d"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276487533653917698"
        },
        "commitId": "64fb46dcc3cbe69b6677b194",
        "numInstances": 1
    },
    {
        "_id": "64fb46e0a71cd8b43825a031",
        "user": {
            "id": "64fb46de8f3d00d192285956"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276487563718688772"
        },
        "commitId": "64fb46e0c3cbe69b6677b37f",
        "edit_ts": "2023-09-08T16:08:03.672Z",
        "numInstances": 1
    },
    {
        "_id": "64fb46e78f3d00d19228595a",
        "user": {
            "id": "64fb46e4b3d3999ca6fc7165"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276487593783459846"
        },
        "commitId": "64fb46e7c3cbe69b6677b6aa",
        "edit_ts": "2023-09-08T16:08:10.250Z",
        "numInstances": 1
    },
    {
        "_id": "64fb46e9b3d3999ca6fc7168",
        "user": {
            "id": "64fb46e72dde87227ff6f44d"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276487606668361732"
        },
        "commitId": "64fb46e9c3cbe69b6677b826",
        "edit_ts": "2023-09-08T16:08:13.982Z",
        "numInstances": 1
    },
    {
        "_id": "64fb46ee2dde87227ff6f454",
        "user": {
            "id": "64fb46ec8f3d00d192285960"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276487628143198213"
        },
        "commitId": "64fb46eec3cbe69b6677bbb2",
        "edit_ts": "2023-09-08T16:08:18.525Z",
        "numInstances": 1
    },
    {
        "_id": "64fb46f0a71cd8b43825a037",
        "user": {
            "id": "64fb46ed2dde87227ff6f451"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276487636733132801"
        },
        "commitId": "64fb46f0c3cbe69b6677bd3c",
        "edit_ts": "2023-09-08T16:08:20.105Z",
        "numInstances": 1
    },
    {
        "_id": "64fb46f1a71cd8b43825a038",
        "user": {
            "id": "64fb46ee8f3d00d192285961"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276487641028100099"
        },
        "commitId": "64fb46f1c3cbe69b6677bd97",
        "edit_ts": "2023-09-08T16:08:21.079Z",
        "numInstances": 1
    },
    {
        "_id": "64fb46f3b3d3999ca6fc716f",
        "user": {
            "id": "64fb46f12dde87227ff6f455"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276487645323067393"
        },
        "commitId": "64fb46f3c3cbe69b6677be96",
        "edit_ts": "2023-09-08T16:08:22.623Z",
        "numInstances": 1
    },
    {
        "_id": "64fb470fa71cd8b43825a03b",
        "user": {
            "id": "64fb470db3d3999ca6fc7176"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276487752697249793"
        },
        "commitId": "64fb470fc3cbe69b6677c6b2",
        "numInstances": 1
    },
    {
        "_id": "64fb47835d548670475e18ae",
        "user": {
            "id": "64fb47803f3bceb7fbe8519b"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276488263798358018"
        },
        "commitId": "64fb4783c3cbe69b6677d679",
        "edit_ts": "2023-09-08T16:10:46.218Z",
        "numInstances": 1
    },
    {
        "_id": "64fb479b3f3bceb7fbe8519c",
        "user": {
            "id": "64fb479aed4fc0cd4a9eb105"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276488371172540418"
        },
        "commitId": "64fb479bc3cbe69b6677dba8",
        "edit_ts": "2023-09-08T16:11:11.565Z",
        "numInstances": 1
    },
    {
        "_id": "64fb47b9a516176644363b0c",
        "user": {
            "id": "64fb47b7a516176644363b0b"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276488500021559300"
        },
        "commitId": "64fb47b9c3cbe69b6677e24f",
        "edit_ts": "2023-09-08T16:11:41.431Z",
        "numInstances": 1
    },
    {
        "_id": "64fb47bca516176644363b0e",
        "user": {
            "id": "64fb47baa516176644363b0d"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276488508611493891"
        },
        "commitId": "64fb47bcc3cbe69b6677e394",
        "edit_ts": "2023-09-08T16:11:43.646Z",
        "numInstances": 1
    },
    {
        "_id": "64fb47c25d548670475e18b8",
        "user": {
            "id": "64fb47bf5d548670475e18b7"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276488538676264961"
        },
        "commitId": "64fb47c2c3cbe69b6677e681",
        "edit_ts": "2023-09-08T16:11:50.423Z",
        "numInstances": 1
    },
    {
        "_id": "64fb47c5a516176644363b17",
        "user": {
            "id": "64fb47c33f3bceb7fbe851a5"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276488547266199554"
        },
        "commitId": "64fb47c5c3cbe69b6677e7e8",
        "edit_ts": "2023-09-08T16:11:52.877Z",
        "numInstances": 1
    },
    {
        "_id": "64fb47d4a516176644363b1c",
        "user": {
            "id": "64fb47d25d548670475e18bc"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276488598805807105"
        },
        "commitId": "64fb47d4c3cbe69b6677ed31",
        "numInstances": 1
    },
    {
        "_id": "64fb47d85d548670475e18c0",
        "user": {
            "id": "64fb47d6ed4fc0cd4a9eb10c"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276488628870578178"
        },
        "commitId": "64fb47d8c3cbe69b6677ef74",
        "edit_ts": "2023-09-08T16:12:11.695Z",
        "numInstances": 1
    },
    {
        "_id": "64fb47dea516176644363b20",
        "user": {
            "id": "64fb47db5d548670475e18c1"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276488658935349249"
        },
        "commitId": "64fb47dec3cbe69b6677f268",
        "edit_ts": "2023-09-08T16:12:18.283Z",
        "numInstances": 1
    },
    {
        "_id": "64fb47df5d548670475e18c2",
        "user": {
            "id": "64fb47dda516176644363b1f"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276488658935349252"
        },
        "commitId": "64fb47dfc3cbe69b6677f31a",
        "edit_ts": "2023-09-08T16:12:18.878Z",
        "numInstances": 1
    },
    {
        "_id": "64fb4802d854033454531592",
        "user": {
            "id": "64fb48006f65be4320a2d703"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276488813554171909"
        },
        "commitId": "64fb4802c3cbe69b6677fb2c",
        "edit_ts": "2023-09-08T16:12:54.869Z",
        "numInstances": 1
    },
    {
        "_id": "64fb48056f65be4320a2d705",
        "user": {
            "id": "64fb480366564b74f28bec8c"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276488817849139209"
        },
        "commitId": "64fb4805c3cbe69b6677fc05",
        "edit_ts": "2023-09-08T16:12:55.912Z",
        "numInstances": 1
    },
    {
        "_id": "64fb480566564b74f28bec8d",
        "user": {
            "id": "64fb48036f65be4320a2d704"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276488822144106497"
        },
        "commitId": "64fb4805c3cbe69b6677fc81",
        "edit_ts": "2023-09-08T16:12:56.470Z",
        "numInstances": 1
    },
    {
        "_id": "64fb480ed85403345453159f",
        "user": {
            "id": "64fb480c6f65be4320a2d706"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276488865093779457"
        },
        "commitId": "64fb480ec3cbe69b6678012d",
        "edit_ts": "2023-09-08T16:13:06.589Z",
        "numInstances": 1
    },
    {
        "_id": "64fb483b6f65be4320a2d70f",
        "user": {
            "id": "64fb483a85b539909a2e8f8d"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276489062662275082"
        },
        "commitId": "64fb483bc3cbe69b66780a4c",
        "edit_ts": "2023-09-08T16:13:52.302Z",
        "numInstances": 1
    },
    {
        "_id": "64fb483f85b539909a2e8f90",
        "user": {
            "id": "64fb483b66564b74f28bec93"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276489071252209670"
        },
        "commitId": "64fb483fc3cbe69b66780c8e",
        "edit_ts": "2023-09-08T16:13:54.382Z",
        "numInstances": 1
    },
    {
        "_id": "64fb48406f65be4320a2d710",
        "user": {
            "id": "64fb483c85b539909a2e8f8e"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276489075547176998"
        },
        "commitId": "64fb4840c3cbe69b66780dd9",
        "edit_ts": "2023-09-08T16:13:55.579Z",
        "numInstances": 1
    },
    {
        "_id": "64fb484285b539909a2e8f96",
        "user": {
            "id": "64fb48406f65be4320a2d711"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276489084137111561"
        },
        "commitId": "64fb4842c3cbe69b66780ff1",
        "edit_ts": "2023-09-08T16:13:57.968Z",
        "numInstances": 1
    },
    {
        "_id": "64fb484385b539909a2e8f97",
        "user": {
            "id": "64fb484085b539909a2e8f91"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276489088432078849"
        },
        "commitId": "64fb4843c3cbe69b667810ff",
        "edit_ts": "2023-09-08T16:13:58.501Z",
        "numInstances": 1
    },
    {
        "_id": "64fb4846d8540334545315a9",
        "user": {
            "id": "64fb48436f65be4320a2d714"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276489101316980744"
        },
        "commitId": "64fb4846c3cbe69b66781398",
        "edit_ts": "2023-09-08T16:14:01.740Z",
        "numInstances": 1
    },
    {
        "_id": "64fb4846d8540334545315aa",
        "user": {
            "id": "64fb48446f65be4320a2d715"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276489105611948033"
        },
        "commitId": "64fb4846c3cbe69b667813ce",
        "edit_ts": "2023-09-08T16:14:02.210Z",
        "numInstances": 1
    },
    {
        "_id": "64fb485f66564b74f28beca2",
        "user": {
            "id": "64fb485d66564b74f28beca1"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276489212986130477"
        },
        "commitId": "64fb485fc3cbe69b66781c00",
        "edit_ts": "2023-09-08T16:14:27.255Z",
        "numInstances": 1
    },
    {
        "_id": "64fb511eba8d5cd375e83339",
        "user": {
            "id": "64fb511cba8d5cd375e83338"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276498825122938888"
        },
        "commitId": "64fb511ec3cbe69b667922f5",
        "edit_ts": "2023-09-08T16:51:45.529Z",
        "numInstances": 1
    },
    {
        "_id": "64fb511fba8d5cd375e8333a",
        "user": {
            "id": "64fb511dd9570058522ff229"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276498833712873477"
        },
        "commitId": "64fb511fc3cbe69b667923cf",
        "edit_ts": "2023-09-08T16:51:47.268Z",
        "numInstances": 1
    },
    {
        "_id": "64fb511fd9570058522ff22b",
        "user": {
            "id": "64fb511dd9570058522ff228"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276498833712873474"
        },
        "commitId": "64fb511fc3cbe69b66792432",
        "edit_ts": "2023-09-08T16:51:47.221Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5120d9570058522ff22c",
        "user": {
            "id": "64fb511ed9570058522ff22a"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276498833712873481"
        },
        "commitId": "64fb5120c3cbe69b66792485",
        "edit_ts": "2023-09-08T16:51:47.362Z",
        "numInstances": 1
    },
    {
        "_id": "64fb51a37097b202a0a09538",
        "user": {
            "id": "64fb2df6127184434df45fec"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276499499432804353"
        },
        "commitId": "64fb51a578ca0b12459fa11f",
        "edit_ts": "2023-09-08T16:53:57.361Z",
        "licenses": [],
        "publishedTimestamp": "2023-09-08T16:53:57.361Z",
        "deleted": true,
        "numInstances": 0
    },
    {
        "_id": "64fb51a478ca0b12459fa11d",
        "user": {
            "id": "64fb2df6127184434df45fec"
        },
        "permissionToShare": null,
        "_ts": {
            "$timestamp": "7276499387763654664"
        },
        "commitId": "64fb51a4c3cbe69b66793950",
        "edit_ts": "2023-09-08T16:53:56.917Z",
        "numInstances": 0
    },
    {
        "_id": "64fb52b47097b202a0a09539",
        "user": {
            "id": "64fb2df6127184434df45fec"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276500568879661061"
        },
        "commitId": "64fb52b66cadc160339854c3",
        "edit_ts": "2023-09-08T16:58:31.164Z",
        "licenses": [],
        "publishedTimestamp": "2023-09-08T16:58:31.164Z",
        "numInstances": 0
    },
    {
        "_id": "64fb52b66cadc160339854c1",
        "user": {
            "id": "64fb2df6127184434df45fec"
        },
        "permissionToShare": null,
        "_ts": {
            "$timestamp": "7276500564584693769"
        },
        "commitId": "64fb52b6c3cbe69b66795b3b",
        "edit_ts": "2023-09-08T16:58:30.748Z",
        "numInstances": 0
    },
    {
        "_id": "64fb5385f2a2a970e5eddea2",
        "user": {
            "id": "64fb5381de4d52ddac63ebac"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276501466527825922"
        },
        "commitId": "64fb5385c3cbe69b66797a67",
        "edit_ts": "2023-09-08T17:02:00.857Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5389cf513fa7a841e98a",
        "user": {
            "id": "64fb5387de4d52ddac63ebaf"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276501488002662401"
        },
        "commitId": "64fb5389c3cbe69b66797bcc",
        "edit_ts": "2023-09-08T17:02:05.287Z",
        "numInstances": 1
    },
    {
        "_id": "64fb53c0f2a2a970e5eddea8",
        "user": {
            "id": "64fb53becf513fa7a841e98d"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276501707045994502"
        },
        "commitId": "64fb53c0c3cbe69b667987a7",
        "numInstances": 1
    },
    {
        "_id": "64fb53c0f2a2a970e5eddea9",
        "user": {
            "id": "64fb53bede4d52ddac63ebb6"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276501719930896386"
        },
        "commitId": "64fb53c0c3cbe69b667987e4",
        "edit_ts": "2023-09-08T17:02:59.013Z",
        "numInstances": 1
    },
    {
        "_id": "64fb53c0fd4cbfb0730467ec",
        "user": {
            "id": "64fb53befd4cbfb0730467ea"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276501724225863682"
        },
        "commitId": "64fb53c0c3cbe69b66798831",
        "edit_ts": "2023-09-08T17:03:00.053Z",
        "numInstances": 1
    },
    {
        "_id": "64fb53c5cf513fa7a841e99a",
        "user": {
            "id": "64fb53c2fd4cbfb0730467ef"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276501741405732868"
        },
        "commitId": "64fb53c5c3cbe69b66798c3e",
        "edit_ts": "2023-09-08T17:03:04.315Z",
        "numInstances": 1
    },
    {
        "_id": "64fb53c6cf513fa7a841e99b",
        "user": {
            "id": "64fb53c3cf513fa7a841e997"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276501745700700165"
        },
        "commitId": "64fb53c6c3cbe69b66798d27",
        "edit_ts": "2023-09-08T17:03:05.603Z",
        "numInstances": 1
    },
    {
        "_id": "64fb53c7de4d52ddac63ebbc",
        "user": {
            "id": "64fb53c5fd4cbfb0730467f0"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276501749995667464"
        },
        "commitId": "64fb53c7c3cbe69b66798e18",
        "edit_ts": "2023-09-08T17:03:06.664Z",
        "numInstances": 1
    },
    {
        "_id": "64fb53c9de4d52ddac63ebbd",
        "user": {
            "id": "64fb53c7f2a2a970e5eddeae"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276501762880569354"
        },
        "commitId": "64fb53c9c3cbe69b66798f9e",
        "edit_ts": "2023-09-08T17:03:09.950Z",
        "numInstances": 1
    },
    {
        "_id": "64fb53cdf2a2a970e5eddeaf",
        "user": {
            "id": "64fb53cade4d52ddac63ebbe"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276501780060438530"
        },
        "commitId": "64fb53cdc3cbe69b66799269",
        "edit_ts": "2023-09-08T17:03:13.533Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5932391c4186a990ab63",
        "user": {
            "id": "64fb5930391c4186a990ab61"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276507707115307009"
        },
        "commitId": "64fb5932c3cbe69b667a3d83",
        "edit_ts": "2023-09-08T17:26:13.329Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5936391c4186a990ab69",
        "user": {
            "id": "64fb5934391c4186a990ab68"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276507724295176194"
        },
        "commitId": "64fb5936c3cbe69b667a3fd1",
        "edit_ts": "2023-09-08T17:26:17.894Z",
        "numInstances": 1
    },
    {
        "_id": "64fb593b391c4186a990ab6f",
        "user": {
            "id": "64fb5938391c4186a990ab6e"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276507750064979970"
        },
        "commitId": "64fb593bc3cbe69b667a4189",
        "edit_ts": "2023-09-08T17:26:23.782Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5961391c4186a990ab7f",
        "user": {
            "id": "64fb595f391c4186a990ab7b"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276507908978769923"
        },
        "commitId": "64fb5961c3cbe69b667a49cb",
        "edit_ts": "2023-09-08T17:27:00.455Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5966391c4186a990ab89",
        "user": {
            "id": "64fb5964391c4186a990ab86"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276507934748573697"
        },
        "commitId": "64fb5966c3cbe69b667a4c30",
        "edit_ts": "2023-09-08T17:27:06.005Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5969391c4186a990ab91",
        "user": {
            "id": "64fb5967391c4186a990ab8c"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276507943338508298"
        },
        "commitId": "64fb5969c3cbe69b667a4dea",
        "edit_ts": "2023-09-08T17:27:08.913Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5969391c4186a990ab92",
        "user": {
            "id": "64fb5967391c4186a990ab8a"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276507930453606411"
        },
        "commitId": "64fb5969c3cbe69b667a4e0e",
        "numInstances": 1
    },
    {
        "_id": "64fb596c391c4186a990ab9a",
        "user": {
            "id": "64fb596a391c4186a990ab97"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276507943338508293"
        },
        "commitId": "64fb596cc3cbe69b667a4fd9",
        "numInstances": 1
    },
    {
        "_id": "64fb5975391c4186a990abae",
        "user": {
            "id": "64fb5973391c4186a990abac"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276507994878115844"
        },
        "commitId": "64fb5975c3cbe69b667a551c",
        "edit_ts": "2023-09-08T17:27:20.653Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5977391c4186a990abb1",
        "user": {
            "id": "64fb5975391c4186a990abad"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276508007763017730"
        },
        "commitId": "64fb5977c3cbe69b667a561e",
        "edit_ts": "2023-09-08T17:27:23.614Z",
        "numInstances": 1
    },
    {
        "_id": "64fb597a391c4186a990abb7",
        "user": {
            "id": "64fb5978391c4186a990abb2"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276508020647919622"
        },
        "commitId": "64fb597ac3cbe69b667a57fe",
        "edit_ts": "2023-09-08T17:27:26.479Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5b64de997fb7f68bf54b",
        "user": {
            "id": "64fb5b61de997fb7f68bf548"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276510125181894657"
        },
        "commitId": "64fb5b64c3cbe69b667a966a",
        "edit_ts": "2023-09-08T17:35:36.334Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5b69de997fb7f68bf54f",
        "user": {
            "id": "64fb5b65de997fb7f68bf54c"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276510142361763841"
        },
        "commitId": "64fb5b69c3cbe69b667a9797",
        "edit_ts": "2023-09-08T17:35:40.835Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5b874dc1c3735f3c4acc",
        "user": {
            "id": "64fb5b864dc1c3735f3c4acb"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276510258325880833"
        },
        "commitId": "64fb5b87c3cbe69b667a9d84",
        "numInstances": 1
    },
    {
        "_id": "64fb5b8f3dbbb8613b1ca74a",
        "user": {
            "id": "64fb5b8d3dbbb8613b1ca748"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276510309865488389"
        },
        "commitId": "64fb5b8fc3cbe69b667aa245",
        "edit_ts": "2023-09-08T17:36:19.249Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5b914dc1c3735f3c4acf",
        "user": {
            "id": "64fb5b8f3dbbb8613b1ca749"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276510314160455682"
        },
        "commitId": "64fb5b91c3cbe69b667aa304",
        "edit_ts": "2023-09-08T17:36:20.606Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5b934dc1c3735f3c4ad2",
        "user": {
            "id": "64fb5b903dbbb8613b1ca74b"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276510322750390276"
        },
        "commitId": "64fb5b93c3cbe69b667aa3e9",
        "edit_ts": "2023-09-08T17:36:22.500Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5b9ade997fb7f68bf55e",
        "user": {
            "id": "64fb5b99de997fb7f68bf55c"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276510339930259458"
        },
        "commitId": "64fb5b9ac3cbe69b667aa893",
        "numInstances": 1
    },
    {
        "_id": "64fb5b9dde997fb7f68bf566",
        "user": {
            "id": "64fb5b9bde997fb7f68bf55f"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276510365700063237"
        },
        "commitId": "64fb5b9dc3cbe69b667aaacb",
        "edit_ts": "2023-09-08T17:36:32.760Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5ba2de997fb7f68bf571",
        "user": {
            "id": "64fb5ba0de997fb7f68bf56f"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276510387174899714"
        },
        "commitId": "64fb5ba2c3cbe69b667aad3d",
        "edit_ts": "2023-09-08T17:36:37.461Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5ba4de997fb7f68bf577",
        "user": {
            "id": "64fb5ba1de997fb7f68bf570"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276510395764834306"
        },
        "commitId": "64fb5ba4c3cbe69b667aaec2",
        "edit_ts": "2023-09-08T17:36:39.323Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5ba5de997fb7f68bf578",
        "user": {
            "id": "64fb5ba2de997fb7f68bf572"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276510404354768904"
        },
        "commitId": "64fb5ba5c3cbe69b667aafbf",
        "edit_ts": "2023-09-08T17:36:41.493Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5bb1de997fb7f68bf587",
        "user": {
            "id": "64fb5badde997fb7f68bf586"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276510451599409159"
        },
        "commitId": "64fb5bb1c3cbe69b667ab4cd",
        "edit_ts": "2023-09-08T17:36:52.544Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5bb6de997fb7f68bf58e",
        "user": {
            "id": "64fb5bb5de997fb7f68bf58d"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276510460189343748"
        },
        "commitId": "64fb5bb6c3cbe69b667ab7cd",
        "numInstances": 1
    },
    {
        "_id": "64fb5bc05517cc4743482289",
        "user": {
            "id": "64fb5bbd5517cc4743482286"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276510520318885894"
        },
        "commitId": "64fb5bc0c3cbe69b667abc3a",
        "edit_ts": "2023-09-08T17:37:08.510Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5bc4de997fb7f68bf599",
        "user": {
            "id": "64fb5bc1de997fb7f68bf598"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276510533203787777"
        },
        "commitId": "64fb5bc4c3cbe69b667abd72",
        "edit_ts": "2023-09-08T17:37:11.020Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5bc55517cc474348228d",
        "user": {
            "id": "64fb5bc35517cc474348228c"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276510537498755073"
        },
        "commitId": "64fb5bc5c3cbe69b667abe05",
        "edit_ts": "2023-09-08T17:37:12.852Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5bcf5517cc4743482298",
        "user": {
            "id": "64fb5bcd5517cc4743482297"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276510580448428036"
        },
        "commitId": "64fb5bcfc3cbe69b667ac26f",
        "edit_ts": "2023-09-08T17:37:22.396Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5bd95517cc47434822a1",
        "user": {
            "id": "64fb5bd75517cc47434822a0"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276510627693068290"
        },
        "commitId": "64fb5bd9c3cbe69b667ac62f",
        "edit_ts": "2023-09-08T17:37:33.184Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5bf45517cc47434822b3",
        "user": {
            "id": "64fb5bf35517cc47434822ae"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276510735067250689"
        },
        "commitId": "64fb5bf4c3cbe69b667acd10",
        "edit_ts": "2023-09-08T17:37:58.725Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5bf75517cc47434822b8",
        "user": {
            "id": "64fb5bf45517cc47434822b4"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276510752247119874"
        },
        "commitId": "64fb5bf7c3cbe69b667ace2e",
        "edit_ts": "2023-09-08T17:38:02.061Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5bf95517cc47434822be",
        "user": {
            "id": "64fb5bf75517cc47434822b7"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276510765132021765"
        },
        "commitId": "64fb5bf9c3cbe69b667acf9c",
        "edit_ts": "2023-09-08T17:38:05.564Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5bf95517cc47434822bf",
        "user": {
            "id": "64fb5bf75517cc47434822b9"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276510765132021761"
        },
        "commitId": "64fb5bf9c3cbe69b667acff9",
        "edit_ts": "2023-09-08T17:38:05.062Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5c115517cc47434822d4",
        "user": {
            "id": "64fb5c105517cc47434822d3"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276510859621302333"
        },
        "commitId": "64fb5c11c3cbe69b667ad6d7",
        "edit_ts": "2023-09-08T17:38:27.475Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5c155517cc47434822db",
        "user": {
            "id": "64fb5c125517cc47434822d7"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276510881096138754"
        },
        "commitId": "64fb5c15c3cbe69b667ad8c6",
        "edit_ts": "2023-09-08T17:38:32.816Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5c155517cc47434822dc",
        "user": {
            "id": "64fb5c135517cc47434822d8"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276510885391106049"
        },
        "commitId": "64fb5c15c3cbe69b667ad928",
        "edit_ts": "2023-09-08T17:38:33.341Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5c4cfa6af7322087b517",
        "user": {
            "id": "64fb5c4bfa6af7322087b515"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276511121614307334"
        },
        "commitId": "64fb5c4cc3cbe69b667ae539",
        "edit_ts": "2023-09-08T17:39:28.364Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5c4e49d308f227437720",
        "user": {
            "id": "64fb5c4cfa6af7322087b516"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276511125909274625"
        },
        "commitId": "64fb5c4ec3cbe69b667ae5fe",
        "edit_ts": "2023-09-08T17:39:29.378Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5c5049d308f227437723",
        "user": {
            "id": "64fb5c4e49d308f22743771f"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276511138794176517"
        },
        "commitId": "64fb5c50c3cbe69b667ae71d",
        "edit_ts": "2023-09-08T17:39:32.447Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5c545517cc47434822e9",
        "user": {
            "id": "64fb5c515517cc47434822e8"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276511151679078402"
        },
        "commitId": "64fb5c54c3cbe69b667ae955",
        "edit_ts": "2023-09-08T17:39:35.598Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5c63fa6af7322087b520",
        "user": {
            "id": "64fb5c61fa6af7322087b51f"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276511216103587843"
        },
        "commitId": "64fb5c63c3cbe69b667aee4d",
        "edit_ts": "2023-09-08T17:39:50.977Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5d832072798f9819434b",
        "user": {
            "id": "64fb5d81a97898fa64497e0e"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276512457349136394"
        },
        "commitId": "64fb5d83c3cbe69b667b1646",
        "edit_ts": "2023-09-08T17:44:39.538Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5d842072798f9819434c",
        "user": {
            "id": "64fb5d828fb8d31a784c9d0b"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276512457349136387"
        },
        "commitId": "64fb5d84c3cbe69b667b16bc",
        "edit_ts": "2023-09-08T17:44:39.317Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5d86a97898fa64497e10",
        "user": {
            "id": "64fb5d85a97898fa64497e0f"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276512465939070989"
        },
        "commitId": "64fb5d86c3cbe69b667b1865",
        "edit_ts": "2023-09-08T17:44:41.713Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5d872072798f9819434f",
        "user": {
            "id": "64fb5d858498dad7eff1c238"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276512470234038276"
        },
        "commitId": "64fb5d87c3cbe69b667b194c",
        "edit_ts": "2023-09-08T17:44:42.878Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5d8d8498dad7eff1c239",
        "user": {
            "id": "64fb5d8a2072798f98194350"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276512504593776642"
        },
        "commitId": "64fb5d8dc3cbe69b667b1da4",
        "edit_ts": "2023-09-08T17:44:50.086Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5dbca97898fa64497e18",
        "user": {
            "id": "64fb5dbb8fb8d31a784c9d16"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276512702162272259"
        },
        "commitId": "64fb5dbcc3cbe69b667b26ad",
        "edit_ts": "2023-09-08T17:45:36.837Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5dbd2072798f98194359",
        "user": {
            "id": "64fb5dbb2072798f98194358"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276512689277370369"
        },
        "commitId": "64fb5dbdc3cbe69b667b2726",
        "numInstances": 1
    },
    {
        "_id": "64fb5dbd8498dad7eff1c23f",
        "user": {
            "id": "64fb5dbca97898fa64497e17"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276512702162272263"
        },
        "commitId": "64fb5dbdc3cbe69b667b2789",
        "edit_ts": "2023-09-08T17:45:36.847Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5dc38fb8d31a784c9d20",
        "user": {
            "id": "64fb5dc18fb8d31a784c9d1b"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276512727932076035"
        },
        "commitId": "64fb5dc3c3cbe69b667b2b14",
        "edit_ts": "2023-09-08T17:45:42.950Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5dcd2072798f9819435c",
        "user": {
            "id": "64fb5dcba97898fa64497e1e"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276512757996847105"
        },
        "commitId": "64fb5dcdc3cbe69b667b2fb9",
        "numInstances": 1
    },
    {
        "_id": "64fb5dd18fb8d31a784c9d2b",
        "user": {
            "id": "64fb5dcf8498dad7eff1c245"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276512788061618179"
        },
        "commitId": "64fb5dd1c3cbe69b667b329a",
        "edit_ts": "2023-09-08T17:45:56.489Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5dd28fb8d31a784c9d2c",
        "user": {
            "id": "64fb5dcfa97898fa64497e21"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276512809536454659"
        },
        "commitId": "64fb5dd2c3cbe69b667b3330",
        "edit_ts": "2023-09-08T17:46:01.755Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5dd52072798f9819435f",
        "user": {
            "id": "64fb5dd38fb8d31a784c9d2d"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276512813831421953"
        },
        "commitId": "64fb5dd5c3cbe69b667b3487",
        "edit_ts": "2023-09-08T17:46:02.069Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5e3d99f9f586efe586a9",
        "user": {
            "id": "64fb5e3cfe749cb2d574abdc"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276513251918086146"
        },
        "commitId": "64fb5e3dc3cbe69b667b4665",
        "edit_ts": "2023-09-08T17:47:44.400Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5e42d87d852a14cb92b2",
        "user": {
            "id": "64fb5e40d87d852a14cb92af"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276513277687889925"
        },
        "commitId": "64fb5e42c3cbe69b667b48e4",
        "edit_ts": "2023-09-08T17:47:50.304Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5e4405049afb41696004",
        "user": {
            "id": "64fb5e42fe749cb2d574abe0"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276513269097955334"
        },
        "commitId": "64fb5e44c3cbe69b667b49ce",
        "numInstances": 1
    },
    {
        "_id": "64fb5e46fe749cb2d574abe6",
        "user": {
            "id": "64fb5e43fe749cb2d574abe1"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276513294867759105"
        },
        "commitId": "64fb5e47c3cbe69b667b4a97",
        "edit_ts": "2023-09-08T17:47:54.107Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5e7a99f9f586efe586b4",
        "user": {
            "id": "64fb5e7805049afb41696008"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276513513911091201"
        },
        "commitId": "64fb5e7ac3cbe69b667b5855",
        "edit_ts": "2023-09-08T17:48:45.344Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5e7a05049afb4169600a",
        "user": {
            "id": "64fb5e77fe749cb2d574abec"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276513522501025813"
        },
        "commitId": "64fb5e7ac3cbe69b667b58ca",
        "edit_ts": "2023-09-08T17:48:47.925Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5e7c99f9f586efe586b5",
        "user": {
            "id": "64fb5e7a05049afb4169600b"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276513522501025809"
        },
        "commitId": "64fb5e7cc3cbe69b667b5a6c",
        "edit_ts": "2023-09-08T17:48:47.847Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5e7cd87d852a14cb92bc",
        "user": {
            "id": "64fb5e7905049afb41696009"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276513526795993092"
        },
        "commitId": "64fb5e7cc3cbe69b667b5a8b",
        "edit_ts": "2023-09-08T17:48:48.742Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5e7ffe749cb2d574abf1",
        "user": {
            "id": "64fb5e7d05049afb41696010"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276513535385927685"
        },
        "commitId": "64fb5e7fc3cbe69b667b5d0f",
        "edit_ts": "2023-09-08T17:48:50.524Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5e8199f9f586efe586bb",
        "user": {
            "id": "64fb5e7e05049afb41696013"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276513548270829569"
        },
        "commitId": "64fb5e81c3cbe69b667b5e98",
        "edit_ts": "2023-09-08T17:48:53.065Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5e83fe749cb2d574abf6",
        "user": {
            "id": "64fb5e8099f9f586efe586ba"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276513552565796867"
        },
        "commitId": "64fb5e83c3cbe69b667b6075",
        "edit_ts": "2023-09-08T17:48:54.790Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5e99d87d852a14cb92c2",
        "user": {
            "id": "64fb5e9899f9f586efe586c4"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276513651350044673"
        },
        "commitId": "64fb5e99c3cbe69b667b67b5",
        "edit_ts": "2023-09-08T17:49:17.009Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5fbcb8b13230b20b3691",
        "user": {
            "id": "64fb5fb993f404692d1831a8"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276514896890560513"
        },
        "commitId": "64fb5fbcc3cbe69b667b8f46",
        "edit_ts": "2023-09-08T17:54:07.165Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5fbdb8b13230b20b3692",
        "user": {
            "id": "64fb5fba782cdd30f1763d5f"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276514905480495106"
        },
        "commitId": "64fb5fbdc3cbe69b667b8fe3",
        "edit_ts": "2023-09-08T17:54:09.159Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5ff125d26224e5c90313",
        "user": {
            "id": "64fb5fef25d26224e5c9030e"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276515124523827208"
        },
        "commitId": "64fb5ff1c3cbe69b667b9aca",
        "edit_ts": "2023-09-08T17:55:00.612Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5ff193f404692d1831ae",
        "user": {
            "id": "64fb5fef93f404692d1831ad"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276515133113761793"
        },
        "commitId": "64fb5ff1c3cbe69b667b9b3c",
        "edit_ts": "2023-09-08T17:55:02.007Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5ff825d26224e5c90317",
        "user": {
            "id": "64fb5ff5782cdd30f1763d71"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276515154588598276"
        },
        "commitId": "64fb5ff8c3cbe69b667ba031",
        "edit_ts": "2023-09-08T17:55:07.759Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5ff8b8b13230b20b369a",
        "user": {
            "id": "64fb5ff693f404692d1831b2"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276515154588598279"
        },
        "commitId": "64fb5ff8c3cbe69b667ba0f1",
        "edit_ts": "2023-09-08T17:55:07.817Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5ffa782cdd30f1763d72",
        "user": {
            "id": "64fb5ff893f404692d1831b3"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276515163178532875"
        },
        "commitId": "64fb5ffac3cbe69b667ba268",
        "edit_ts": "2023-09-08T17:55:09.727Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5ffc25d26224e5c90319",
        "user": {
            "id": "64fb5ff993f404692d1831b4"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276515171768467458"
        },
        "commitId": "64fb5ffcc3cbe69b667ba3ab",
        "edit_ts": "2023-09-08T17:55:11.340Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5ffe782cdd30f1763d76",
        "user": {
            "id": "64fb5ffc782cdd30f1763d73"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276515188948336644"
        },
        "commitId": "64fb5ffec3cbe69b667ba5f2",
        "edit_ts": "2023-09-08T17:55:15.843Z",
        "numInstances": 1
    },
    {
        "_id": "64fb5ffe93f404692d1831b5",
        "user": {
            "id": "64fb5ffb25d26224e5c90318"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276515184653369346"
        },
        "commitId": "64fb5ffec3cbe69b667ba636",
        "edit_ts": "2023-09-08T17:55:14.061Z",
        "numInstances": 1
    },
    {
        "_id": "64fb604476dcfb74e6921d82",
        "user": {
            "id": "64fb60425c3414ceb7ad603c"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276515468121210883"
        },
        "commitId": "64fb6044c3cbe69b667bb71f",
        "numInstances": 1
    },
    {
        "_id": "64fb60455c3414ceb7ad603f",
        "user": {
            "id": "64fb604376dcfb74e6921d81"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276515489596047362"
        },
        "commitId": "64fb6045c3cbe69b667bb7cf",
        "edit_ts": "2023-09-08T17:56:25.330Z",
        "numInstances": 1
    },
    {
        "_id": "64fb60465c3414ceb7ad6040",
        "user": {
            "id": "64fb60445c3414ceb7ad603d"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276515498185981953"
        },
        "commitId": "64fb6046c3cbe69b667bb891",
        "edit_ts": "2023-09-08T17:56:27.039Z",
        "numInstances": 1
    },
    {
        "_id": "64fb604776dcfb74e6921d87",
        "user": {
            "id": "64fb60455c3414ceb7ad603e"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276515493891014663"
        },
        "commitId": "64fb6047c3cbe69b667bb90c",
        "edit_ts": "2023-09-08T17:56:26.540Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6098b0f9fb8a0e858d77",
        "user": {
            "id": "64fb6096659a11d9d4ce409b"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276515841783365634"
        },
        "commitId": "64fb6098c3cbe69b667bc8aa",
        "edit_ts": "2023-09-08T17:57:47.273Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6099b0f9fb8a0e858d7a",
        "user": {
            "id": "64fb6097b0f9fb8a0e858d76"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276515833193431045"
        },
        "commitId": "64fb6099c3cbe69b667bc987",
        "numInstances": 1
    },
    {
        "_id": "64fb609d659a11d9d4ce409e",
        "user": {
            "id": "64fb609bb0f9fb8a0e858d7f"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276515863258202115"
        },
        "commitId": "64fb609dc3cbe69b667bcb83",
        "edit_ts": "2023-09-08T17:57:52.510Z",
        "numInstances": 1
    },
    {
        "_id": "64fb60a0b0f9fb8a0e858d86",
        "user": {
            "id": "64fb609e659a11d9d4ce409f"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276515880438071300"
        },
        "commitId": "64fb60a0c3cbe69b667bcdcf",
        "edit_ts": "2023-09-08T17:57:56.956Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6121fe749cb2d574abfc",
        "user": {
            "id": "64fb611fd87d852a14cb92c6"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276516438783819778"
        },
        "commitId": "64fb6121c3cbe69b667be081",
        "edit_ts": "2023-09-08T18:00:06.439Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6124d87d852a14cb92c8",
        "user": {
            "id": "64fb6122d87d852a14cb92c7"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276516451668721671"
        },
        "commitId": "64fb6124c3cbe69b667be11e",
        "edit_ts": "2023-09-08T18:00:09.189Z",
        "numInstances": 1
    },
    {
        "_id": "64fb613999f9f586efe586c9",
        "user": {
            "id": "64fb6136d87d852a14cb92cf"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276516533273100289"
        },
        "commitId": "64fb6139c3cbe69b667be7a2",
        "edit_ts": "2023-09-08T18:00:28.485Z",
        "numInstances": 1
    },
    {
        "_id": "64fb615ed87d852a14cb92d5",
        "user": {
            "id": "64fb615b05049afb4169601f"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276516692186890246"
        },
        "commitId": "64fb615ec3cbe69b667bef88",
        "edit_ts": "2023-09-08T18:01:05.917Z",
        "numInstances": 1
    },
    {
        "_id": "64fb615f05049afb41696020",
        "user": {
            "id": "64fb615dfe749cb2d574abfd"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276516700776824835"
        },
        "commitId": "64fb615fc3cbe69b667beff5",
        "edit_ts": "2023-09-08T18:01:07.133Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6162fe749cb2d574ac01",
        "user": {
            "id": "64fb615ffe749cb2d574abfe"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276516713661726721"
        },
        "commitId": "64fb6162c3cbe69b667bf110",
        "edit_ts": "2023-09-08T18:01:10.220Z",
        "numInstances": 1
    },
    {
        "_id": "64fb616ed87d852a14cb92d7",
        "user": {
            "id": "64fb616cfe749cb2d574ac07"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276516760906366979"
        },
        "commitId": "64fb616ec3cbe69b667bf6c5",
        "edit_ts": "2023-09-08T18:01:21.097Z",
        "numInstances": 1
    },
    {
        "_id": "64fb617005049afb41696023",
        "user": {
            "id": "64fb616e99f9f586efe586d8"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276516782381203458"
        },
        "commitId": "64fb6170c3cbe69b667bf798",
        "edit_ts": "2023-09-08T18:01:26.591Z",
        "numInstances": 1
    },
    {
        "_id": "64fb617905049afb41696027",
        "user": {
            "id": "64fb6177d87d852a14cb92d9"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276516808151007233"
        },
        "commitId": "64fb6179c3cbe69b667bfcd1",
        "edit_ts": "2023-09-08T18:01:32.213Z",
        "numInstances": 1
    },
    {
        "_id": "64fb617a05049afb41696028",
        "user": {
            "id": "64fb617705049afb41696026"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276516812445974529"
        },
        "commitId": "64fb617ac3cbe69b667bfd7c",
        "edit_ts": "2023-09-08T18:01:33.638Z",
        "numInstances": 1
    },
    {
        "_id": "64fb61d54d6745ace50b8a51",
        "user": {
            "id": "64fb61d2fcb3a49a9747dd50"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276517207582965761"
        },
        "commitId": "64fb61d5c3cbe69b667c0b69",
        "edit_ts": "2023-09-08T18:03:05.011Z",
        "numInstances": 1
    },
    {
        "_id": "64fb61e4fcb3a49a9747dd53",
        "user": {
            "id": "64fb61e25ec6f8b8270b3763"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276517267712507915"
        },
        "commitId": "64fb61e4c3cbe69b667c1221",
        "edit_ts": "2023-09-08T18:03:19.669Z",
        "numInstances": 1
    },
    {
        "_id": "64fb61e5c48af0ce658f80cf",
        "user": {
            "id": "64fb61e3c48af0ce658f80ce"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276517272007475212"
        },
        "commitId": "64fb61e5c3cbe69b667c13e5",
        "edit_ts": "2023-09-08T18:03:20.920Z",
        "numInstances": 1
    },
    {
        "_id": "64fb61e618ec1d5e9045f4f2",
        "user": {
            "id": "64fb61e54d6745ace50b8a53"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276517276302442508"
        },
        "commitId": "64fb61e6c3cbe69b667c1470",
        "edit_ts": "2023-09-08T18:03:21.573Z",
        "numInstances": 1
    },
    {
        "_id": "64fb61e7fcb3a49a9747dd54",
        "user": {
            "id": "64fb61e55ec6f8b8270b3768"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276517280597409793"
        },
        "commitId": "64fb61e7c3cbe69b667c14c7",
        "edit_ts": "2023-09-08T18:03:22.082Z",
        "numInstances": 1
    },
    {
        "_id": "64fb61e9c48af0ce658f80d1",
        "user": {
            "id": "64fb61e714b9b56812cbe746"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276517289187344385"
        },
        "commitId": "64fb61e9c3cbe69b667c16bf",
        "edit_ts": "2023-09-08T18:03:24.397Z",
        "numInstances": 1
    },
    {
        "_id": "64fb61e9c48af0ce658f80d2",
        "user": {
            "id": "64fb61e7c48af0ce658f80d0"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276517276302442503"
        },
        "commitId": "64fb61e9c3cbe69b667c1764",
        "numInstances": 1
    },
    {
        "_id": "64fb61ebc48af0ce658f80d9",
        "user": {
            "id": "64fb61e714b9b56812cbe747"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276517297777278979"
        },
        "commitId": "64fb61ebc3cbe69b667c1a0a",
        "edit_ts": "2023-09-08T18:03:26.309Z",
        "numInstances": 1
    },
    {
        "_id": "64fb61ebfcb3a49a9747dd58",
        "user": {
            "id": "64fb61e8fcb3a49a9747dd57"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276517297777278989"
        },
        "commitId": "64fb61ebc3cbe69b667c1a2b",
        "edit_ts": "2023-09-08T18:03:26.843Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6210fcb3a49a9747dd62",
        "user": {
            "id": "64fb620efcb3a49a9747dd61"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276517443806167041"
        },
        "commitId": "64fb6210c3cbe69b667c2703",
        "numInstances": 1
    },
    {
        "_id": "64fb621018ec1d5e9045f4f7",
        "user": {
            "id": "64fb620f18ec1d5e9045f4f6"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276517456691068943"
        },
        "commitId": "64fb6210c3cbe69b667c272f",
        "edit_ts": "2023-09-08T18:04:03.755Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6211fcb3a49a9747dd63",
        "user": {
            "id": "64fb620f5ec6f8b8270b3772"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276517465281003521"
        },
        "commitId": "64fb6211c3cbe69b667c27b4",
        "edit_ts": "2023-09-08T18:04:05.190Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6212fcb3a49a9747dd64",
        "user": {
            "id": "64fb62104d6745ace50b8a5a"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276517465281003526"
        },
        "commitId": "64fb6212c3cbe69b667c2863",
        "edit_ts": "2023-09-08T18:04:05.642Z",
        "numInstances": 1
    },
    {
        "_id": "64fb621a5ec6f8b8270b377c",
        "user": {
            "id": "64fb62184d6745ace50b8a64"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276517503935709186"
        },
        "commitId": "64fb621ac3cbe69b667c2f48",
        "edit_ts": "2023-09-08T18:04:14.060Z",
        "numInstances": 1
    },
    {
        "_id": "64fb621afcb3a49a9747dd67",
        "user": {
            "id": "64fb621918ec1d5e9045f4fd"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276517503935709275"
        },
        "commitId": "64fb621ac3cbe69b667c2fa4",
        "edit_ts": "2023-09-08T18:04:14.403Z",
        "numInstances": 1
    },
    {
        "_id": "64fb621c5ec6f8b8270b377d",
        "user": {
            "id": "64fb621b4d6745ace50b8a65"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276517508230676481"
        },
        "commitId": "64fb621cc3cbe69b667c3078",
        "edit_ts": "2023-09-08T18:04:15.838Z",
        "numInstances": 1
    },
    {
        "_id": "64fb622318ec1d5e9045f504",
        "user": {
            "id": "64fb622118ec1d5e9045f503"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276517538295447554"
        },
        "commitId": "64fb6223c3cbe69b667c3517",
        "edit_ts": "2023-09-08T18:04:22.513Z",
        "numInstances": 1
    },
    {
        "_id": "64fb623b5ec6f8b8270b377e",
        "user": {
            "id": "64fb62394d6745ace50b8a69"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276517645669629954"
        },
        "commitId": "64fb623bc3cbe69b667c3a4d",
        "edit_ts": "2023-09-08T18:04:47.122Z",
        "numInstances": 1
    },
    {
        "_id": "64fb62445ec6f8b8270b3781",
        "user": {
            "id": "64fb6243fcb3a49a9747dd75"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276517667144466435"
        },
        "commitId": "64fb6244c3cbe69b667c3d72",
        "numInstances": 1
    },
    {
        "_id": "64fb6246fcb3a49a9747dd79",
        "user": {
            "id": "64fb62444d6745ace50b8a6e"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276517688619302918"
        },
        "commitId": "64fb6246c3cbe69b667c3ebc",
        "edit_ts": "2023-09-08T18:04:57.817Z",
        "numInstances": 1
    },
    {
        "_id": "64fb624c5ec6f8b8270b3786",
        "user": {
            "id": "64fb624a18ec1d5e9045f50e"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276517701504204807"
        },
        "commitId": "64fb624cc3cbe69b667c4327",
        "numInstances": 1
    },
    {
        "_id": "64fb624cfcb3a49a9747dd7f",
        "user": {
            "id": "64fb624a4d6745ace50b8a74"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276517714389106694"
        },
        "commitId": "64fb624cc3cbe69b667c4371",
        "edit_ts": "2023-09-08T18:05:03.981Z",
        "numInstances": 1
    },
    {
        "_id": "64fb624d18ec1d5e9045f510",
        "user": {
            "id": "64fb624b18ec1d5e9045f50f"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276517718684073986"
        },
        "commitId": "64fb624dc3cbe69b667c440c",
        "edit_ts": "2023-09-08T18:05:04.817Z",
        "numInstances": 1
    },
    {
        "_id": "64fb624f4d6745ace50b8a77",
        "user": {
            "id": "64fb624cfcb3a49a9747dd7e"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276517731568975873"
        },
        "commitId": "64fb624fc3cbe69b667c44fd",
        "edit_ts": "2023-09-08T18:05:07.164Z",
        "numInstances": 1
    },
    {
        "_id": "64fb626818ec1d5e9045f515",
        "user": {
            "id": "64fb62655ec6f8b8270b378b"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276517834648190979"
        },
        "commitId": "64fb6268c3cbe69b667c4c67",
        "edit_ts": "2023-09-08T18:05:31.435Z",
        "numInstances": 1
    },
    {
        "_id": "64fb632a28aab026aae59ecc",
        "user": {
            "id": "64fb632911b077e87dc3055b"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276518667871846401"
        },
        "commitId": "64fb632ac3cbe69b667c6688",
        "edit_ts": "2023-09-08T18:08:45.341Z",
        "numInstances": 1
    },
    {
        "_id": "64fb632e11b077e87dc3055d",
        "user": {
            "id": "64fb632c11b077e87dc3055c"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276518685051715586"
        },
        "commitId": "64fb632ec3cbe69b667c67a8",
        "edit_ts": "2023-09-08T18:08:49.191Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6337c54df71298cb4a03",
        "user": {
            "id": "64fb63344311bef38018e296"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276518732296355842"
        },
        "commitId": "64fb6337c3cbe69b667c6aef",
        "edit_ts": "2023-09-08T18:09:00.281Z",
        "numInstances": 1
    },
    {
        "_id": "64fb63634311bef38018e29d",
        "user": {
            "id": "64fb6361c54df71298cb4a06"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276518899800080385"
        },
        "commitId": "64fb6363c3cbe69b667c73e4",
        "numInstances": 1
    },
    {
        "_id": "64fb636611b077e87dc30560",
        "user": {
            "id": "64fb63644311bef38018e29e"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276518929864851458"
        },
        "commitId": "64fb6366c3cbe69b667c75a6",
        "edit_ts": "2023-09-08T18:09:46.103Z",
        "numInstances": 1
    },
    {
        "_id": "64fb63664311bef38018e29f",
        "user": {
            "id": "64fb6364c54df71298cb4a07"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276518925569884162"
        },
        "commitId": "64fb6366c3cbe69b667c75fd",
        "edit_ts": "2023-09-08T18:09:45.723Z",
        "numInstances": 1
    },
    {
        "_id": "64fb636cc54df71298cb4a0d",
        "user": {
            "id": "64fb6369c54df71298cb4a0a"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276518951339687941"
        },
        "commitId": "64fb636cc3cbe69b667c797d",
        "edit_ts": "2023-09-08T18:09:51.551Z",
        "numInstances": 1
    },
    {
        "_id": "64fb637128aab026aae59edb",
        "user": {
            "id": "64fb636f4311bef38018e2a2"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276518968519557123"
        },
        "commitId": "64fb6371c3cbe69b667c7bc2",
        "edit_ts": "2023-09-08T18:09:55.715Z",
        "numInstances": 1
    },
    {
        "_id": "64fb637e4311bef38018e2a6",
        "user": {
            "id": "64fb637b4311bef38018e2a5"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276519028649099267"
        },
        "commitId": "64fb637ec3cbe69b667c7fdd",
        "edit_ts": "2023-09-08T18:10:09.514Z",
        "numInstances": 1
    },
    {
        "_id": "64fb63914311bef38018e2a7",
        "user": {
            "id": "64fb638e28aab026aae59ee2"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276519110253477894"
        },
        "commitId": "64fb6391c3cbe69b667c845f",
        "edit_ts": "2023-09-08T18:10:28.575Z",
        "numInstances": 1
    },
    {
        "_id": "64fb639328aab026aae59ee6",
        "user": {
            "id": "64fb639028aab026aae59ee3"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276519105958510593"
        },
        "commitId": "64fb6393c3cbe69b667c851b",
        "numInstances": 1
    },
    {
        "_id": "64fb651676e759628b59045b",
        "user": {
            "id": "64fb651476e759628b590458"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276520768110854146"
        },
        "commitId": "64fb6516c3cbe69b667cb8ef",
        "numInstances": 1
    },
    {
        "_id": "64fb6517dfd4b7f23ea21d66",
        "user": {
            "id": "64fb651576e759628b590459"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276520785290723329"
        },
        "commitId": "64fb6517c3cbe69b667cb912",
        "edit_ts": "2023-09-08T18:16:58.636Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6517dfd4b7f23ea21d67",
        "user": {
            "id": "64fb651576e759628b59045a"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276520785290723332"
        },
        "commitId": "64fb6517c3cbe69b667cb970",
        "edit_ts": "2023-09-08T18:16:58.722Z",
        "numInstances": 1
    },
    {
        "_id": "64fb651a76e759628b59045f",
        "user": {
            "id": "64fb651876e759628b59045e"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276520802470592514"
        },
        "commitId": "64fb651ac3cbe69b667cbac7",
        "edit_ts": "2023-09-08T18:17:02.430Z",
        "numInstances": 1
    },
    {
        "_id": "64fb654175ad7f5e2fac2dea",
        "user": {
            "id": "64fb653f011afd73b3aa0c6c"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276520969974317058"
        },
        "commitId": "64fb6541c3cbe69b667cc377",
        "edit_ts": "2023-09-08T18:17:41.096Z",
        "numInstances": 1
    },
    {
        "_id": "64fb654275ad7f5e2fac2deb",
        "user": {
            "id": "64fb653f75ad7f5e2fac2de9"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276520969974317119"
        },
        "commitId": "64fb6542c3cbe69b667cc3d9",
        "edit_ts": "2023-09-08T18:17:41.595Z",
        "numInstances": 1
    },
    {
        "_id": "64fb657beb6ae053c8fb5ecc",
        "user": {
            "id": "64fb65799109efd50bb56c67"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276521219082420226"
        },
        "commitId": "64fb657cc3cbe69b667cd169",
        "edit_ts": "2023-09-08T18:18:39.465Z",
        "numInstances": 1
    },
    {
        "_id": "64fb657c011afd73b3aa0c72",
        "user": {
            "id": "64fb6579011afd73b3aa0c71"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276521223377387521"
        },
        "commitId": "64fb657cc3cbe69b667cd199",
        "edit_ts": "2023-09-08T18:18:40.119Z",
        "numInstances": 1
    },
    {
        "_id": "64fb657c9109efd50bb56c6c",
        "user": {
            "id": "64fb657aeb6ae053c8fb5ecb"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276521206197518345"
        },
        "commitId": "64fb657cc3cbe69b667cd200",
        "numInstances": 1
    },
    {
        "_id": "64fb657eeb6ae053c8fb5ed1",
        "user": {
            "id": "64fb657c9109efd50bb56c6b"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276521227672354817"
        },
        "commitId": "64fb657ec3cbe69b667cd3b5",
        "edit_ts": "2023-09-08T18:18:41.374Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6580eb6ae053c8fb5ed4",
        "user": {
            "id": "64fb657e75ad7f5e2fac2df8"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276521240557256705"
        },
        "commitId": "64fb6580c3cbe69b667cd5cb",
        "edit_ts": "2023-09-08T18:18:44.015Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6582011afd73b3aa0c75",
        "user": {
            "id": "64fb657f9109efd50bb56c6f"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276521244852224011"
        },
        "commitId": "64fb6582c3cbe69b667cd723",
        "edit_ts": "2023-09-08T18:18:45.822Z",
        "numInstances": 1
    },
    {
        "_id": "64fb658575ad7f5e2fac2dfc",
        "user": {
            "id": "64fb657f75ad7f5e2fac2df9"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276521244852224001"
        },
        "commitId": "64fb6585c3cbe69b667cd914",
        "numInstances": 1
    },
    {
        "_id": "64fb6587eb6ae053c8fb5ed8",
        "user": {
            "id": "64fb6584eb6ae053c8fb5ed7"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276521270622027778"
        },
        "commitId": "64fb6587c3cbe69b667cdb11",
        "edit_ts": "2023-09-08T18:18:51.189Z",
        "numInstances": 1
    },
    {
        "_id": "64fb663590283af985b05a5c",
        "user": {
            "id": "64fb6633ba214de5bb9b688a"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276522017946337284"
        },
        "commitId": "64fb6635c3cbe69b667cf4e9",
        "edit_ts": "2023-09-08T18:21:45.402Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6638ba214de5bb9b6890",
        "user": {
            "id": "64fb6636ba214de5bb9b688d"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276522026536271920"
        },
        "commitId": "64fb6638c3cbe69b667cf681",
        "edit_ts": "2023-09-08T18:21:47.822Z",
        "numInstances": 1
    },
    {
        "_id": "64fb663b90283af985b05a60",
        "user": {
            "id": "64fb6639ba214de5bb9b6891"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276522039421173766"
        },
        "commitId": "64fb663bc3cbe69b667cf8f7",
        "edit_ts": "2023-09-08T18:21:50.411Z",
        "numInstances": 1
    },
    {
        "_id": "64fb663bba214de5bb9b6894",
        "user": {
            "id": "64fb663990283af985b05a5f"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276522039421173769"
        },
        "commitId": "64fb663bc3cbe69b667cf924",
        "edit_ts": "2023-09-08T18:21:50.424Z",
        "numInstances": 1
    },
    {
        "_id": "64fb669e0e3fe31cf3f4da11",
        "user": {
            "id": "64fb669d0e3fe31cf3f4da0e"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276522451738034182"
        },
        "commitId": "64fb669ec3cbe69b667d0ad1",
        "numInstances": 1
    },
    {
        "_id": "64fb66a30e3fe31cf3f4da18",
        "user": {
            "id": "64fb66a1b11b93734c4398b6"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276522473212870657"
        },
        "commitId": "64fb66a3c3cbe69b667d0de8",
        "numInstances": 1
    },
    {
        "_id": "64fb66a50e3fe31cf3f4da19",
        "user": {
            "id": "64fb66a4b11b93734c4398b9"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276522498982674434"
        },
        "commitId": "64fb66a5c3cbe69b667d0ef9",
        "edit_ts": "2023-09-08T18:23:37.123Z",
        "numInstances": 1
    },
    {
        "_id": "64fb66a9b11b93734c4398c0",
        "user": {
            "id": "64fb66a60e3fe31cf3f4da1a"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276522516162543618"
        },
        "commitId": "64fb66a9c3cbe69b667d1176",
        "edit_ts": "2023-09-08T18:23:41.345Z",
        "numInstances": 1
    },
    {
        "_id": "64fb67521b9c9d11bbe1a250",
        "user": {
            "id": "64fb67501b9c9d11bbe1a24d"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276523237717049346"
        },
        "commitId": "64fb6752c3cbe69b667d2a06",
        "edit_ts": "2023-09-08T18:26:29.073Z",
        "numInstances": 1
    },
    {
        "_id": "64fb67561b9c9d11bbe1a254",
        "user": {
            "id": "64fb67541b9c9d11bbe1a253"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276523254896918530"
        },
        "commitId": "64fb6756c3cbe69b667d2b5f",
        "edit_ts": "2023-09-08T18:26:33.933Z",
        "numInstances": 1
    },
    {
        "_id": "64fb67851b9c9d11bbe1a263",
        "user": {
            "id": "64fb67841b9c9d11bbe1a262"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276523443875479553"
        },
        "commitId": "64fb6785c3cbe69b667d3381",
        "numInstances": 1
    },
    {
        "_id": "64fb67851b9c9d11bbe1a264",
        "user": {
            "id": "64fb67831b9c9d11bbe1a261"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276523443875479557"
        },
        "commitId": "64fb6785c3cbe69b667d33be",
        "numInstances": 1
    },
    {
        "_id": "64fb678d1b9c9d11bbe1a276",
        "user": {
            "id": "64fb678b1b9c9d11bbe1a274"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276523478235217923"
        },
        "commitId": "64fb678dc3cbe69b667d3805",
        "numInstances": 1
    },
    {
        "_id": "64fb67911b9c9d11bbe1a281",
        "user": {
            "id": "64fb678e1b9c9d11bbe1a27c"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276523512594956289"
        },
        "commitId": "64fb6791c3cbe69b667d3b51",
        "edit_ts": "2023-09-08T18:27:33.105Z",
        "numInstances": 1
    },
    {
        "_id": "64fb67941b9c9d11bbe1a289",
        "user": {
            "id": "64fb67911b9c9d11bbe1a282"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276523521184890882"
        },
        "commitId": "64fb6794c3cbe69b667d3d34",
        "edit_ts": "2023-09-08T18:27:35.154Z",
        "numInstances": 1
    },
    {
        "_id": "64fb67951b9c9d11bbe1a28d",
        "user": {
            "id": "64fb67921b9c9d11bbe1a285"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276523525479858182"
        },
        "commitId": "64fb6795c3cbe69b667d3ea2",
        "edit_ts": "2023-09-08T18:27:36.715Z",
        "numInstances": 1
    },
    {
        "_id": "64fb67961b9c9d11bbe1a28e",
        "user": {
            "id": "64fb67931b9c9d11bbe1a288"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276523534069792769"
        },
        "commitId": "64fb6796c3cbe69b667d3f54",
        "edit_ts": "2023-09-08T18:27:38.131Z",
        "numInstances": 1
    },
    {
        "_id": "64fb679e1b9c9d11bbe1a29e",
        "user": {
            "id": "64fb679c1b9c9d11bbe1a29b"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276523564134563843"
        },
        "commitId": "64fb679ec3cbe69b667d4438",
        "edit_ts": "2023-09-08T18:27:45.667Z",
        "numInstances": 1
    },
    {
        "_id": "64fb67f80ac8bdbf658efebe",
        "user": {
            "id": "64fb67f60ac8bdbf658efebd"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276523954976587778"
        },
        "commitId": "64fb67f8c3cbe69b667d5429",
        "edit_ts": "2023-09-08T18:29:16.563Z",
        "numInstances": 1
    },
    {
        "_id": "64fb67fbf8f47fc4f9e5c4d0",
        "user": {
            "id": "64fb67f9f8f47fc4f9e5c4ce"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276523963566522374"
        },
        "commitId": "64fb67fbc3cbe69b667d5562",
        "edit_ts": "2023-09-08T18:29:18.734Z",
        "numInstances": 1
    },
    {
        "_id": "64fb67fdf8f47fc4f9e5c4d2",
        "user": {
            "id": "64fb67faf8f47fc4f9e5c4cf"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276523972156456962"
        },
        "commitId": "64fb67fdc3cbe69b667d5638",
        "edit_ts": "2023-09-08T18:29:20.131Z",
        "numInstances": 1
    },
    {
        "_id": "64fb67fe0ac8bdbf658efec5",
        "user": {
            "id": "64fb67fcf8f47fc4f9e5c4d1"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276523980746391557"
        },
        "commitId": "64fb67fec3cbe69b667d5791",
        "edit_ts": "2023-09-08T18:29:22.486Z",
        "numInstances": 1
    },
    {
        "_id": "64fb688e79811d22470e26ee",
        "user": {
            "id": "64fb688c351144bb63119f60"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276524582041812995"
        },
        "commitId": "64fb688ec3cbe69b667d6ee1",
        "numInstances": 1
    },
    {
        "_id": "64fb6898351144bb63119f61",
        "user": {
            "id": "64fb689679811d22470e26f3"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276524637876387842"
        },
        "commitId": "64fb6898c3cbe69b667d71e8",
        "edit_ts": "2023-09-08T18:31:55.638Z",
        "numInstances": 1
    },
    {
        "_id": "64fb68bb351144bb63119f63",
        "user": {
            "id": "64fb68ba1c25c0bfeceff892"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276524775315341314"
        },
        "commitId": "64fb68bbc3cbe69b667d78e2",
        "numInstances": 1
    },
    {
        "_id": "64fb68c21c25c0bfeceff898",
        "user": {
            "id": "64fb68bf1c25c0bfeceff897"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276524822559981570"
        },
        "commitId": "64fb68c2c3cbe69b667d7bf9",
        "edit_ts": "2023-09-08T18:32:38.961Z",
        "numInstances": 1
    },
    {
        "_id": "64fb68c51c25c0bfeceff899",
        "user": {
            "id": "64fb68c279811d22470e26f6"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276524831149916357"
        },
        "commitId": "64fb68c5c3cbe69b667d7d21",
        "edit_ts": "2023-09-08T18:32:40.871Z",
        "numInstances": 1
    },
    {
        "_id": "64fb68c5351144bb63119f67",
        "user": {
            "id": "64fb68c32ddc7d0f025ad722"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276524835444883461"
        },
        "commitId": "64fb68c5c3cbe69b667d7dde",
        "edit_ts": "2023-09-08T18:32:41.435Z",
        "numInstances": 1
    },
    {
        "_id": "64fb68c91c25c0bfeceff8a1",
        "user": {
            "id": "64fb68c71c25c0bfeceff8a0"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276524835444883457"
        },
        "commitId": "64fb68c9c3cbe69b667d800a",
        "numInstances": 1
    },
    {
        "_id": "64fb68d01c25c0bfeceff8a9",
        "user": {
            "id": "64fb68cd351144bb63119f6e"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276524878394556417"
        },
        "commitId": "64fb68d0c3cbe69b667d858b",
        "edit_ts": "2023-09-08T18:32:51.282Z",
        "numInstances": 1
    },
    {
        "_id": "64fb68d4351144bb63119f6f",
        "user": {
            "id": "64fb68d21c25c0bfeceff8aa"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276524895574425601"
        },
        "commitId": "64fb68d4c3cbe69b667d86f3",
        "edit_ts": "2023-09-08T18:32:55.242Z",
        "numInstances": 1
    },
    {
        "_id": "64fb68d7351144bb63119f72",
        "user": {
            "id": "64fb68d51c25c0bfeceff8ab"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276524912754294786"
        },
        "commitId": "64fb68d7c3cbe69b667d88d0",
        "edit_ts": "2023-09-08T18:32:59.149Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6909cdd6455015a06309",
        "user": {
            "id": "64fb6906cdd6455015a06308"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276525123207692291"
        },
        "commitId": "64fb6909c3cbe69b667d93b7",
        "edit_ts": "2023-09-08T18:33:48.934Z",
        "numInstances": 1
    },
    {
        "_id": "64fb690ef777fbf5bc1f3f98",
        "user": {
            "id": "64fb690bd5df7d9ae2f48233"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276525148977496065"
        },
        "commitId": "64fb690ec3cbe69b667d9534",
        "edit_ts": "2023-09-08T18:33:54.549Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6940d5df7d9ae2f4823a",
        "user": {
            "id": "64fb693ef777fbf5bc1f3f9a"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276525359430893575"
        },
        "commitId": "64fb6940c3cbe69b667da167",
        "edit_ts": "2023-09-08T18:34:43.974Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6943cdd6455015a06312",
        "user": {
            "id": "64fb6941cdd6455015a0630f"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276525372315795457"
        },
        "commitId": "64fb6943c3cbe69b667da311",
        "edit_ts": "2023-09-08T18:34:46.058Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6945e2715d15df521bd1",
        "user": {
            "id": "64fb6942d5df7d9ae2f4823b"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276525368020828164"
        },
        "commitId": "64fb6945c3cbe69b667da47c",
        "numInstances": 1
    },
    {
        "_id": "64fb6945e2715d15df521bd2",
        "user": {
            "id": "64fb6943f777fbf5bc1f3f9e"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276525385200697347"
        },
        "commitId": "64fb6945c3cbe69b667da4f6",
        "edit_ts": "2023-09-08T18:34:49.434Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6946f777fbf5bc1f3fa0",
        "user": {
            "id": "64fb6944cdd6455015a06313"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276525385200697351"
        },
        "commitId": "64fb6946c3cbe69b667da6e7",
        "edit_ts": "2023-09-08T18:34:49.952Z",
        "numInstances": 1
    },
    {
        "_id": "64fb694cf777fbf5bc1f3fa4",
        "user": {
            "id": "64fb694acdd6455015a06315"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276525398085599242"
        },
        "commitId": "64fb694cc3cbe69b667dac54",
        "numInstances": 1
    },
    {
        "_id": "64fb694dd5df7d9ae2f48246",
        "user": {
            "id": "64fb694bcdd6455015a06316"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276525415265468418"
        },
        "commitId": "64fb694dc3cbe69b667dacce",
        "edit_ts": "2023-09-08T18:34:56.694Z",
        "numInstances": 1
    },
    {
        "_id": "64fb694ed5df7d9ae2f48247",
        "user": {
            "id": "64fb694bf777fbf5bc1f3fa3"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276525419560435720"
        },
        "commitId": "64fb694ec3cbe69b667dad6d",
        "edit_ts": "2023-09-08T18:34:57.955Z",
        "numInstances": 1
    },
    {
        "_id": "64fb696f3043f050a9acc05a",
        "user": {
            "id": "64fb696e3043f050a9acc059"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276525561294356482"
        },
        "commitId": "64fb696fc3cbe69b667db621",
        "edit_ts": "2023-09-08T18:35:30.875Z",
        "numInstances": 1
    },
    {
        "_id": "64fb69753043f050a9acc060",
        "user": {
            "id": "64fb69730b98562fecea9c85"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276525587064160262"
        },
        "commitId": "64fb6975c3cbe69b667db88e",
        "edit_ts": "2023-09-08T18:35:36.816Z",
        "numInstances": 1
    },
    {
        "_id": "64fb69763043f050a9acc062",
        "user": {
            "id": "64fb69743043f050a9acc05f"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276525591359127554"
        },
        "commitId": "64fb6976c3cbe69b667db916",
        "edit_ts": "2023-09-08T18:35:37.267Z",
        "numInstances": 1
    },
    {
        "_id": "64fb69803043f050a9acc065",
        "user": {
            "id": "64fb697d0b98562fecea9c90"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276525638603767810"
        },
        "commitId": "64fb6980c3cbe69b667dbcb9",
        "edit_ts": "2023-09-08T18:35:48.318Z",
        "numInstances": 1
    },
    {
        "_id": "64fb69cfc67d229b35768bcc",
        "user": {
            "id": "64fb69cd4a1f8481e91e514b"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276525973611216902"
        },
        "commitId": "64fb69cfc3cbe69b667dc8f8",
        "edit_ts": "2023-09-08T18:37:06.785Z",
        "numInstances": 1
    },
    {
        "_id": "64fb69d09ca409b122c10910",
        "user": {
            "id": "64fb69cd1e570ca03fa79e4b"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276525982201151490"
        },
        "commitId": "64fb69d0c3cbe69b667dc971",
        "edit_ts": "2023-09-08T18:37:08.895Z",
        "numInstances": 1
    },
    {
        "_id": "64fb69e5c67d229b35768bce",
        "user": {
            "id": "64fb69e39ca409b122c10913"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276526068100497410"
        },
        "commitId": "64fb69e5c3cbe69b667dceef",
        "edit_ts": "2023-09-08T18:37:28.654Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6a091e570ca03fa79e53",
        "user": {
            "id": "64fb6a07c67d229b35768bd2"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276526222719320066"
        },
        "commitId": "64fb6a09c3cbe69b667dd7be",
        "edit_ts": "2023-09-08T18:38:04.172Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6a0b9ca409b122c10919",
        "user": {
            "id": "64fb6a08c67d229b35768bd3"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276526231309254662"
        },
        "commitId": "64fb6a0bc3cbe69b667dd940",
        "edit_ts": "2023-09-08T18:38:06.836Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6a0bc67d229b35768bd6",
        "user": {
            "id": "64fb6a094a1f8481e91e5155"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276526218424352774"
        },
        "commitId": "64fb6a0bc3cbe69b667dd976",
        "numInstances": 1
    },
    {
        "_id": "64fb6a0f4a1f8481e91e5158",
        "user": {
            "id": "64fb6a0d9ca409b122c1091a"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276526252784091138"
        },
        "commitId": "64fb6a0fc3cbe69b667ddba9",
        "edit_ts": "2023-09-08T18:38:11.239Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6a199ca409b122c1091c",
        "user": {
            "id": "64fb6a18c67d229b35768bdd"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276526291438796806"
        },
        "commitId": "64fb6a19c3cbe69b667de0d9",
        "edit_ts": "2023-09-08T18:38:20.998Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6a1c4a1f8481e91e515e",
        "user": {
            "id": "64fb6a1a1e570ca03fa79e5a"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276526291438796801"
        },
        "commitId": "64fb6a1cc3cbe69b667de2a3",
        "numInstances": 1
    },
    {
        "_id": "64fb6a26c67d229b35768be1",
        "user": {
            "id": "64fb6a23c67d229b35768be0"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276526347273371654"
        },
        "commitId": "64fb6a26c3cbe69b667de733",
        "edit_ts": "2023-09-08T18:38:33.369Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6a271e570ca03fa79e5b",
        "user": {
            "id": "64fb6a249ca409b122c10924"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276526351568338952"
        },
        "commitId": "64fb6a27c3cbe69b667de803",
        "edit_ts": "2023-09-08T18:38:34.828Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6ab1eacb62932c3679ba",
        "user": {
            "id": "64fb6aafeacb62932c3679b9"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276526931388923917"
        },
        "commitId": "64fb6ab1c3cbe69b667dff6c",
        "numInstances": 1
    },
    {
        "_id": "64fb6ab1eacb62932c3679bb",
        "user": {
            "id": "64fb6aafeacb62932c3679b8"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276526948568793098"
        },
        "commitId": "64fb6ab1c3cbe69b667dff90",
        "edit_ts": "2023-09-08T18:40:53.152Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6ab387ff09bb68bb241d",
        "user": {
            "id": "64fb6ab187ff09bb68bb241a"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276526952863760389"
        },
        "commitId": "64fb6ab3c3cbe69b667e003f",
        "edit_ts": "2023-09-08T18:40:54.840Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6ab5eacb62932c3679be",
        "user": {
            "id": "64fb6ab3eacb62932c3679bc"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276526961453694981"
        },
        "commitId": "64fb6ab5c3cbe69b667e016a",
        "edit_ts": "2023-09-08T18:40:56.331Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6b5a6f610a85ec0f77ee",
        "user": {
            "id": "64fb6b587e0218d909ab7a7d"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276527670123298825"
        },
        "commitId": "64fb6b5ac3cbe69b667e1c5a",
        "edit_ts": "2023-09-08T18:43:41.717Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6b6318e0aa00f39d4e14",
        "user": {
            "id": "64fb6b606f610a85ec0f77f1"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276527713072971778"
        },
        "commitId": "64fb6b63c3cbe69b667e1ec5",
        "edit_ts": "2023-09-08T18:43:51.571Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6b8fdb67bfd0b0b0af65",
        "user": {
            "id": "64fb6b8e6f610a85ec0f77f2"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276527897756565511"
        },
        "commitId": "64fb6b8fc3cbe69b667e26d9",
        "edit_ts": "2023-09-08T18:44:34.667Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6b967e0218d909ab7a82",
        "user": {
            "id": "64fb6b94db67bfd0b0b0af69"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276527932116303879"
        },
        "commitId": "64fb6b96c3cbe69b667e29cb",
        "edit_ts": "2023-09-08T18:44:42.342Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6b986f610a85ec0f77fa",
        "user": {
            "id": "64fb6b967e0218d909ab7a81"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276527923526369281"
        },
        "commitId": "64fb6b98c3cbe69b667e2a64",
        "numInstances": 1
    },
    {
        "_id": "64fb6b9e7e0218d909ab7a88",
        "user": {
            "id": "64fb6b9cdb67bfd0b0b0af6f"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276527962181074949"
        },
        "commitId": "64fb6b9ec3cbe69b667e2f4a",
        "edit_ts": "2023-09-08T18:44:49.708Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6ba218e0aa00f39d4e1e",
        "user": {
            "id": "64fb6ba06f610a85ec0f7802"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276527983655911429"
        },
        "commitId": "64fb6ba2c3cbe69b667e3212",
        "edit_ts": "2023-09-08T18:44:54.268Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6ba27e0218d909ab7a8b",
        "user": {
            "id": "64fb6ba0db67bfd0b0b0af70"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276527983655911433"
        },
        "commitId": "64fb6ba2c3cbe69b667e327d",
        "edit_ts": "2023-09-08T18:44:54.463Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6ba47e0218d909ab7a8c",
        "user": {
            "id": "64fb6ba26f610a85ec0f7803"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276527987950878721"
        },
        "commitId": "64fb6ba4c3cbe69b667e346b",
        "edit_ts": "2023-09-08T18:44:55.322Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6ba518e0aa00f39d4e23",
        "user": {
            "id": "64fb6ba36f610a85ec0f7804"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276527979360944129"
        },
        "commitId": "64fb6ba5c3cbe69b667e3559",
        "numInstances": 1
    },
    {
        "_id": "64fb6c294b692a3274e3b9b9",
        "user": {
            "id": "64fb6c284b692a3274e3b9b6"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276528563476496387"
        },
        "commitId": "64fb6c29c3cbe69b667e4bc4",
        "edit_ts": "2023-09-08T18:47:09.334Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6c2b56c3fa5f938a3861",
        "user": {
            "id": "64fb6c2956c3fa5f938a3860"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276528567771463686"
        },
        "commitId": "64fb6c2bc3cbe69b667e4c97",
        "edit_ts": "2023-09-08T18:47:10.692Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6c2e56c3fa5f938a3867",
        "user": {
            "id": "64fb6c2c56c3fa5f938a3866"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276528580656365572"
        },
        "commitId": "64fb6c2ec3cbe69b667e4e2c",
        "edit_ts": "2023-09-08T18:47:13.577Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6c3456c3fa5f938a386f",
        "user": {
            "id": "64fb6c3156c3fa5f938a386e"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276528610721136642"
        },
        "commitId": "64fb6c34c3cbe69b667e515a",
        "edit_ts": "2023-09-08T18:47:20.007Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6dec776b852c42b92585",
        "user": {
            "id": "64fb6de9d0ee0c5560e40d10"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276530500506746882"
        },
        "commitId": "64fb6decc3cbe69b667e8b0f",
        "edit_ts": "2023-09-08T18:54:40.748Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6df3d0ee0c5560e40d11",
        "user": {
            "id": "64fb6def314f9984cee0e4e3"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276530530571517954"
        },
        "commitId": "64fb6df3c3cbe69b667e8d16",
        "edit_ts": "2023-09-08T18:54:47.179Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6e23317b0a32aea05c29",
        "user": {
            "id": "64fb6e21317b0a32aea05c28"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276530741024915464"
        },
        "commitId": "64fb6e23c3cbe69b667e95c9",
        "edit_ts": "2023-09-08T18:55:36.315Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6e26776b852c42b9258a",
        "user": {
            "id": "64fb6e24776b852c42b92587"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276530745319882755"
        },
        "commitId": "64fb6e26c3cbe69b667e96f1",
        "edit_ts": "2023-09-08T18:55:37.224Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6e28317b0a32aea05c2f",
        "user": {
            "id": "64fb6e25317b0a32aea05c2a"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276530753909817357"
        },
        "commitId": "64fb6e28c3cbe69b667e985d",
        "edit_ts": "2023-09-08T18:55:39.815Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6e2a317b0a32aea05c33",
        "user": {
            "id": "64fb6e29317b0a32aea05c30"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276530762499751940"
        },
        "commitId": "64fb6e2ac3cbe69b667e9b7b",
        "edit_ts": "2023-09-08T18:55:41.239Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6e2d317b0a32aea05c36",
        "user": {
            "id": "64fb6e2c776b852c42b9258f"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276530779679621127"
        },
        "commitId": "64fb6e2dc3cbe69b667e9e34",
        "edit_ts": "2023-09-08T18:55:45.434Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6e31776b852c42b92592",
        "user": {
            "id": "64fb6e2ed0ee0c5560e40d18"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276530796859490305"
        },
        "commitId": "64fb6e31c3cbe69b667ea038",
        "edit_ts": "2023-09-08T18:55:49.002Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6e34d0ee0c5560e40d1c",
        "user": {
            "id": "64fb6e31d0ee0c5560e40d1b"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276530809744392194"
        },
        "commitId": "64fb6e34c3cbe69b667ea1bc",
        "edit_ts": "2023-09-08T18:55:52.093Z",
        "numInstances": 1
    },
    {
        "_id": "64fb6e41317b0a32aea05c3b",
        "user": {
            "id": "64fb6e3f314f9984cee0e4f4"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276530869873934338"
        },
        "commitId": "64fb6e41c3cbe69b667ea6b9",
        "edit_ts": "2023-09-08T18:56:06.058Z",
        "numInstances": 1
    },
    {
        "_id": "64fb713245f583e726d0cd5a",
        "user": {
            "id": "64fb713069688c2da76be3d5"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276534099689340930"
        },
        "commitId": "64fb7132c3cbe69b667f0c17",
        "edit_ts": "2023-09-08T19:08:38.293Z",
        "numInstances": 1
    },
    {
        "_id": "64fb713445f583e726d0cd5b",
        "user": {
            "id": "64fb713269688c2da76be3d6"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276534091099406339"
        },
        "commitId": "64fb7134c3cbe69b667f0d50",
        "numInstances": 1
    },
    {
        "_id": "64fb713445f583e726d0cd5c",
        "user": {
            "id": "64fb713245f583e726d0cd59"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276534103984308230"
        },
        "commitId": "64fb7134c3cbe69b667f0daf",
        "edit_ts": "2023-09-08T19:08:39.508Z",
        "numInstances": 1
    },
    {
        "_id": "64fb713569688c2da76be3d8",
        "user": {
            "id": "64fb713469688c2da76be3d7"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276534112574242823"
        },
        "commitId": "64fb7135c3cbe69b667f0eba",
        "edit_ts": "2023-09-08T19:08:41.138Z",
        "numInstances": 1
    },
    {
        "_id": "64fb7267d422fa4736fde42c",
        "user": {
            "id": "64fb726509f989cecd041778"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276535426834235400"
        },
        "commitId": "64fb7267c3cbe69b667f3851",
        "edit_ts": "2023-09-08T19:13:47.740Z",
        "numInstances": 1
    },
    {
        "_id": "64fb726bdd1c8e9693969236",
        "user": {
            "id": "64fb7268dd1c8e9693969235"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276535444014104577"
        },
        "commitId": "64fb726bc3cbe69b667f395c",
        "edit_ts": "2023-09-08T19:13:51.192Z",
        "numInstances": 1
    },
    {
        "_id": "64fb728bc4eb753b2433f5f2",
        "user": {
            "id": "64fb7289c4eb753b2433f5ef"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276535577158090760"
        },
        "commitId": "64fb728bc3cbe69b667f4189",
        "edit_ts": "2023-09-08T19:14:22.875Z",
        "numInstances": 1
    },
    {
        "_id": "64fb728d162997f01476a7c5",
        "user": {
            "id": "64fb728bc4eb753b2433f5f3"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276535590042992642"
        },
        "commitId": "64fb728dc3cbe69b667f429d",
        "edit_ts": "2023-09-08T19:14:25.430Z",
        "numInstances": 1
    },
    {
        "_id": "64fb728e162997f01476a7c6",
        "user": {
            "id": "64fb728cc4eb753b2433f5f4"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276535594337959941"
        },
        "commitId": "64fb728ec3cbe69b667f430c",
        "edit_ts": "2023-09-08T19:14:26.639Z",
        "numInstances": 1
    },
    {
        "_id": "64fb7292c4eb753b2433f5fa",
        "user": {
            "id": "64fb728ec4eb753b2433f5f7"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276535607222861830"
        },
        "commitId": "64fb7292c3cbe69b667f452b",
        "edit_ts": "2023-09-08T19:14:29.845Z",
        "numInstances": 1
    },
    {
        "_id": "64fb729e206b8e1d45899a43",
        "user": {
            "id": "64fb729c206b8e1d45899a42"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276535658762469384"
        },
        "commitId": "64fb729ec3cbe69b667f4b4b",
        "edit_ts": "2023-09-08T19:14:41.613Z",
        "numInstances": 1
    },
    {
        "_id": "64fb72a1d422fa4736fde433",
        "user": {
            "id": "64fb72a0206b8e1d45899a44"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276535671647371266"
        },
        "commitId": "64fb72a1c3cbe69b667f4c84",
        "edit_ts": "2023-09-08T19:14:44.285Z",
        "numInstances": 1
    },
    {
        "_id": "64fb72a2dd1c8e969396923b",
        "user": {
            "id": "64fb72a0206b8e1d45899a45"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276535675942338571"
        },
        "commitId": "64fb72a2c3cbe69b667f4d02",
        "edit_ts": "2023-09-08T19:14:45.596Z",
        "numInstances": 1
    },
    {
        "_id": "64fb72a909f989cecd041788",
        "user": {
            "id": "64fb72a8d422fa4736fde438"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276535710302076929"
        },
        "commitId": "64fb72a9c3cbe69b667f51ef",
        "edit_ts": "2023-09-08T19:14:53.153Z",
        "numInstances": 1
    },
    {
        "_id": "64fb72aa09f989cecd041789",
        "user": {
            "id": "64fb72a7206b8e1d45899a48"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276535718892011521"
        },
        "commitId": "64fb72aac3cbe69b667f5275",
        "edit_ts": "2023-09-08T19:14:55.322Z",
        "numInstances": 1
    },
    {
        "_id": "64fb72acd422fa4736fde43d",
        "user": {
            "id": "64fb72a9dd1c8e969396923e"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276535718892011526"
        },
        "commitId": "64fb72acc3cbe69b667f537d",
        "edit_ts": "2023-09-08T19:14:55.812Z",
        "numInstances": 1
    },
    {
        "_id": "64fb72b4dd1c8e9693969244",
        "user": {
            "id": "64fb72b1206b8e1d45899a4d"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276535753251749891"
        },
        "commitId": "64fb72b4c3cbe69b667f57bb",
        "edit_ts": "2023-09-08T19:15:03.571Z",
        "numInstances": 1
    },
    {
        "_id": "64fb72bbdd1c8e9693969247",
        "user": {
            "id": "64fb72b9206b8e1d45899a4f"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276535783316520962"
        },
        "commitId": "64fb72bbc3cbe69b667f5a59",
        "edit_ts": "2023-09-08T19:15:10.803Z",
        "numInstances": 1
    },
    {
        "_id": "64fb748c7e9ed5acf8ab3734",
        "user": {
            "id": "64fb74897e9ed5acf8ab3733"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276537767591411713"
        },
        "commitId": "64fb748cc3cbe69b667f9904",
        "numInstances": 0
    },
    {
        "_id": "64fb748d4652f39e5031b739",
        "user": {
            "id": "64fb748be099a622969a0ae9"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276537789066248193"
        },
        "commitId": "64fb748dc3cbe69b667f9968",
        "edit_ts": "2023-09-08T19:22:57.541Z",
        "numInstances": 1
    },
    {
        "_id": "64fb74904652f39e5031b73c",
        "user": {
            "id": "64fb748d5b1d626a7a8eaf81"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276537797656182788"
        },
        "commitId": "64fb7490c3cbe69b667f9a75",
        "edit_ts": "2023-09-08T19:22:59.816Z",
        "numInstances": 1
    },
    {
        "_id": "64fb74a27e9ed5acf8ab3738",
        "user": {
            "id": "64fb749f5b1d626a7a8eaf88"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276537862080692225"
        },
        "commitId": "64fb74a2c3cbe69b667f9f07",
        "numInstances": 1
    },
    {
        "_id": "64fb74c47e9ed5acf8ab373b",
        "user": {
            "id": "64fb74c25b1d626a7a8eaf89"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276538008109580289"
        },
        "commitId": "64fb74c4c3cbe69b667fa4d2",
        "numInstances": 1
    },
    {
        "_id": "64fb74d04652f39e5031b747",
        "user": {
            "id": "64fb74cee099a622969a0aef"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276538076829057031"
        },
        "commitId": "64fb74d0c3cbe69b667fa9d6",
        "edit_ts": "2023-09-08T19:24:04.440Z",
        "numInstances": 1
    },
    {
        "_id": "64fb74d25b1d626a7a8eaf8e",
        "user": {
            "id": "64fb74d04652f39e5031b746"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276538085418991626"
        },
        "commitId": "64fb74d2c3cbe69b667fab3a",
        "edit_ts": "2023-09-08T19:24:06.489Z",
        "numInstances": 1
    },
    {
        "_id": "64fb74d3e099a622969a0af5",
        "user": {
            "id": "64fb74d24652f39e5031b74a"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276538089713958913"
        },
        "commitId": "64fb74d3c3cbe69b667fac53",
        "edit_ts": "2023-09-08T19:24:07.149Z",
        "numInstances": 1
    },
    {
        "_id": "64fb74d65b1d626a7a8eaf8f",
        "user": {
            "id": "64fb74d34652f39e5031b74b"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276538102598860802"
        },
        "commitId": "64fb74d6c3cbe69b667fae7c",
        "edit_ts": "2023-09-08T19:24:10.100Z",
        "numInstances": 1
    },
    {
        "_id": "64fb74d84652f39e5031b752",
        "user": {
            "id": "64fb74d65b1d626a7a8eaf90"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276538111188795399"
        },
        "commitId": "64fb74d8c3cbe69b667fb160",
        "edit_ts": "2023-09-08T19:24:12.682Z",
        "numInstances": 1
    },
    {
        "_id": "64fb74d9e099a622969a0afa",
        "user": {
            "id": "64fb74d67e9ed5acf8ab3743"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276538111188795393"
        },
        "commitId": "64fb74d9c3cbe69b667fb1c8",
        "edit_ts": "2023-09-08T19:24:12.141Z",
        "numInstances": 1
    },
    {
        "_id": "64fb74dd5b1d626a7a8eaf93",
        "user": {
            "id": "64fb74dbe099a622969a0afd"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276538128368664577"
        },
        "commitId": "64fb74ddc3cbe69b667fb429",
        "edit_ts": "2023-09-08T19:24:16.771Z",
        "numInstances": 1
    },
    {
        "_id": "64fb750d07cb797bbb7f1052",
        "user": {
            "id": "64fb750b07cb797bbb7f1050"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276538338822062084"
        },
        "commitId": "64fb750dc3cbe69b667fbf22",
        "edit_ts": "2023-09-08T19:25:05.886Z",
        "numInstances": 1
    },
    {
        "_id": "64fb750e859486dc3ac2f05a",
        "user": {
            "id": "64fb750c07cb797bbb7f1051"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276538343117029378"
        },
        "commitId": "64fb750ec3cbe69b667fbfdb",
        "edit_ts": "2023-09-08T19:25:06.383Z",
        "numInstances": 1
    },
    {
        "_id": "64fb752c07cb797bbb7f1057",
        "user": {
            "id": "64fb752ba8ab92de7503418a"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276538454786179074"
        },
        "commitId": "64fb752cc3cbe69b667fc616",
        "numInstances": 1
    },
    {
        "_id": "64fb7543a8ab92de7503418e",
        "user": {
            "id": "64fb7541a8ab92de7503418d"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276538553570426884"
        },
        "commitId": "64fb7543c3cbe69b667fcbd4",
        "numInstances": 1
    },
    {
        "_id": "64fb7546eb53e1c62e939db3",
        "user": {
            "id": "64fb7544a8ab92de75034191"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276538583635197954"
        },
        "commitId": "64fb7546c3cbe69b667fcd4b",
        "edit_ts": "2023-09-08T19:26:02.254Z",
        "numInstances": 1
    },
    {
        "_id": "64fb754a07cb797bbb7f105b",
        "user": {
            "id": "64fb7547859486dc3ac2f060"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276538600815067137"
        },
        "commitId": "64fb754ac3cbe69b667fcf90",
        "edit_ts": "2023-09-08T19:26:06.133Z",
        "numInstances": 1
    },
    {
        "_id": "64fb754b07cb797bbb7f105c",
        "user": {
            "id": "64fb7549eb53e1c62e939db4"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276538600815067141"
        },
        "commitId": "64fb754bc3cbe69b667fd001",
        "edit_ts": "2023-09-08T19:26:06.759Z",
        "numInstances": 1
    },
    {
        "_id": "64fb756007cb797bbb7f1060",
        "user": {
            "id": "64fb755ea8ab92de75034198"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276538691009380353"
        },
        "commitId": "64fb7560c3cbe69b667fd6eb",
        "edit_ts": "2023-09-08T19:26:27.511Z",
        "numInstances": 1
    },
    {
        "_id": "64fb7564a8ab92de7503419c",
        "user": {
            "id": "64fb756207cb797bbb7f1061"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276538708189249538"
        },
        "commitId": "64fb7564c3cbe69b667fd8c8",
        "edit_ts": "2023-09-08T19:26:31.936Z",
        "numInstances": 1
    },
    {
        "_id": "64fb756507cb797bbb7f1063",
        "user": {
            "id": "64fb756207cb797bbb7f1062"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276538712484216835"
        },
        "commitId": "64fb7565c3cbe69b667fd96c",
        "edit_ts": "2023-09-08T19:26:32.765Z",
        "numInstances": 1
    },
    {
        "_id": "64fb7577a8ab92de750341a0",
        "user": {
            "id": "64fb7573a8ab92de7503419f"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276538794088595458"
        },
        "commitId": "64fb7577c3cbe69b667fdeec",
        "edit_ts": "2023-09-08T19:26:51.670Z",
        "numInstances": 1
    },
    {
        "_id": "64fb7622855d8e3c20335351",
        "user": {
            "id": "64fb7620855d8e3c20335350"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276539528528003079"
        },
        "commitId": "64fb7622c3cbe69b667ff697",
        "edit_ts": "2023-09-08T19:29:42.559Z",
        "numInstances": 1
    },
    {
        "_id": "64fb7625855d8e3c20335353",
        "user": {
            "id": "64fb7623855d8e3c20335352"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276539537117937669"
        },
        "commitId": "64fb7625c3cbe69b667ff7bc",
        "edit_ts": "2023-09-08T19:29:44.444Z",
        "numInstances": 1
    },
    {
        "_id": "64fb7626855d8e3c20335357",
        "user": {
            "id": "64fb76239ba97ed42e75d4ef"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276539528528003082"
        },
        "commitId": "64fb7626c3cbe69b667ff8c0",
        "numInstances": 1
    },
    {
        "_id": "64fb76269ba97ed42e75d4f2",
        "user": {
            "id": "64fb7625855d8e3c20335354"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276539545707872258"
        },
        "commitId": "64fb7626c3cbe69b667ff8ff",
        "edit_ts": "2023-09-08T19:29:46.075Z",
        "numInstances": 1
    },
    {
        "_id": "64fb780620ffc0c4acfdbc4b",
        "user": {
            "id": "64fb78032e0fd54c90cfc905"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276541607292174343"
        },
        "commitId": "64fb7806c3cbe69b668036a8",
        "edit_ts": "2023-09-08T19:37:46.347Z",
        "numInstances": 1
    },
    {
        "_id": "64fb780820ffc0c4acfdbc4c",
        "user": {
            "id": "64fb78062e0fd54c90cfc906"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276541611587141672"
        },
        "commitId": "64fb7808c3cbe69b6680376f",
        "edit_ts": "2023-09-08T19:37:47.905Z",
        "numInstances": 1
    },
    {
        "_id": "64fb780c39598ea70aaf6c24",
        "user": {
            "id": "64fb780a2e0fd54c90cfc907"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276541633061978114"
        },
        "commitId": "64fb780cc3cbe69b668039e0",
        "edit_ts": "2023-09-08T19:37:52.057Z",
        "numInstances": 1
    },
    {
        "_id": "64fb78392e0fd54c90cfc90a",
        "user": {
            "id": "64fb783720ffc0c4acfdbc54"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276541809155637249"
        },
        "commitId": "64fb7839c3cbe69b6680418b",
        "numInstances": 1
    },
    {
        "_id": "64fb784139598ea70aaf6c2c",
        "user": {
            "id": "64fb783f2e0fd54c90cfc911"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276541860695244806"
        },
        "commitId": "64fb7841c3cbe69b66804733",
        "edit_ts": "2023-09-08T19:38:45.351Z",
        "numInstances": 1
    },
    {
        "_id": "64fb784239598ea70aaf6c2d",
        "user": {
            "id": "64fb7840b16b8bfc71656f53"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276541860695244811"
        },
        "commitId": "64fb7842c3cbe69b66804825",
        "edit_ts": "2023-09-08T19:38:45.711Z",
        "numInstances": 1
    },
    {
        "_id": "64fb784320ffc0c4acfdbc58",
        "user": {
            "id": "64fb784039598ea70aaf6c2b"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276541864990212101"
        },
        "commitId": "64fb7843c3cbe69b6680489b",
        "edit_ts": "2023-09-08T19:38:46.776Z",
        "numInstances": 1
    },
    {
        "_id": "64fb784520ffc0c4acfdbc5a",
        "user": {
            "id": "64fb78432e0fd54c90cfc916"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276541860695244801"
        },
        "commitId": "64fb7845c3cbe69b66804a54",
        "numInstances": 1
    },
    {
        "_id": "64fb784639598ea70aaf6c30",
        "user": {
            "id": "64fb784420ffc0c4acfdbc59"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276541882170081282"
        },
        "commitId": "64fb7846c3cbe69b66804bb6",
        "edit_ts": "2023-09-08T19:38:50.752Z",
        "numInstances": 1
    },
    {
        "_id": "64fb78482e0fd54c90cfc91b",
        "user": {
            "id": "64fb784520ffc0c4acfdbc5b"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276541886465048582"
        },
        "commitId": "64fb7848c3cbe69b66804cdf",
        "edit_ts": "2023-09-08T19:38:51.203Z",
        "numInstances": 1
    },
    {
        "_id": "64fb784b39598ea70aaf6c34",
        "user": {
            "id": "64fb784839598ea70aaf6c31"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276541899349950466"
        },
        "commitId": "64fb784bc3cbe69b66804ff3",
        "edit_ts": "2023-09-08T19:38:54.582Z",
        "numInstances": 1
    },
    {
        "_id": "64fb78c5c3292062d1d50ad3",
        "user": {
            "id": "64fb78c46878a4c14cee13e3"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276542427630927882"
        },
        "commitId": "64fb78c5c3cbe69b668065f0",
        "edit_ts": "2023-09-08T19:40:57.939Z",
        "numInstances": 1
    },
    {
        "_id": "64fb78c7c3292062d1d50ad4",
        "user": {
            "id": "64fb78c56878a4c14cee13e8"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276542436220862472"
        },
        "commitId": "64fb78c7c3cbe69b6680667f",
        "edit_ts": "2023-09-08T19:40:59.707Z",
        "numInstances": 1
    },
    {
        "_id": "64fb78cb6878a4c14cee13ed",
        "user": {
            "id": "64fb78c86878a4c14cee13e9"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276542449105764361"
        },
        "commitId": "64fb78cbc3cbe69b66806848",
        "edit_ts": "2023-09-08T19:41:02.352Z",
        "numInstances": 1
    },
    {
        "_id": "64fb78ccc3292062d1d50ad7",
        "user": {
            "id": "64fb78c96878a4c14cee13ec"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276542453400731650"
        },
        "commitId": "64fb78ccc3cbe69b66806962",
        "edit_ts": "2023-09-08T19:41:03.680Z",
        "numInstances": 1
    },
    {
        "_id": "64fb7b5be9a6710214e02171",
        "user": {
            "id": "64fb7b5ab28da5318b7fd4f6"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276545270899277831"
        },
        "commitId": "64fb7b5bc3cbe69b6680c5bc",
        "edit_ts": "2023-09-08T19:51:59.789Z",
        "numInstances": 1
    },
    {
        "_id": "64fb7b5fe80bbee05f2c2bf8",
        "user": {
            "id": "64fb7b5ee9a6710214e02172"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276545283784179720"
        },
        "commitId": "64fb7b5fc3cbe69b6680c6c3",
        "edit_ts": "2023-09-08T19:52:02.931Z",
        "numInstances": 1
    },
    {
        "_id": "64fb7b92e80bbee05f2c2bfb",
        "user": {
            "id": "64fb7b8fb28da5318b7fd4fc"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276545502827511809"
        },
        "commitId": "64fb7b92c3cbe69b6680d048",
        "edit_ts": "2023-09-08T19:52:53.030Z",
        "numInstances": 1
    },
    {
        "_id": "64fb7b98e019732b9d4d1593",
        "user": {
            "id": "64fb7b95b28da5318b7fd501"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276545528597315587"
        },
        "commitId": "64fb7b98c3cbe69b6680d3a7",
        "edit_ts": "2023-09-08T19:52:59.267Z",
        "numInstances": 1
    },
    {
        "_id": "64fb7b9be019732b9d4d1594",
        "user": {
            "id": "64fb7b98e9a6710214e02178"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276545545777184769"
        },
        "commitId": "64fb7b9bc3cbe69b6680d51b",
        "edit_ts": "2023-09-08T19:53:03.241Z",
        "numInstances": 1
    },
    {
        "_id": "64fb7b9ee9a6710214e0217b",
        "user": {
            "id": "64fb7b9cb28da5318b7fd506"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276545554367119363"
        },
        "commitId": "64fb7b9ec3cbe69b6680d671",
        "edit_ts": "2023-09-08T19:53:05.529Z",
        "numInstances": 1
    },
    {
        "_id": "64fb7bb3b1571e494364fe83",
        "user": {
            "id": "64fb7bb1b1571e494364fe81"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276545631676530690"
        },
        "commitId": "64fb7bb3c3cbe69b6680db93",
        "numInstances": 1
    },
    {
        "_id": "64fb7bb9e7f113e7aeff9d22",
        "user": {
            "id": "64fb7bb7b1571e494364fe8d"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276545657446334468"
        },
        "commitId": "64fb7bb9c3cbe69b6680df0f",
        "numInstances": 1
    },
    {
        "_id": "64fb7bbbe7f113e7aeff9d26",
        "user": {
            "id": "64fb7bb9e7f113e7aeff9d21"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276545678921170961"
        },
        "commitId": "64fb7bbbc3cbe69b6680e022",
        "edit_ts": "2023-09-08T19:53:34.941Z",
        "numInstances": 1
    },
    {
        "_id": "64fb7bbcb1571e494364fe90",
        "user": {
            "id": "64fb7bbae7f113e7aeff9d23"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276545683216138242"
        },
        "commitId": "64fb7bbcc3cbe69b6680e091",
        "edit_ts": "2023-09-08T19:53:35.171Z",
        "numInstances": 1
    },
    {
        "_id": "64fb7d4ebdda3a97fd43daff",
        "user": {
            "id": "64fb7d4bbdda3a97fd43dafa"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276547414087958538"
        },
        "commitId": "64fb7d4ec3cbe69b66811662",
        "edit_ts": "2023-09-08T20:00:18.562Z",
        "numInstances": 1
    },
    {
        "_id": "64fb7d4ebdda3a97fd43db00",
        "user": {
            "id": "64fb7d4dbdda3a97fd43dafb"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276547414087958535"
        },
        "commitId": "64fb7d4fc3cbe69b668116e5",
        "edit_ts": "2023-09-08T20:00:18.277Z",
        "numInstances": 1
    },
    {
        "_id": "64fb7d50bdda3a97fd43db03",
        "user": {
            "id": "64fb7d4dbdda3a97fd43dafe"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276547422677893121"
        },
        "commitId": "64fb7d50c3cbe69b668117d9",
        "edit_ts": "2023-09-08T20:00:20.117Z",
        "numInstances": 1
    },
    {
        "_id": "64fb7d54bdda3a97fd43db07",
        "user": {
            "id": "64fb7d52bdda3a97fd43db04"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276547439857762306"
        },
        "commitId": "64fb7d54c3cbe69b668119ef",
        "edit_ts": "2023-09-08T20:00:24.919Z",
        "numInstances": 1
    },
    {
        "_id": "64fb7da6229c497378d3ac9d",
        "user": {
            "id": "64fb7da3bce594428a5a9367"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276547792045080578"
        },
        "commitId": "64fb7da6c3cbe69b66812749",
        "edit_ts": "2023-09-08T20:01:46.396Z",
        "numInstances": 1
    },
    {
        "_id": "64fb7ddb229c497378d3aca2",
        "user": {
            "id": "64fb7dda7de72c24b7a2d102"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276548002498478086"
        },
        "commitId": "64fb7ddbc3cbe69b66812f29",
        "numInstances": 1
    },
    {
        "_id": "64fb7de1bce594428a5a936d",
        "user": {
            "id": "64fb7ddf229c497378d3aca3"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276548041153183747"
        },
        "commitId": "64fb7de1c3cbe69b6681321f",
        "edit_ts": "2023-09-08T20:02:44.914Z",
        "numInstances": 1
    },
    {
        "_id": "64fb7de833dc2cd6b6628865",
        "user": {
            "id": "64fb7de6bce594428a5a936e"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276548075512922113"
        },
        "commitId": "64fb7de8c3cbe69b66813542",
        "edit_ts": "2023-09-08T20:02:52.594Z",
        "numInstances": 1
    },
    {
        "_id": "64fb7df07de72c24b7a2d106",
        "user": {
            "id": "64fb7ded229c497378d3acab"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276548092692791300"
        },
        "commitId": "64fb7df0c3cbe69b668137fb",
        "numInstances": 1
    },
    {
        "_id": "64fb7ec26f1ec433458a564e",
        "user": {
            "id": "64fb7ec028a1e532c517ddd5"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276548994635923463"
        },
        "commitId": "64fb7ec2c3cbe69b66815413",
        "numInstances": 1
    },
    {
        "_id": "64fb7ec728a1e532c517dddf",
        "user": {
            "id": "64fb7ec528a1e532c517ddde"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276549028995661829"
        },
        "commitId": "64fb7ec7c3cbe69b66815602",
        "edit_ts": "2023-09-08T20:06:34.590Z",
        "numInstances": 1
    },
    {
        "_id": "64fb7ec828a1e532c517dde0",
        "user": {
            "id": "64fb7ec428a1e532c517dddd"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276549037585596418"
        },
        "commitId": "64fb7ec8c3cbe69b668156ba",
        "edit_ts": "2023-09-08T20:06:36.479Z",
        "numInstances": 1
    },
    {
        "_id": "64fb7ec928a1e532c517dde1",
        "user": {
            "id": "64fb7ec86f1ec433458a5651"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276549037585596422"
        },
        "commitId": "64fb7ec9c3cbe69b66815766",
        "edit_ts": "2023-09-08T20:06:36.680Z",
        "numInstances": 1
    },
    {
        "_id": "64fb7f8e9c706ff9706d11a2",
        "user": {
            "id": "64fb7f8b7da258326d88259b"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276549887989121025"
        },
        "commitId": "64fb7f8ec3cbe69b6681744d",
        "edit_ts": "2023-09-08T20:09:54.045Z",
        "numInstances": 1
    },
    {
        "_id": "64fb7fc09c706ff9706d11a3",
        "user": {
            "id": "64fb7fbf7da258326d88259f"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276550085557616643"
        },
        "commitId": "64fb7fc0c3cbe69b66817c10",
        "numInstances": 1
    },
    {
        "_id": "64fb7fc51f7630a0f3e63ae1",
        "user": {
            "id": "64fb7fc3c9ba1555f64cd011"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276550119917355075"
        },
        "commitId": "64fb7fc5c3cbe69b66817efb",
        "edit_ts": "2023-09-08T20:10:48.526Z",
        "numInstances": 1
    },
    {
        "_id": "64fb7fc89c706ff9706d11a8",
        "user": {
            "id": "64fb7fc5c9ba1555f64cd014"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276550132802256902"
        },
        "commitId": "64fb7fc8c3cbe69b668180fe",
        "edit_ts": "2023-09-08T20:10:51.964Z",
        "numInstances": 1
    },
    {
        "_id": "64fb7fc97da258326d8825a2",
        "user": {
            "id": "64fb7fc77da258326d8825a1"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276550141392191521"
        },
        "commitId": "64fb7fc9c3cbe69b668181c0",
        "edit_ts": "2023-09-08T20:10:53.762Z",
        "numInstances": 1
    },
    {
        "_id": "64fb816aeb34124a16c3b973",
        "user": {
            "id": "64fb81684aa5e81c0776ea84"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276551928098586626"
        },
        "commitId": "64fb816ac3cbe69b6681bfd7",
        "edit_ts": "2023-09-08T20:17:49.258Z",
        "numInstances": 1
    },
    {
        "_id": "64fb81837f810985e68d00f5",
        "user": {
            "id": "64c017169217a4ad3ae60096"
        },
        "permissionToShare": false,
        "_ts": {
            "$timestamp": "7276552044062703617"
        },
        "commitId": "64fb81847f810985e68d00f7",
        "edit_ts": "2023-09-08T20:18:14.540Z",
        "licenses": [],
        "publishedTimestamp": "2023-09-08T20:18:14.540Z",
        "deleted": true,
        "numInstances": 0
    },
    {
        "_id": "64fb81a44aa5e81c0776ea86",
        "user": {
            "id": "64fb81a3eb34124a16c3b977"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276552185796624386"
        },
        "commitId": "64fb81a4c3cbe69b6681cd62",
        "edit_ts": "2023-09-08T20:18:49.194Z",
        "numInstances": 1
    },
    {
        "_id": "64fb81a5f59d0d714ad60a7a",
        "user": {
            "id": "64fb81a4eb34124a16c3b978"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276552185796624390"
        },
        "commitId": "64fb81a6c3cbe69b6681cdc9",
        "edit_ts": "2023-09-08T20:18:49.225Z",
        "numInstances": 1
    },
    {
        "_id": "64fb81abf59d0d714ad60a7b",
        "user": {
            "id": "64fb81a65672295dbffbe817"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276552211566428198"
        },
        "commitId": "64fb81abc3cbe69b6681d02f",
        "edit_ts": "2023-09-08T20:18:55.421Z",
        "numInstances": 1
    },
    {
        "_id": "64fb81bc4aa5e81c0776ea8b",
        "user": {
            "id": "64fb81baeb34124a16c3b97b"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276552284580872193"
        },
        "commitId": "64fb81bcc3cbe69b6681d598",
        "edit_ts": "2023-09-08T20:19:12.428Z",
        "numInstances": 1
    },
    {
        "_id": "64fb83676cac76c20f25995a",
        "user": {
            "id": "64fb83657983b4c4c15b15f1"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276554114236940294"
        },
        "commitId": "64fb8367c3cbe69b66820b8c",
        "edit_ts": "2023-09-08T20:26:18.539Z",
        "numInstances": 1
    },
    {
        "_id": "64fb83687983b4c4c15b15f4",
        "user": {
            "id": "64fb83666cac76c20f259959"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276554118531907594"
        },
        "commitId": "64fb8368c3cbe69b66820c09",
        "edit_ts": "2023-09-08T20:26:19.747Z",
        "numInstances": 1
    },
    {
        "_id": "64fb836b7983b4c4c15b15f8",
        "user": {
            "id": "64fb83686cac76c20f25995b"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276554131416809473"
        },
        "commitId": "64fb836bc3cbe69b66820d98",
        "edit_ts": "2023-09-08T20:26:22.364Z",
        "numInstances": 1
    },
    {
        "_id": "64fb836b6cac76c20f25995e",
        "user": {
            "id": "64fb83687983b4c4c15b15f5"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276554131416809476"
        },
        "commitId": "64fb836bc3cbe69b66820db9",
        "edit_ts": "2023-09-08T20:26:22.757Z",
        "numInstances": 1
    },
    {
        "_id": "64fb85184db3ac29c7cedc98",
        "user": {
            "id": "64fb851625926c00bb502713"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276555978252746754"
        },
        "commitId": "64fb8518c3cbe69b66824951",
        "edit_ts": "2023-09-08T20:33:32.904Z",
        "numInstances": 1
    },
    {
        "_id": "64fb851b25926c00bb502716",
        "user": {
            "id": "64fb851925926c00bb502714"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276555995432615941"
        },
        "commitId": "64fb851bc3cbe69b66824ba8",
        "edit_ts": "2023-09-08T20:33:36.704Z",
        "numInstances": 1
    },
    {
        "_id": "64fb852025926c00bb502719",
        "user": {
            "id": "64fb851b25926c00bb502715"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276556008317517835"
        },
        "commitId": "64fb8520c3cbe69b66824dc2",
        "edit_ts": "2023-09-08T20:33:39.769Z",
        "numInstances": 1
    },
    {
        "_id": "64fb852325926c00bb50271d",
        "user": {
            "id": "64fb852025926c00bb50271a"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276556008317517825"
        },
        "commitId": "64fb8523c3cbe69b66824f69",
        "numInstances": 1
    },
    {
        "_id": "64fb85f5fdece9e806a58462",
        "user": {
            "id": "64fb85f237e1f6a94843c229"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276556931735486465"
        },
        "commitId": "64fb85f5c3cbe69b66826bcb",
        "edit_ts": "2023-09-08T20:37:14.147Z",
        "numInstances": 1
    },
    {
        "_id": "64fb8631fdece9e806a58468",
        "user": {
            "id": "64fb862f37e1f6a94843c22b"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276557185138556930"
        },
        "commitId": "64fb8631c3cbe69b66827963",
        "edit_ts": "2023-09-08T20:38:13.086Z",
        "numInstances": 1
    },
    {
        "_id": "64fb8634fdece9e806a5846b",
        "user": {
            "id": "64fb863239ae4535ab9dbe42"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276557198023458821"
        },
        "commitId": "64fb8634c3cbe69b66827aed",
        "edit_ts": "2023-09-08T20:38:16.181Z",
        "numInstances": 1
    },
    {
        "_id": "64fb863439ae4535ab9dbe43",
        "user": {
            "id": "64fb86328322badb05ed29c3"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276557198023458817"
        },
        "commitId": "64fb8634c3cbe69b66827b10",
        "edit_ts": "2023-09-08T20:38:16.058Z",
        "numInstances": 1
    },
    {
        "_id": "64fb86388322badb05ed29c5",
        "user": {
            "id": "64fb86358322badb05ed29c4"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276557215203328002"
        },
        "commitId": "64fb8638c3cbe69b66827d6b",
        "edit_ts": "2023-09-08T20:38:20.186Z",
        "numInstances": 1
    },
    {
        "_id": "64fb8788f5d08bb1677b0bdb",
        "user": {
            "id": "64fb8784f5d08bb1677b0bda"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276558658312339457"
        },
        "commitId": "64fb8788c3cbe69b6682b20f",
        "edit_ts": "2023-09-08T20:43:56.350Z",
        "numInstances": 1
    },
    {
        "_id": "64fb87bea3f3d893e312471e",
        "user": {
            "id": "64fb87bd256eb7ac1ba052b5"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276558890240573446"
        },
        "commitId": "64fb87bec3cbe69b6682bb73",
        "edit_ts": "2023-09-08T20:44:50.324Z",
        "numInstances": 1
    },
    {
        "_id": "64fb87c2a3f3d893e3124721",
        "user": {
            "id": "64fb87c026f0f3cfba27f9d1"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276558903125475335"
        },
        "commitId": "64fb87c2c3cbe69b6682bd32",
        "edit_ts": "2023-09-08T20:44:53.659Z",
        "numInstances": 1
    },
    {
        "_id": "64fb87c5a3f3d893e3124724",
        "user": {
            "id": "64fb87c326f0f3cfba27f9d2"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276558920305344519"
        },
        "commitId": "64fb87c5c3cbe69b6682beff",
        "edit_ts": "2023-09-08T20:44:57.561Z",
        "numInstances": 1
    },
    {
        "_id": "64fb87c726f0f3cfba27f9d3",
        "user": {
            "id": "64fb87c5256eb7ac1ba052b8"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276558924600311809"
        },
        "commitId": "64fb87c7c3cbe69b6682bfe9",
        "edit_ts": "2023-09-08T20:44:58.937Z",
        "numInstances": 1
    },
    {
        "_id": "64fb88c8d04b7176b3d9a7b3",
        "user": {
            "id": "64fb88c6988d09beb0b3ca0b"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276560015522004993"
        },
        "commitId": "64fb88c8c3cbe69b6682e3b4",
        "numInstances": 1
    },
    {
        "_id": "64fb88ccd04b7176b3d9a7b8",
        "user": {
            "id": "64fb88cad04b7176b3d9a7b6"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276560054176710658"
        },
        "commitId": "64fb88ccc3cbe69b6682e5d6",
        "edit_ts": "2023-09-08T20:49:21.153Z",
        "numInstances": 1
    },
    {
        "_id": "64fb88cd988d09beb0b3ca15",
        "user": {
            "id": "64fb88cbd04b7176b3d9a7b7"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276560049881743365"
        },
        "commitId": "64fb88cdc3cbe69b6682e64d",
        "edit_ts": "2023-09-08T20:49:20.643Z",
        "numInstances": 1
    },
    {
        "_id": "64fb88d0988d09beb0b3ca1b",
        "user": {
            "id": "64fb88ce988d09beb0b3ca16"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276560062766645259"
        },
        "commitId": "64fb88d0c3cbe69b6682e7d9",
        "edit_ts": "2023-09-08T20:49:23.996Z",
        "numInstances": 1
    },
    {
        "_id": "64fb890f01a1717f50f7cba5",
        "user": {
            "id": "64cbf4e4d891153d3e5b706a"
        },
        "ancestors": [
            {
                "_id": "64f8b4445c58b9f34316778e",
                "user": {
                    "id": "64cbf4e4d891153d3e5b706a"
                }
            }
        ],
        "_ts": {
            "$timestamp": "7276560320464683009"
        },
        "permissionToShare": true,
        "licenses": [],
        "commitId": "64fb890fc3cbe69b6682f263",
        "numInstances": 0
    },
    {
        "_id": "64fb897b01a1717f50f7cba8",
        "user": {
            "id": "64cbf4c94d40e075084baa93"
        },
        "ancestors": [
            {
                "_id": "57d9bd7801546d4d09d21388",
                "user": {
                    "id": "55fb1831efe3b67f175ca4a2"
                }
            },
            {
                "_id": "57e55435920c2cd506168126",
                "user": {
                    "id": "55fb1831efe3b67f175ca4a2"
                }
            },
            {
                "_id": "64fa35c326a460f7b27883a2",
                "user": {
                    "id": "64cbf4c94d40e075084baa93"
                }
            },
            {
                "_id": "64fa3615c92bd1d3c99db110",
                "user": {
                    "id": "64cbf4c94d40e075084baa93"
                }
            }
        ],
        "_ts": {
            "$timestamp": "7276561372731670530"
        },
        "permissionToShare": true,
        "licenses": [],
        "commitId": "64fb899101a1717f50f7cbaa",
        "edit_ts": "2023-09-08T20:54:28.132Z",
        "publishedTimestamp": "2023-09-08T20:54:28.132Z",
        "numInstances": 0
    },
    {
        "_id": "64fb8a5501a1717f50f7cbab",
        "user": {
            "id": "64f8c303d595ac6bfa34cd00"
        },
        "ancestors": [
            {
                "_id": "565284a2cbfbcde732b55ae8",
                "user": {
                    "id": "5514ad075bb90671051acab6"
                }
            },
            {
                "_id": "566b31734e38e1e21a10aac8",
                "user": {
                    "id": "55fb1831efe3b67f175ca4a2"
                }
            }
        ],
        "_ts": {
            "$timestamp": "7276562373459050501"
        },
        "permissionToShare": true,
        "licenses": [],
        "teamDesmosAuthored": true,
        "commitId": "64fb8a6d38e50ff05d391a6c",
        "edit_ts": "2023-09-08T20:58:21.705Z",
        "publishedTimestamp": "2023-09-08T20:58:21.705Z",
        "numInstances": 0
    },
    {
        "_id": "64fb8a9cb7716f0b118a96ec",
        "user": {
            "id": "64fb8a9ab7716f0b118a96ea"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276562047041536002"
        },
        "commitId": "64fb8a9cc3cbe69b66832884",
        "edit_ts": "2023-09-08T20:57:05.465Z",
        "numInstances": 1
    },
    {
        "_id": "64fb8a9eb7716f0b118a96ee",
        "user": {
            "id": "64fb8a9cb7716f0b118a96eb"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276562051336503297"
        },
        "commitId": "64fb8a9ec3cbe69b66832977",
        "edit_ts": "2023-09-08T20:57:06.841Z",
        "numInstances": 1
    },
    {
        "_id": "64fb8aa0b7716f0b118a96ef",
        "user": {
            "id": "64fb8a9eb7716f0b118a96ed"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276562055631470597"
        },
        "commitId": "64fb8aa0c3cbe69b66832a50",
        "edit_ts": "2023-09-08T20:57:07.777Z",
        "numInstances": 1
    },
    {
        "_id": "64fb8aa09352f07ecc449c32",
        "user": {
            "id": "64fb8a9e9352f07ecc449c2f"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276562059926437890"
        },
        "commitId": "64fb8aa0c3cbe69b66832ac9",
        "edit_ts": "2023-09-08T20:57:08.708Z",
        "numInstances": 1
    },
    {
        "_id": "64fb8ae838ec1d383c6f35d7",
        "user": {
            "id": "64fb8ae638ec1d383c6f35d6"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276562364869115906"
        },
        "commitId": "64fb8ae8c3cbe69b66833950",
        "edit_ts": "2023-09-08T20:58:19.423Z",
        "numInstances": 1
    },
    {
        "_id": "64fb8b1e5a6a529185418328",
        "user": {
            "id": "64fb8b1c38ec1d383c6f35da"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276562601092317185"
        },
        "commitId": "64fb8b1ec3cbe69b668342ff",
        "edit_ts": "2023-09-08T20:59:14.097Z",
        "numInstances": 1
    },
    {
        "_id": "64fb8b26a419b5a1674010fa",
        "user": {
            "id": "64fb8b2438ec1d383c6f35dc"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276562639747022851"
        },
        "commitId": "64fb8b26c3cbe69b66834679",
        "edit_ts": "2023-09-08T20:59:23.610Z",
        "numInstances": 1
    },
    {
        "_id": "64fb8b2a522a8923fc43669a",
        "user": {
            "id": "64fb8b27a419b5a1674010fb"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276562652631924743"
        },
        "commitId": "64fb8b2ac3cbe69b668347f4",
        "edit_ts": "2023-09-08T20:59:26.140Z",
        "numInstances": 1
    },
    {
        "_id": "64fb8b2da419b5a1674010fe",
        "user": {
            "id": "64fb8b2c5a6a52918541832b"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276562665516826631"
        },
        "commitId": "64fb8b2dc3cbe69b668349b1",
        "edit_ts": "2023-09-08T20:59:29.525Z",
        "numInstances": 1
    },
    {
        "_id": "64fb8c4fbf07fd17a87bdc6a",
        "user": {
            "id": "64fb8c4ebf07fd17a87bdc68"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276563915352309763"
        },
        "commitId": "64fb8c4fc3cbe69b668370f9",
        "edit_ts": "2023-09-08T21:04:20.960Z",
        "numInstances": 1
    },
    {
        "_id": "64fb8c52bf07fd17a87bdc6b",
        "user": {
            "id": "64fb8c4fbf07fd17a87bdc69"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276563919647277058"
        },
        "commitId": "64fb8c52c3cbe69b668371a4",
        "edit_ts": "2023-09-08T21:04:21.623Z",
        "numInstances": 1
    },
    {
        "_id": "64fb8c5bae1b4ddadb89c364",
        "user": {
            "id": "64fb8c59095d7e93666415fa"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276563945417080838"
        },
        "commitId": "64fb8c5bc3cbe69b668376f4",
        "numInstances": 1
    },
    {
        "_id": "64fb8c5cae1b4ddadb89c367",
        "user": {
            "id": "64fb8c5aae1b4ddadb89c363"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276563949712048139"
        },
        "commitId": "64fb8c5cc3cbe69b6683787a",
        "numInstances": 1
    },
    {
        "_id": "64fb8c60ae1b4ddadb89c368",
        "user": {
            "id": "64fb8c5e095d7e9366641602"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276563988366753798"
        },
        "commitId": "64fb8c60c3cbe69b66837b1c",
        "edit_ts": "2023-09-08T21:04:37.358Z",
        "numInstances": 1
    },
    {
        "_id": "64fb8c61095d7e9366641606",
        "user": {
            "id": "64fb8c5f095d7e9366641605"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276563988366753794"
        },
        "commitId": "64fb8c61c3cbe69b66837ba6",
        "edit_ts": "2023-09-08T21:04:37.132Z",
        "numInstances": 1
    },
    {
        "_id": "64fb8c85bf07fd17a87bdc79",
        "user": {
            "id": "64fb8c84bf07fd17a87bdc77"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276564125805707273"
        },
        "commitId": "64fb8c86c3cbe69b66838486",
        "numInstances": 1
    },
    {
        "_id": "64fb8c8dbf07fd17a87bdc84",
        "user": {
            "id": "64fb8c8bbf07fd17a87bdc83"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276564173050347523"
        },
        "commitId": "64fb8c8dc3cbe69b66838782",
        "edit_ts": "2023-09-08T21:05:20.574Z",
        "numInstances": 1
    },
    {
        "_id": "64fb8c8fbf07fd17a87bdc88",
        "user": {
            "id": "64fb8c8dbf07fd17a87bdc85"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276564185935249415"
        },
        "commitId": "64fb8c8fc3cbe69b66838870",
        "edit_ts": "2023-09-08T21:05:23.408Z",
        "numInstances": 1
    },
    {
        "_id": "64fb8d05a389c8bf790059fb",
        "user": {
            "id": "64fb8d036990d7558d1d4bb5"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276564692741390338"
        },
        "commitId": "64fb8d05c3cbe69b668398a9",
        "edit_ts": "2023-09-08T21:07:21.821Z",
        "numInstances": 1
    },
    {
        "_id": "64fb8d1d7a6b110b0b076670",
        "user": {
            "id": "64fb8d1b7a6b110b0b07666e"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276564778640736338"
        },
        "commitId": "64fb8d1dc3cbe69b66839e75",
        "numInstances": 1
    },
    {
        "_id": "64fb8d2458a72c59209d104a",
        "user": {
            "id": "64fb8d227a6b110b0b076678"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276564821590409218"
        },
        "commitId": "64fb8d24c3cbe69b6683a186",
        "edit_ts": "2023-09-08T21:07:51.628Z",
        "numInstances": 1
    },
    {
        "_id": "64fb8d2458a72c59209d104b",
        "user": {
            "id": "64fb8d2258a72c59209d1049"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276564825885376514"
        },
        "commitId": "64fb8d24c3cbe69b6683a1ea",
        "edit_ts": "2023-09-08T21:07:52.290Z",
        "numInstances": 1
    },
    {
        "_id": "64fb8d2758a72c59209d104d",
        "user": {
            "id": "64fb8d2558a72c59209d104c"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276564834475311114"
        },
        "commitId": "64fb8d27c3cbe69b6683a36c",
        "edit_ts": "2023-09-08T21:07:54.982Z",
        "numInstances": 1
    },
    {
        "_id": "64fb8d3c82531e0f43417797",
        "user": {
            "id": "64fb8d3a540ab5ec3b8c76c4"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276564911784722433"
        },
        "commitId": "64fb8d3cc3cbe69b6683aa06",
        "numInstances": 1
    },
    {
        "_id": "64fb8d40a389c8bf790059fc",
        "user": {
            "id": "64fb8d3e6990d7558d1d4bb9"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276564928964591624"
        },
        "commitId": "64fb8d40c3cbe69b6683ac67",
        "numInstances": 1
    },
    {
        "_id": "64fb8d446990d7558d1d4bbd",
        "user": {
            "id": "64fb8d426990d7558d1d4bbc"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276564963324329985"
        },
        "commitId": "64fb8d44c3cbe69b6683ae06",
        "edit_ts": "2023-09-08T21:08:24.321Z",
        "numInstances": 1
    },
    {
        "_id": "64fb8d47a389c8bf79005a03",
        "user": {
            "id": "64fb8d456990d7558d1d4bbe"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276564971914264579"
        },
        "commitId": "64fb8d47c3cbe69b6683af67",
        "edit_ts": "2023-09-08T21:08:26.809Z",
        "numInstances": 1
    },
    {
        "_id": "64fb8e9e2043829b42e96d4d",
        "user": {
            "id": "64fb8e9cc54e9f3c671840eb"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276566445088047105"
        },
        "commitId": "64fb8e9ec3cbe69b6683dc64",
        "edit_ts": "2023-09-08T21:14:09.425Z",
        "numInstances": 1
    },
    {
        "_id": "64fb8ecfc54e9f3c671840f1",
        "user": {
            "id": "64fb8ecd5469a0eeb4703af3"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276566655541444610"
        },
        "commitId": "64fb8ecfc3cbe69b6683e821",
        "edit_ts": "2023-09-08T21:14:58.444Z",
        "numInstances": 1
    },
    {
        "_id": "64fb8ed4c54e9f3c671840f2",
        "user": {
            "id": "64fb8ed22043829b42e96d53"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276566681311248390"
        },
        "commitId": "64fb8ed4c3cbe69b6683ea8a",
        "edit_ts": "2023-09-08T21:15:04.567Z",
        "numInstances": 1
    },
    {
        "_id": "64fb8ed5c33d0289553bfcaf",
        "user": {
            "id": "64fb8ed35469a0eeb4703af5"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276566685606215682"
        },
        "commitId": "64fb8ed5c3cbe69b6683eaf0",
        "edit_ts": "2023-09-08T21:15:05.517Z",
        "numInstances": 1
    },
    {
        "_id": "64fb8ed85469a0eeb4703af8",
        "user": {
            "id": "64fb8ed42043829b42e96d56"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276566698491117570"
        },
        "commitId": "64fb8ed8c3cbe69b6683ec1c",
        "edit_ts": "2023-09-08T21:15:08.363Z",
        "numInstances": 1
    },
    {
        "_id": "64fb905d2d001b08b59de158",
        "user": {
            "id": "64f8c303d595ac6bfa34cd00"
        },
        "ancestors": [
            {
                "_id": "565284a2cbfbcde732b55ae8",
                "user": {
                    "id": "5514ad075bb90671051acab6"
                }
            },
            {
                "_id": "566b31734e38e1e21a10aac8",
                "user": {
                    "id": "55fb1831efe3b67f175ca4a2"
                }
            },
            {
                "_id": "64fb8a5501a1717f50f7cbab",
                "user": {
                    "id": "64f8c303d595ac6bfa34cd00"
                }
            }
        ],
        "_ts": {
            "$timestamp": "7279058458127630339"
        },
        "permissionToShare": true,
        "licenses": [],
        "teamDesmosAuthored": true,
        "commitId": "64fb905dc3cbe69b66841fc6",
        "edit_ts": "2023-09-15T14:24:26.866Z",
        "numInstances": 0
    },
    {
        "_id": "64fb90c5379fc257e3865388",
        "user": {
            "id": "64fb90c2804f795ba13a3a07"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276568815909994497"
        },
        "commitId": "64fb90c5c3cbe69b66842dc8",
        "edit_ts": "2023-09-08T21:23:21.070Z",
        "numInstances": 1
    },
    {
        "_id": "64fb90c8379fc257e386538b",
        "user": {
            "id": "64fb90c5804f795ba13a3a08"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276568828794896386"
        },
        "commitId": "64fb90c8c3cbe69b66842eaf",
        "edit_ts": "2023-09-08T21:23:24.455Z",
        "numInstances": 1
    },
    {
        "_id": "64fb9100804f795ba13a3a0e",
        "user": {
            "id": "64fb90ffbdc9ed638e8e8908"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276569065018097665"
        },
        "commitId": "64fb9100c3cbe69b668439f0",
        "edit_ts": "2023-09-08T21:24:19.780Z",
        "numInstances": 1
    },
    {
        "_id": "64fb9102bdc9ed638e8e890a",
        "user": {
            "id": "64fb9100bdc9ed638e8e8909"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276569073608032270"
        },
        "commitId": "64fb9102c3cbe69b66843aa0",
        "edit_ts": "2023-09-08T21:24:21.995Z",
        "numInstances": 1
    },
    {
        "_id": "64fb9105804f795ba13a3a0f",
        "user": {
            "id": "64fb9102bdc9ed638e8e890b"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276569090787901446"
        },
        "commitId": "64fb9105c3cbe69b66843cd2",
        "edit_ts": "2023-09-08T21:24:25.362Z",
        "numInstances": 1
    },
    {
        "_id": "64fb910910541cc87a36bd4e",
        "user": {
            "id": "64fb9107bdc9ed638e8e8910"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276569103672803333"
        },
        "commitId": "64fb9109c3cbe69b66843e7f",
        "edit_ts": "2023-09-08T21:24:28.622Z",
        "numInstances": 1
    },
    {
        "_id": "64fb912a379fc257e3865391",
        "user": {
            "id": "64fb912710541cc87a36bd54"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276569245406724100"
        },
        "commitId": "64fb912ac3cbe69b66844561",
        "edit_ts": "2023-09-08T21:25:01.894Z",
        "numInstances": 1
    },
    {
        "_id": "64fb918d7d44d0ae204c363d",
        "user": {
            "id": "64cbf4c94d40e075084baa93"
        },
        "ancestors": [
            {
                "_id": "57d9bd7801546d4d09d21388",
                "user": {
                    "id": "55fb1831efe3b67f175ca4a2"
                }
            },
            {
                "_id": "57e55435920c2cd506168126",
                "user": {
                    "id": "55fb1831efe3b67f175ca4a2"
                }
            },
            {
                "_id": "64fa35c326a460f7b27883a2",
                "user": {
                    "id": "64cbf4c94d40e075084baa93"
                }
            },
            {
                "_id": "64fa3615c92bd1d3c99db110",
                "user": {
                    "id": "64cbf4c94d40e075084baa93"
                }
            },
            {
                "_id": "64fb897b01a1717f50f7cba8",
                "user": {
                    "id": "64cbf4c94d40e075084baa93"
                }
            }
        ],
        "_ts": {
            "$timestamp": "7276569777982668803"
        },
        "permissionToShare": true,
        "licenses": [],
        "commitId": "64fb918dc3cbe69b66845414",
        "edit_ts": "2023-09-08T21:27:05.715Z",
        "numInstances": 0
    },
    {
        "_id": "64fb9b365073c35d3f591b4a",
        "user": {
            "id": "64fb9b345073c35d3f591b49"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276580296357576708"
        },
        "commitId": "64fb9b36c3cbe69b66857625",
        "edit_ts": "2023-09-08T22:07:54.956Z",
        "numInstances": 1
    },
    {
        "_id": "64fb9b388bf12c0b9c9db2bb",
        "user": {
            "id": "64fb9b375073c35d3f591b4b"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276580309242478595"
        },
        "commitId": "64fb9b38c3cbe69b6685773f",
        "edit_ts": "2023-09-08T22:07:57.438Z",
        "numInstances": 1
    },
    {
        "_id": "64fb9b405073c35d3f591b51",
        "user": {
            "id": "64fb9b3d5073c35d3f591b50"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276580339307249665"
        },
        "commitId": "64fb9b40c3cbe69b66857a0c",
        "edit_ts": "2023-09-08T22:08:04.044Z",
        "numInstances": 1
    },
    {
        "_id": "64fb9b4b5073c35d3f591b58",
        "user": {
            "id": "64fb9b495073c35d3f591b57"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276580386551889922"
        },
        "commitId": "64fb9b4bc3cbe69b66857db8",
        "edit_ts": "2023-09-08T22:08:15.353Z",
        "numInstances": 1
    },
    {
        "_id": "64fc5132e49f80a87abc7597",
        "user": {
            "id": "64fc5130a0d20006287c6df8"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276780373114093569"
        },
        "commitId": "64fc5132c3cbe69b6699dd52",
        "numInstances": 1
    },
    {
        "_id": "64fc5136e49f80a87abc759b",
        "user": {
            "id": "64fc5134e49f80a87abc7598"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276780403178864642"
        },
        "commitId": "64fc5136c3cbe69b6699dff4",
        "edit_ts": "2023-09-09T11:04:25.564Z",
        "numInstances": 1
    },
    {
        "_id": "64fc5136e49f80a87abc759c",
        "user": {
            "id": "64fc5133a0d20006287c6dfd"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276780398883897350"
        },
        "commitId": "64fc5136c3cbe69b6699dffb",
        "edit_ts": "2023-09-09T11:04:24.895Z",
        "numInstances": 1
    },
    {
        "_id": "64fc513aa0d20006287c6e00",
        "user": {
            "id": "64fc5138e49f80a87abc759f"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276780424653701124"
        },
        "commitId": "64fc513ac3cbe69b6699e1fa",
        "edit_ts": "2023-09-09T11:04:30.879Z",
        "numInstances": 1
    },
    {
        "_id": "64fc529bd01ea2db369f4bbe",
        "user": {
            "id": "64fc529ad01ea2db369f4bbd"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276781923597287426"
        },
        "commitId": "64fc529bc3cbe69b669a0ca2",
        "numInstances": 1
    },
    {
        "_id": "64fc52cd0168bc89ba823828",
        "user": {
            "id": "64fc52cb39c69973183e1752"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276782151230554189"
        },
        "commitId": "64fc52cdc3cbe69b669a1541",
        "edit_ts": "2023-09-09T11:11:12.930Z",
        "numInstances": 1
    },
    {
        "_id": "64fc52d039c69973183e1755",
        "user": {
            "id": "64fc52cdd01ea2db369f4bc3"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276782164115456007"
        },
        "commitId": "64fc52d0c3cbe69b669a1713",
        "edit_ts": "2023-09-09T11:11:15.862Z",
        "numInstances": 1
    },
    {
        "_id": "64fc52d30168bc89ba82382e",
        "user": {
            "id": "64fc52d0d01ea2db369f4bc4"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276782177000357896"
        },
        "commitId": "64fc52d3c3cbe69b669a18ae",
        "edit_ts": "2023-09-09T11:11:18.874Z",
        "numInstances": 1
    },
    {
        "_id": "64fc52d5d01ea2db369f4bc7",
        "user": {
            "id": "64fc52d439c69973183e1756"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276782189885259777"
        },
        "commitId": "64fc52d5c3cbe69b669a1a0d",
        "edit_ts": "2023-09-09T11:11:21.186Z",
        "numInstances": 1
    },
    {
        "_id": "64fc548ea357b3185083fbeb",
        "user": {
            "id": "64fc548bd9d53903a971428f"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276784079670870019"
        },
        "commitId": "64fc548ec3cbe69b669a4fdd",
        "edit_ts": "2023-09-09T11:18:41.887Z",
        "numInstances": 1
    },
    {
        "_id": "64fc549164ad66667e952892",
        "user": {
            "id": "64fc548ea357b3185083fbec"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276784101145706498"
        },
        "commitId": "64fc5491c3cbe69b669a5107",
        "edit_ts": "2023-09-09T11:18:46.306Z",
        "numInstances": 1
    },
    {
        "_id": "64fc54cf262a35601d895a2c",
        "user": {
            "id": "64fc54cca357b3185083fbed"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276784358843744257"
        },
        "commitId": "64fc54cfc3cbe69b669a5bfd",
        "edit_ts": "2023-09-09T11:19:46.126Z",
        "numInstances": 1
    },
    {
        "_id": "64fc54d2a357b3185083fbef",
        "user": {
            "id": "64fc54d0a357b3185083fbee"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276784371728646170"
        },
        "commitId": "64fc54d2c3cbe69b669a5d8a",
        "edit_ts": "2023-09-09T11:19:49.812Z",
        "numInstances": 1
    },
    {
        "_id": "64fc54d3262a35601d895a2e",
        "user": {
            "id": "64fc54d064ad66667e952898"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276784376023613441"
        },
        "commitId": "64fc54d3c3cbe69b669a5de4",
        "edit_ts": "2023-09-09T11:19:50.530Z",
        "numInstances": 1
    },
    {
        "_id": "64fc54d4262a35601d895a2f",
        "user": {
            "id": "64fc54d0262a35601d895a2d"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7276784380318580743"
        },
        "commitId": "64fc54d4c3cbe69b669a5ed3",
        "edit_ts": "2023-09-09T11:19:51.939Z",
        "numInstances": 1
    },
    {
        "_id": "64fcf79e7f810985e68d0124",
        "user": {
            "id": "64c017169217a4ad3ae60096"
        },
        "permissionToShare": false,
        "_ts": {
            "$timestamp": "7276963390260510721"
        },
        "commitId": "64fcf7a07f810985e68d0126",
        "edit_ts": "2023-09-09T22:54:26.527Z",
        "licenses": [],
        "publishedTimestamp": "2023-09-09T22:54:26.527Z",
        "deleted": true,
        "numInstances": 0
    },
    {
        "_id": "64fcfa5f7f810985e68d0131",
        "user": {
            "id": "64c017169217a4ad3ae60096"
        },
        "permissionToShare": false,
        "_ts": {
            "$timestamp": "7276966418212454407"
        },
        "commitId": "64fcfa62ae35da256fe5ddce",
        "edit_ts": "2023-09-09T23:06:12.624Z",
        "licenses": [],
        "publishedTimestamp": "2023-09-09T23:06:12.624Z",
        "deleted": true,
        "numInstances": 0
    },
    {
        "_id": "64fcfc187f810985e68d013d",
        "user": {
            "id": "64c017169217a4ad3ae60096"
        },
        "permissionToShare": false,
        "_ts": {
            "$timestamp": "7276968303703097362"
        },
        "commitId": "64fcfc1a7f810985e68d013f",
        "edit_ts": "2023-09-09T23:13:32.520Z",
        "licenses": [],
        "publishedTimestamp": "2023-09-09T23:13:32.520Z",
        "deleted": true,
        "numInstances": 0
    },
    {
        "_id": "64fe705260f5aeea2c5fba1b",
        "user": {
            "id": "64fe705071a96a1d05e9fef4"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277377566841765893"
        },
        "commitId": "64fe7052c3cbe69b66d6993d",
        "edit_ts": "2023-09-11T01:41:43.614Z",
        "numInstances": 1
    },
    {
        "_id": "64fe705371a96a1d05e9fef6",
        "user": {
            "id": "64fe705071a96a1d05e9fef5"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277377566841765889"
        },
        "commitId": "64fe7053c3cbe69b66d699a5",
        "edit_ts": "2023-09-11T01:41:43.532Z",
        "numInstances": 1
    },
    {
        "_id": "64fe705460f5aeea2c5fba1c",
        "user": {
            "id": "64fe705260f5aeea2c5fba1a"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277377571136733185"
        },
        "commitId": "64fe7054c3cbe69b66d69a3d",
        "edit_ts": "2023-09-11T01:41:44.351Z",
        "numInstances": 1
    },
    {
        "_id": "64fe705871a96a1d05e9fefc",
        "user": {
            "id": "64fe705571a96a1d05e9fef7"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277377588316602369"
        },
        "commitId": "64fe7058c3cbe69b66d69c3a",
        "edit_ts": "2023-09-11T01:41:48.353Z",
        "numInstances": 1
    },
    {
        "_id": "64fe8700b2f8b04a156007b2",
        "user": {
            "id": "64fe86feb2f8b04a156007b1"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277402494831951873"
        },
        "commitId": "64fe8700c3cbe69b66d92c98",
        "edit_ts": "2023-09-11T03:18:27.459Z",
        "numInstances": 1
    },
    {
        "_id": "64fe8702b2f8b04a156007b7",
        "user": {
            "id": "64fe8700b2f8b04a156007b3"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277402507716853764"
        },
        "commitId": "64fe8702c3cbe69b66d92e01",
        "edit_ts": "2023-09-11T03:18:30.524Z",
        "numInstances": 1
    },
    {
        "_id": "64fe870273da7b8b34396a47",
        "user": {
            "id": "64fe8701b2f8b04a156007b4"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277402507716853761"
        },
        "commitId": "64fe8702c3cbe69b66d92e28",
        "edit_ts": "2023-09-11T03:18:30.141Z",
        "numInstances": 1
    },
    {
        "_id": "64fe870bb2f8b04a156007bc",
        "user": {
            "id": "64fe870973da7b8b34396a4e"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277402546371559426"
        },
        "commitId": "64fe870bc3cbe69b66d932f3",
        "edit_ts": "2023-09-11T03:18:39.511Z",
        "numInstances": 1
    },
    {
        "_id": "64fe8add8c68edf844e739aa",
        "user": {
            "id": "64fe8adb8c68edf844e739a8"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277406746849574914"
        },
        "commitId": "64fe8addc3cbe69b66d9a598",
        "edit_ts": "2023-09-11T03:34:57.440Z",
        "numInstances": 1
    },
    {
        "_id": "64fe8addb11a6abc9e0e0881",
        "user": {
            "id": "64fe8adb8c68edf844e739a7"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277406746849574919"
        },
        "commitId": "64fe8adec3cbe69b66d9a5fc",
        "edit_ts": "2023-09-11T03:34:57.756Z",
        "numInstances": 1
    },
    {
        "_id": "64fe8adeb11a6abc9e0e0882",
        "user": {
            "id": "64fe8adab11a6abc9e0e0880"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277406746849574917"
        },
        "commitId": "64fe8adec3cbe69b66d9a63a",
        "edit_ts": "2023-09-11T03:34:57.755Z",
        "numInstances": 1
    },
    {
        "_id": "64fe8adfb11a6abc9e0e0883",
        "user": {
            "id": "64fe8add8c68edf844e739a9"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277406751144542209"
        },
        "commitId": "64fe8adfc3cbe69b66d9a6cb",
        "edit_ts": "2023-09-11T03:34:58.633Z",
        "numInstances": 1
    },
    {
        "_id": "64fe92758b432d896c91a011",
        "user": {
            "id": "64fe92738b432d896c91a010"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277415100560965634"
        },
        "commitId": "64fe9275c3cbe69b66da8489",
        "edit_ts": "2023-09-11T04:07:22.147Z",
        "numInstances": 1
    },
    {
        "_id": "64fe92778b432d896c91a013",
        "user": {
            "id": "64fe9275a37d56e3e8fba692"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277415104855932930"
        },
        "commitId": "64fe9277c3cbe69b66da85c1",
        "edit_ts": "2023-09-11T04:07:23.472Z",
        "numInstances": 1
    },
    {
        "_id": "64fe9278a37d56e3e8fba695",
        "user": {
            "id": "64fe9275a37d56e3e8fba691"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277415104855932937"
        },
        "commitId": "64fe9278c3cbe69b66da865d",
        "edit_ts": "2023-09-11T04:07:23.818Z",
        "numInstances": 1
    },
    {
        "_id": "64fe92798b432d896c91a014",
        "user": {
            "id": "64fe92768b432d896c91a012"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277415104855932934"
        },
        "commitId": "64fe9279c3cbe69b66da8701",
        "edit_ts": "2023-09-11T04:07:23.803Z",
        "numInstances": 1
    },
    {
        "_id": "64fe961ce2ee5ae0ae2a2324",
        "user": {
            "id": "64fe961be2ee5ae0ae2a2321"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277419094880550919"
        },
        "commitId": "64fe961cc3cbe69b66daf59a",
        "numInstances": 1
    },
    {
        "_id": "64fe9621e2ee5ae0ae2a232b",
        "user": {
            "id": "64fe961e742ddce574bb509e"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277419133535256581"
        },
        "commitId": "64fe9621c3cbe69b66daf7ce",
        "edit_ts": "2023-09-11T04:23:01.180Z",
        "numInstances": 1
    },
    {
        "_id": "64fe9622742ddce574bb50a3",
        "user": {
            "id": "64fe961fe2ee5ae0ae2a2329"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277419133535256578"
        },
        "commitId": "64fe9622c3cbe69b66daf861",
        "edit_ts": "2023-09-11T04:23:01.028Z",
        "numInstances": 1
    },
    {
        "_id": "64fe9626742ddce574bb50a6",
        "user": {
            "id": "64fe9625e2ee5ae0ae2a232e"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277419150715125763"
        },
        "commitId": "64fe9626c3cbe69b66dafab0",
        "edit_ts": "2023-09-11T04:23:05.909Z",
        "numInstances": 1
    },
    {
        "_id": "64fe9c656386c43700814bae",
        "user": {
            "id": "64fe9c64c7d0b287b7738a5a"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277426005482930180"
        },
        "commitId": "64fe9c65c3cbe69b66dbb100",
        "numInstances": 1
    },
    {
        "_id": "64fe9c6cc7d0b287b7738a64",
        "user": {
            "id": "64fe9c6ac7d0b287b7738a62"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277426035547701250"
        },
        "commitId": "64fe9c6cc3cbe69b66dbb433",
        "numInstances": 1
    },
    {
        "_id": "64fe9c6d6386c43700814bb5",
        "user": {
            "id": "64fe9c6bc7d0b287b7738a63"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277426052727570438"
        },
        "commitId": "64fe9c6dc3cbe69b66dbb4c3",
        "edit_ts": "2023-09-11T04:49:52.719Z",
        "numInstances": 1
    },
    {
        "_id": "64fe9c6e6386c43700814bb8",
        "user": {
            "id": "64fe9c6dc7d0b287b7738a65"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277426061317505031"
        },
        "commitId": "64fe9c6ec3cbe69b66dbb581",
        "edit_ts": "2023-09-11T04:49:54.449Z",
        "numInstances": 1
    },
    {
        "_id": "64fec4285ad220a939140835",
        "user": {
            "id": "64fec4275ad220a939140833"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277469745429872642"
        },
        "commitId": "64fec428c3cbe69b66e06e0f",
        "edit_ts": "2023-09-11T07:39:25.060Z",
        "numInstances": 1
    },
    {
        "_id": "64fec42a5ad220a939140836",
        "user": {
            "id": "64fec4275ad220a939140834"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277469745429872651"
        },
        "commitId": "64fec42ac3cbe69b66e06eaf",
        "edit_ts": "2023-09-11T07:39:25.668Z",
        "numInstances": 1
    },
    {
        "_id": "64fec42b719e52d50b469302",
        "user": {
            "id": "64fec429719e52d50b4692fe"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277469754019807234"
        },
        "commitId": "64fec42bc3cbe69b66e06f79",
        "edit_ts": "2023-09-11T07:39:27.129Z",
        "numInstances": 1
    },
    {
        "_id": "64fec42d719e52d50b469303",
        "user": {
            "id": "64fec42b719e52d50b4692ff"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277469745429872654"
        },
        "commitId": "64fec42dc3cbe69b66e070df",
        "numInstances": 1
    },
    {
        "_id": "64fec76c3f32c761ecc599c6",
        "user": {
            "id": "64fec76ac83ad5437529bd05"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277473331727564806"
        },
        "commitId": "64fec76cc3cbe69b66e0d63d",
        "edit_ts": "2023-09-11T07:53:20.595Z",
        "numInstances": 1
    },
    {
        "_id": "64fec76dc83ad5437529bd07",
        "user": {
            "id": "64fec76b3f32c761ecc599c5"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277473331727564809"
        },
        "commitId": "64fec76dc3cbe69b66e0d6e8",
        "edit_ts": "2023-09-11T07:53:20.608Z",
        "numInstances": 1
    },
    {
        "_id": "64fec76d3f32c761ecc599c7",
        "user": {
            "id": "64fec76b3f32c761ecc599c4"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277473336022532097"
        },
        "commitId": "64fec76dc3cbe69b66e0d70a",
        "edit_ts": "2023-09-11T07:53:21.274Z",
        "numInstances": 1
    },
    {
        "_id": "64fec778c83ad5437529bd10",
        "user": {
            "id": "64fec7753f32c761ecc599ce"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277473378972205058"
        },
        "commitId": "64fec778c3cbe69b66e0db53",
        "edit_ts": "2023-09-11T07:53:31.946Z",
        "numInstances": 1
    },
    {
        "_id": "64feca0b1905dead8400cfe4",
        "user": {
            "id": "64feca071905dead8400cfe2"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277476209355653122"
        },
        "commitId": "64feca0bc3cbe69b66e12a98",
        "edit_ts": "2023-09-11T08:04:30.935Z",
        "numInstances": 1
    },
    {
        "_id": "64feca0b1905dead8400cfe5",
        "user": {
            "id": "64feca093a011d07fbd729c3"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277476213650620422"
        },
        "commitId": "64feca0bc3cbe69b66e12ad5",
        "edit_ts": "2023-09-11T08:04:31.935Z",
        "numInstances": 1
    },
    {
        "_id": "64feca123a011d07fbd729c9",
        "user": {
            "id": "64feca101905dead8400cfec"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277476243715391490"
        },
        "commitId": "64feca12c3cbe69b66e12e32",
        "edit_ts": "2023-09-11T08:04:38.339Z",
        "numInstances": 1
    },
    {
        "_id": "64feca151905dead8400cff1",
        "user": {
            "id": "64feca143a011d07fbd729ca"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277476252305326087"
        },
        "commitId": "64feca15c3cbe69b66e12f9b",
        "edit_ts": "2023-09-11T08:04:40.953Z",
        "numInstances": 1
    },
    {
        "_id": "64fedf8091a8af3946077e43",
        "user": {
            "id": "64fedf7e1f2069fffd58877b"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277499801611010052"
        },
        "commitId": "64fedf80c3cbe69b66e39b52",
        "edit_ts": "2023-09-11T09:36:03.705Z",
        "numInstances": 1
    },
    {
        "_id": "64fedf8491a8af3946077e48",
        "user": {
            "id": "64fedf8291a8af3946077e46"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277499818790879234"
        },
        "commitId": "64fedf84c3cbe69b66e39cc2",
        "edit_ts": "2023-09-11T09:36:07.669Z",
        "numInstances": 1
    },
    {
        "_id": "64fedf8491a8af3946077e49",
        "user": {
            "id": "64fedf8291a8af3946077e47"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277499823085846529"
        },
        "commitId": "64fedf84c3cbe69b66e39ce8",
        "edit_ts": "2023-09-11T09:36:08.158Z",
        "numInstances": 1
    },
    {
        "_id": "64fedf951f2069fffd588786",
        "user": {
            "id": "64fedf9191a8af3946077e4f"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277499891805323265"
        },
        "commitId": "64fedf95c3cbe69b66e3a28c",
        "edit_ts": "2023-09-11T09:36:24.151Z",
        "numInstances": 1
    },
    {
        "_id": "64fee10dc7b19ef4872fde64",
        "user": {
            "id": "64fee10cc7b19ef4872fde61"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277501511007993860"
        },
        "commitId": "64fee10dc3cbe69b66e3ced9",
        "edit_ts": "2023-09-11T09:42:41.470Z",
        "numInstances": 1
    },
    {
        "_id": "64fee10efa3d020a8be3e4ae",
        "user": {
            "id": "64fee10bfa3d020a8be3e4ab"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277501511007993906"
        },
        "commitId": "64fee10ec3cbe69b66e3cf1f",
        "edit_ts": "2023-09-11T09:42:41.884Z",
        "numInstances": 1
    },
    {
        "_id": "64fee113c7b19ef4872fde67",
        "user": {
            "id": "64fee110c7b19ef4872fde65"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277501532482830342"
        },
        "commitId": "64fee113c3cbe69b66e3d20c",
        "edit_ts": "2023-09-11T09:42:46.864Z",
        "numInstances": 1
    },
    {
        "_id": "64fee114fa3d020a8be3e4b3",
        "user": {
            "id": "64fee111c7b19ef4872fde66"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277501536777797634"
        },
        "commitId": "64fee114c3cbe69b66e3d315",
        "edit_ts": "2023-09-11T09:42:47.440Z",
        "numInstances": 1
    },
    {
        "_id": "64feeb6b6c2cfc86e5f0be55",
        "user": {
            "id": "64feeb696c2cfc86e5f0be53"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277512909851197442"
        },
        "commitId": "64feeb6bc3cbe69b66e4fac4",
        "edit_ts": "2023-09-11T10:26:55.513Z",
        "numInstances": 1
    },
    {
        "_id": "64feeb6b6c2cfc86e5f0be56",
        "user": {
            "id": "64feeb696c2cfc86e5f0be54"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277512909851197445"
        },
        "commitId": "64feeb6bc3cbe69b66e4fb13",
        "edit_ts": "2023-09-11T10:26:55.572Z",
        "numInstances": 1
    },
    {
        "_id": "64feeb6e586b56119b5a9d30",
        "user": {
            "id": "64feeb6c586b56119b5a9d2d"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277512918441132034"
        },
        "commitId": "64feeb6ec3cbe69b66e4fcb3",
        "edit_ts": "2023-09-11T10:26:57.507Z",
        "numInstances": 1
    },
    {
        "_id": "64feeb726c2cfc86e5f0be5e",
        "user": {
            "id": "64feeb706c2cfc86e5f0be59"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277512948505903105"
        },
        "commitId": "64feeb72c3cbe69b66e4ff2e",
        "edit_ts": "2023-09-11T10:27:04.261Z",
        "numInstances": 1
    },
    {
        "_id": "64fefaff3ef1c13aa8437172",
        "user": {
            "id": "64fefafd5cbd1bfd27345e36"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277530033885806593"
        },
        "commitId": "64fefaffc3cbe69b66e6bb30",
        "edit_ts": "2023-09-11T11:33:22.788Z",
        "numInstances": 1
    },
    {
        "_id": "64fefb033ef1c13aa8437174",
        "user": {
            "id": "64fefb005cbd1bfd27345e39"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277530055360643073"
        },
        "commitId": "64fefb03c3cbe69b66e6bcfb",
        "edit_ts": "2023-09-11T11:33:27.399Z",
        "numInstances": 1
    },
    {
        "_id": "64fefb035cbd1bfd27345e3e",
        "user": {
            "id": "64fefb013ef1c13aa8437173"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277530051065675779"
        },
        "commitId": "64fefb03c3cbe69b66e6bd47",
        "edit_ts": "2023-09-11T11:33:26.805Z",
        "numInstances": 1
    },
    {
        "_id": "64fefb095cbd1bfd27345e42",
        "user": {
            "id": "64fefb055cbd1bfd27345e41"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277530076835479555"
        },
        "commitId": "64fefb09c3cbe69b66e6c021",
        "edit_ts": "2023-09-11T11:33:32.939Z",
        "numInstances": 1
    },
    {
        "_id": "64ff03984596ef65cd9223d2",
        "user": {
            "id": "64ff0396c0b3179bd31bec01"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277539487108825089"
        },
        "commitId": "64ff0398c3cbe69b66e7b634",
        "edit_ts": "2023-09-11T12:10:03.435Z",
        "numInstances": 1
    },
    {
        "_id": "64ff03a04596ef65cd9223d9",
        "user": {
            "id": "64ff039dc0b3179bd31bec05"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277539521468563458"
        },
        "commitId": "64ff03a0c3cbe69b66e7b92c",
        "edit_ts": "2023-09-11T12:10:11.187Z",
        "numInstances": 1
    },
    {
        "_id": "64ff03a2c0b3179bd31bec09",
        "user": {
            "id": "64ff03a0c0b3179bd31bec06"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277539534353465346"
        },
        "commitId": "64ff03a2c3cbe69b66e7ba09",
        "edit_ts": "2023-09-11T12:10:14.301Z",
        "numInstances": 1
    },
    {
        "_id": "64ff03b7c0b3179bd31bec0b",
        "user": {
            "id": "64ff03b4c0b3179bd31bec0a"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277539624547778561"
        },
        "commitId": "64ff03b7c3cbe69b66e7bf1c",
        "edit_ts": "2023-09-11T12:10:35.146Z",
        "numInstances": 1
    },
    {
        "_id": "64ff0876ba6cdccb589ed3a5",
        "user": {
            "id": "64ff0875ba6cdccb589ed3a2"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277544838638075908"
        },
        "commitId": "64ff0876c3cbe69b66e84a6e",
        "edit_ts": "2023-09-11T12:30:49.364Z",
        "numInstances": 1
    },
    {
        "_id": "64ff087c2165f6807dba70d3",
        "user": {
            "id": "64ff0879ba6cdccb589ed3a6"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277544864407879686"
        },
        "commitId": "64ff087cc3cbe69b66e84d9d",
        "edit_ts": "2023-09-11T12:30:55.994Z",
        "numInstances": 1
    },
    {
        "_id": "64ff087dba6cdccb589ed3a8",
        "user": {
            "id": "64ff087b2165f6807dba70d2"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277544872997814274"
        },
        "commitId": "64ff087dc3cbe69b66e84e1b",
        "edit_ts": "2023-09-11T12:30:57.420Z",
        "numInstances": 1
    },
    {
        "_id": "64ff087e2165f6807dba70d4",
        "user": {
            "id": "64ff087aba6cdccb589ed3a7"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277544872997814277"
        },
        "commitId": "64ff087ec3cbe69b66e84ee5",
        "edit_ts": "2023-09-11T12:30:57.565Z",
        "numInstances": 1
    },
    {
        "_id": "64ff1aea869f7df2d1870ef1",
        "user": {
            "id": "64ff1ae81c7f534d47595e28"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277565132358549505"
        },
        "commitId": "64ff1aeac3cbe69b66ea6b74",
        "edit_ts": "2023-09-11T13:49:34.128Z",
        "numInstances": 1
    },
    {
        "_id": "64ff1aed869f7df2d1870ef3",
        "user": {
            "id": "64ff1aeb869f7df2d1870ef2"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277565145243451396"
        },
        "commitId": "64ff1aedc3cbe69b66ea6cee",
        "edit_ts": "2023-09-11T13:49:37.417Z",
        "numInstances": 1
    },
    {
        "_id": "64ff1aed869f7df2d1870ef4",
        "user": {
            "id": "64ff1aeb1c7f534d47595e29"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277565140948484104"
        },
        "commitId": "64ff1aedc3cbe69b66ea6d1d",
        "edit_ts": "2023-09-11T13:49:36.828Z",
        "numInstances": 1
    },
    {
        "_id": "64ff1aef869f7df2d1870ef5",
        "user": {
            "id": "64ff1aec1c7f534d47595e2a"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277565153833385985"
        },
        "commitId": "64ff1aefc3cbe69b66ea6e3b",
        "edit_ts": "2023-09-11T13:49:39.103Z",
        "numInstances": 1
    },
    {
        "_id": "64ff1e075fea2cf5e5f706c7",
        "user": {
            "id": "64ff1e05646e6bd48cbcc77b"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277568555447484420"
        },
        "commitId": "64ff1e07c3cbe69b66eacbbb",
        "edit_ts": "2023-09-11T14:02:51.391Z",
        "numInstances": 1
    },
    {
        "_id": "64ff1e0a646e6bd48cbcc781",
        "user": {
            "id": "64ff1e095fea2cf5e5f706c8"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277568568332386305"
        },
        "commitId": "64ff1e0ac3cbe69b66eacd1f",
        "edit_ts": "2023-09-11T14:02:54.097Z",
        "numInstances": 1
    },
    {
        "_id": "64ff1e0e646e6bd48cbcc784",
        "user": {
            "id": "64ff1e0c5fea2cf5e5f706cd"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277568581217288196"
        },
        "commitId": "64ff1e0ec3cbe69b66eacf09",
        "edit_ts": "2023-09-11T14:02:57.603Z",
        "numInstances": 1
    },
    {
        "_id": "64ff1e14646e6bd48cbcc789",
        "user": {
            "id": "64ff1e115fea2cf5e5f706d0"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277568611282059266"
        },
        "commitId": "64ff1e14c3cbe69b66ead17f",
        "edit_ts": "2023-09-11T14:03:04.215Z",
        "numInstances": 1
    },
    {
        "_id": "64ff1f30c2c7196af2139181",
        "user": {
            "id": "64ff1f2fc2c7196af2139180"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277569835347738626"
        },
        "commitId": "64ff1f30c3cbe69b66eaf637",
        "edit_ts": "2023-09-11T14:07:49.457Z",
        "numInstances": 1
    },
    {
        "_id": "64ff1f33c2c7196af2139185",
        "user": {
            "id": "64ff1f31c2c7196af2139184"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277569839642705922"
        },
        "commitId": "64ff1f33c3cbe69b66eaf754",
        "edit_ts": "2023-09-11T14:07:50.527Z",
        "numInstances": 1
    },
    {
        "_id": "64ff1f3542623684d817d1bc",
        "user": {
            "id": "64ff1f3242623684d817d1b8"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277569852527607810"
        },
        "commitId": "64ff1f35c3cbe69b66eaf870",
        "edit_ts": "2023-09-11T14:07:53.975Z",
        "numInstances": 1
    },
    {
        "_id": "64ff1f3742623684d817d1bd",
        "user": {
            "id": "64ff1f3442623684d817d1bb"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277569843937673220"
        },
        "commitId": "64ff1f37c3cbe69b66eaf981",
        "numInstances": 1
    },
    {
        "_id": "64ff202981f1896b00ce9096",
        "user": {
            "id": "64ff202781f1896b00ce9093"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277570900499628039"
        },
        "commitId": "64ff2029c3cbe69b66eb19c4",
        "edit_ts": "2023-09-11T14:11:57.703Z",
        "numInstances": 1
    },
    {
        "_id": "64ff202a6567eccbc0e44812",
        "user": {
            "id": "64ff202781f1896b00ce9092"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277570900499628035"
        },
        "commitId": "64ff202ac3cbe69b66eb1a26",
        "edit_ts": "2023-09-11T14:11:57.611Z",
        "numInstances": 1
    },
    {
        "_id": "64ff20326567eccbc0e44817",
        "user": {
            "id": "64ff202d6567eccbc0e44814"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277570934859366402"
        },
        "commitId": "64ff2032c3cbe69b66eb1d56",
        "edit_ts": "2023-09-11T14:12:05.974Z",
        "numInstances": 1
    },
    {
        "_id": "64ff203781f1896b00ce90a0",
        "user": {
            "id": "64ff203481f1896b00ce909f"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277570956334202881"
        },
        "commitId": "64ff2037c3cbe69b66eb1edd",
        "edit_ts": "2023-09-11T14:12:10.677Z",
        "numInstances": 1
    },
    {
        "_id": "64ff22587980255461027065",
        "user": {
            "id": "64ff22567980255461027063"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277573297091379206"
        },
        "commitId": "64ff2258c3cbe69b66eb65be",
        "edit_ts": "2023-09-11T14:21:15.966Z",
        "numInstances": 1
    },
    {
        "_id": "64ff22587980255461027066",
        "user": {
            "id": "64ff22577980255461027064"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277573301386346502"
        },
        "commitId": "64ff2258c3cbe69b66eb6629",
        "edit_ts": "2023-09-11T14:21:16.481Z",
        "numInstances": 1
    },
    {
        "_id": "64ff225b798025546102706a",
        "user": {
            "id": "64ff22584564dd962d640cdb"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277573309976281092"
        },
        "commitId": "64ff225bc3cbe69b66eb678f",
        "edit_ts": "2023-09-11T14:21:18.272Z",
        "numInstances": 1
    },
    {
        "_id": "64ff225c4564dd962d640cde",
        "user": {
            "id": "64ff22587980255461027067"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277573314271248385"
        },
        "commitId": "64ff225cc3cbe69b66eb681f",
        "edit_ts": "2023-09-11T14:21:19.588Z",
        "numInstances": 1
    },
    {
        "_id": "64ff2fae6a2cce925cce07e6",
        "user": {
            "id": "64b689a64b33656c637a88d3"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277624299828019206"
        },
        "commitId": "64ff471e6e4e458f48437538",
        "edit_ts": "2023-09-11T17:39:10.588Z",
        "licenses": [],
        "publishedTimestamp": "2023-09-11T17:09:26.480Z",
        "numInstances": 0
    },
    {
        "_id": "64ff3167729b90dc4cf10a31",
        "user": {
            "id": "64c017169217a4ad3ae60096"
        },
        "ancestors": [
            {
                "_id": "6024150c9d444a3377f6ea6a",
                "user": {
                    "id": "57262aba21ff75f505799cbf"
                }
            }
        ],
        "_ts": {
            "$timestamp": "7303638079221268481"
        },
        "permissionToShare": true,
        "licenses": [
            {
                "type": "product",
                "productId": "im-pilot"
            }
        ],
        "activityLicenses": [
            {
                "type": "product",
                "productId": "im-pilot"
            }
        ],
        "licenseAccess": "licensed",
        "commitId": "64ff3167c3cbe69b66ed3590",
        "edit_ts": "2023-09-11T15:26:51.498Z",
        "deleted": true,
        "numInstances": 0
    },
    {
        "_id": "64ff31ff729b90dc4cf10a36",
        "user": {
            "id": "64c02e6c432a3c3e7a246ca5"
        },
        "ancestors": [
            {
                "_id": "6024150c9d444a3377f6ea6a",
                "user": {
                    "id": "57262aba21ff75f505799cbf"
                }
            },
            {
                "_id": "64ff3167729b90dc4cf10a31",
                "user": {
                    "id": "64c017169217a4ad3ae60096"
                }
            }
        ],
        "_ts": {
            "$timestamp": "7277590524205203457"
        },
        "permissionToShare": true,
        "licenses": [
            {
                "type": "product",
                "productId": "im-pilot"
            }
        ],
        "activityLicenses": [
            {
                "type": "product",
                "productId": "im-pilot"
            }
        ],
        "licenseAccess": "licensed",
        "commitId": "64ff31ffc3cbe69b66ed49e1",
        "edit_ts": "2023-09-11T15:28:06.616Z",
        "numInstances": 0
    },
    {
        "_id": "64ff36b7afd6ed201f625590",
        "user": {
            "id": "64ff36b4afd6ed201f62558f"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277595699640795138"
        },
        "commitId": "64ff36b7c3cbe69b66edde52",
        "edit_ts": "2023-09-11T15:48:11.666Z",
        "numInstances": 1
    },
    {
        "_id": "64ff36b99a4af29fb0253355",
        "user": {
            "id": "64ff36b69a4af29fb0253354"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277595703935762436"
        },
        "commitId": "64ff36b9c3cbe69b66eddf16",
        "edit_ts": "2023-09-11T15:48:12.678Z",
        "numInstances": 1
    },
    {
        "_id": "64ff36ba9a4af29fb0253356",
        "user": {
            "id": "64ff36b9afd6ed201f625592"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277595708230729730"
        },
        "commitId": "64ff36bac3cbe69b66eddfec",
        "edit_ts": "2023-09-11T15:48:13.860Z",
        "numInstances": 1
    },
    {
        "_id": "64ff36c4afd6ed201f625599",
        "user": {
            "id": "64ff36c19a4af29fb025335f"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277595755475369985"
        },
        "commitId": "64ff36c4c3cbe69b66ede44e",
        "edit_ts": "2023-09-11T15:48:24.328Z",
        "numInstances": 1
    },
    {
        "_id": "64ff36d0ef047cfa0f62775c",
        "user": {
            "id": "64ff36ce2a49b3f6e8636de2"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277595789835108354"
        },
        "commitId": "64ff36d0c3cbe69b66ede993",
        "numInstances": 1
    },
    {
        "_id": "64ff36d0ef047cfa0f62775d",
        "user": {
            "id": "64ff36ceef047cfa0f627759"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277595807014977591"
        },
        "commitId": "64ff36d0c3cbe69b66ede9be",
        "edit_ts": "2023-09-11T15:48:36.872Z",
        "numInstances": 1
    },
    {
        "_id": "64ff36d4ef047cfa0f627761",
        "user": {
            "id": "64ff36d2ef047cfa0f627760"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277595824194846721"
        },
        "commitId": "64ff36d4c3cbe69b66edebac",
        "edit_ts": "2023-09-11T15:48:40.166Z",
        "numInstances": 1
    },
    {
        "_id": "64ff36d72a49b3f6e8636ded",
        "user": {
            "id": "64ff36d52a49b3f6e8636dea"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277595832784781316"
        },
        "commitId": "64ff36d7c3cbe69b66edede9",
        "edit_ts": "2023-09-11T15:48:42.612Z",
        "numInstances": 1
    },
    {
        "_id": "64ff3728c92bd1d3c99db126",
        "user": {
            "id": "64ff372726a460f7b27883aa"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277596180677132291"
        },
        "commitId": "64ff3728c3cbe69b66edfc15",
        "edit_ts": "2023-09-11T15:50:03.804Z",
        "numInstances": 1
    },
    {
        "_id": "64ff372c26a460f7b27883af",
        "user": {
            "id": "64ff372ac92bd1d3c99db127"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277596197857001473"
        },
        "commitId": "64ff372cc3cbe69b66edfd28",
        "edit_ts": "2023-09-11T15:50:07.139Z",
        "numInstances": 1
    },
    {
        "_id": "64ff372d26a460f7b27883b2",
        "user": {
            "id": "64ff372bc92bd1d3c99db128"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277596202151968770"
        },
        "commitId": "64ff372dc3cbe69b66edfe38",
        "edit_ts": "2023-09-11T15:50:08.401Z",
        "numInstances": 1
    },
    {
        "_id": "64ff3741c92bd1d3c99db12e",
        "user": {
            "id": "64ff373ec92bd1d3c99db12d"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277596292346281985"
        },
        "commitId": "64ff3741c3cbe69b66ee03aa",
        "edit_ts": "2023-09-11T15:50:29.021Z",
        "numInstances": 1
    },
    {
        "_id": "64ff37549a4af29fb0253362",
        "user": {
            "id": "64a8136cbd91179ef0dc5e3c"
        },
        "ancestors": [
            {
                "_id": "6024150c9d444a3377f6ea6a",
                "user": {
                    "id": "57262aba21ff75f505799cbf"
                }
            },
            {
                "_id": "64ff3167729b90dc4cf10a31",
                "user": {
                    "id": "64c017169217a4ad3ae60096"
                }
            }
        ],
        "_ts": {
            "$timestamp": "7277597993153331202"
        },
        "permissionToShare": true,
        "licenses": [
            {
                "type": "product",
                "productId": "im-pilot"
            }
        ],
        "activityLicenses": [
            {
                "type": "product",
                "productId": "im-pilot"
            }
        ],
        "licenseAccess": "licensed",
        "teamDesmosAuthored": true,
        "commitId": "64ff3754c3cbe69b66ee06e3",
        "edit_ts": "2023-09-11T15:57:05.793Z",
        "authorTags": [
            "desmos"
        ],
        "numInstances": 0
    },
    {
        "_id": "64ff39acfde0b5c2fc08482a",
        "user": {
            "id": "64ff39aafde0b5c2fc084829"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277598946636070915"
        },
        "commitId": "64ff39acc3cbe69b66ee5c76",
        "edit_ts": "2023-09-11T16:00:47.762Z",
        "numInstances": 1
    },
    {
        "_id": "64ff39ae1fd154b0598379a6",
        "user": {
            "id": "64ff39ab381df57f4b942971"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277598942341103617"
        },
        "commitId": "64ff39aec3cbe69b66ee5d8d",
        "numInstances": 1
    },
    {
        "_id": "64ff39ebfde0b5c2fc084831",
        "user": {
            "id": "64ff39e9381df57f4b942976"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277599221513977862"
        },
        "commitId": "64ff39ebc3cbe69b66ee68c3",
        "edit_ts": "2023-09-11T16:01:51.340Z",
        "numInstances": 1
    },
    {
        "_id": "64ff39ed1fd154b0598379ab",
        "user": {
            "id": "64ff39eb381df57f4b94297a"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277599230103912450"
        },
        "commitId": "64ff39edc3cbe69b66ee69f4",
        "edit_ts": "2023-09-11T16:01:53.075Z",
        "numInstances": 1
    },
    {
        "_id": "64ff39f28f93ff2ea8996cad",
        "user": {
            "id": "64ff39f01fd154b0598379ac"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277599242988814339"
        },
        "commitId": "64ff39f2c3cbe69b66ee6c62",
        "edit_ts": "2023-09-11T16:01:56.902Z",
        "numInstances": 1
    },
    {
        "_id": "64ff39f21fd154b0598379ad",
        "user": {
            "id": "64ff39ee381df57f4b94297b"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277599251578748932"
        },
        "commitId": "64ff39f2c3cbe69b66ee6c76",
        "edit_ts": "2023-09-11T16:01:58.956Z",
        "numInstances": 1
    },
    {
        "_id": "64ff3a211a281d061c44ed31",
        "user": {
            "id": "64ff3a1fa6effd814a581c48"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277599453442211841"
        },
        "commitId": "64ff3a22c3cbe69b66ee78ae",
        "edit_ts": "2023-09-11T16:02:45.376Z",
        "numInstances": 1
    },
    {
        "_id": "64ff3a221a281d061c44ed32",
        "user": {
            "id": "64ff3a20a6effd814a581c49"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277599457737179137"
        },
        "commitId": "64ff3a22c3cbe69b66ee78f6",
        "edit_ts": "2023-09-11T16:02:46.002Z",
        "numInstances": 1
    },
    {
        "_id": "64ff3a251a281d061c44ed33",
        "user": {
            "id": "64ff3a2238a046a147460168"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277599470622081027"
        },
        "commitId": "64ff3a25c3cbe69b66ee7a35",
        "edit_ts": "2023-09-11T16:02:49.352Z",
        "numInstances": 1
    },
    {
        "_id": "64ff3a60a6effd814a581c56",
        "user": {
            "id": "64ff3a5ea6effd814a581c54"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277599719730184194"
        },
        "commitId": "64ff3a60c3cbe69b66ee8590",
        "edit_ts": "2023-09-11T16:03:47.641Z",
        "numInstances": 1
    },
    {
        "_id": "64ff3a6138a046a14746016c",
        "user": {
            "id": "64ff3a5fa6effd814a581c55"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277599724025151490"
        },
        "commitId": "64ff3a61c3cbe69b66ee8626",
        "edit_ts": "2023-09-11T16:03:48.338Z",
        "numInstances": 0
    },
    {
        "_id": "64ff3a6638a046a14746016e",
        "user": {
            "id": "64ff3a6438a046a14746016d"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277599745499987975"
        },
        "commitId": "64ff3a66c3cbe69b66ee888f",
        "edit_ts": "2023-09-11T16:03:53.681Z",
        "numInstances": 1
    },
    {
        "_id": "64ff3a6c1a281d061c44ed3b",
        "user": {
            "id": "64ff3a69397bf56061df5e88"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277599771269791745"
        },
        "commitId": "64ff3a6cc3cbe69b66ee8b1c",
        "edit_ts": "2023-09-11T16:03:59.795Z",
        "numInstances": 1
    },
    {
        "_id": "64ff3a7f1a281d061c44ed3e",
        "user": {
            "id": "64ff3a7d38a046a147460174"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277599852874170370"
        },
        "commitId": "64ff3a7fc3cbe69b66ee8fc1",
        "edit_ts": "2023-09-11T16:04:18.629Z",
        "numInstances": 1
    },
    {
        "_id": "64ff3c18ac8460878b045716",
        "user": {
            "id": "64ff3c166a78bbe520d436bb"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277601618105729028"
        },
        "commitId": "64ff3c19c3cbe69b66eec1f9",
        "edit_ts": "2023-09-11T16:11:09.223Z",
        "numInstances": 1
    },
    {
        "_id": "64ff3c196a78bbe520d436bc",
        "user": {
            "id": "64ff3c16ac8460878b045713"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277601613810761729"
        },
        "commitId": "64ff3c19c3cbe69b66eec249",
        "edit_ts": "2023-09-11T16:11:08.395Z",
        "numInstances": 1
    },
    {
        "_id": "64ff3c1dac8460878b04571c",
        "user": {
            "id": "64ff3c19ac8460878b045717"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277601635285598211"
        },
        "commitId": "64ff3c1dc3cbe69b66eec3c6",
        "edit_ts": "2023-09-11T16:11:13.159Z",
        "numInstances": 1
    },
    {
        "_id": "64ff3c29ac8460878b045725",
        "user": {
            "id": "64ff3c256a78bbe520d436c0"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277601686825205762"
        },
        "commitId": "64ff3c29c3cbe69b66eec8cf",
        "edit_ts": "2023-09-11T16:11:25.517Z",
        "numInstances": 1
    },
    {
        "_id": "64ff3ed7f2420a1b23548e1d",
        "user": {
            "id": "64ff3ed55a3277e82ab7b4fc"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277604637467738114"
        },
        "commitId": "64ff3ed7c3cbe69b66ef1a6c",
        "edit_ts": "2023-09-11T16:22:52.231Z",
        "numInstances": 1
    },
    {
        "_id": "64ff3f0df2420a1b23548e21",
        "user": {
            "id": "64ff3f0cf2420a1b23548e20"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277604847921135619"
        },
        "commitId": "64ff3f0dc3cbe69b66ef2362",
        "numInstances": 1
    },
    {
        "_id": "64ff3f17017a4e0a36f3cc87",
        "user": {
            "id": "64ff3f14ea977c9027644644"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277604903755710486"
        },
        "commitId": "64ff3f17c3cbe69b66ef274a",
        "edit_ts": "2023-09-11T16:23:54.841Z",
        "numInstances": 1
    },
    {
        "_id": "64ff3f1a017a4e0a36f3cc88",
        "user": {
            "id": "64ff3f18f2420a1b23548e22"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277604920935579654"
        },
        "commitId": "64ff3f1ac3cbe69b66ef28a7",
        "edit_ts": "2023-09-11T16:23:58.174Z",
        "numInstances": 1
    },
    {
        "_id": "64ff3f1d5a3277e82ab7b504",
        "user": {
            "id": "64ff3f1af2420a1b23548e23"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277604929525514248"
        },
        "commitId": "64ff3f1dc3cbe69b66ef2a17",
        "edit_ts": "2023-09-11T16:24:00.575Z",
        "numInstances": 1
    },
    {
        "_id": "64ff417e9235cdc2628d69e8",
        "user": {
            "id": "64ff417b81be4869535f88a5"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277607549455564808"
        },
        "commitId": "64ff417ec3cbe69b66ef74e1",
        "edit_ts": "2023-09-11T16:34:10.716Z",
        "numInstances": 1
    },
    {
        "_id": "64ff418081be4869535f88a9",
        "user": {
            "id": "64ff417e81be4869535f88a6"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277607558045499393"
        },
        "commitId": "64ff4180c3cbe69b66ef761c",
        "edit_ts": "2023-09-11T16:34:12.140Z",
        "numInstances": 1
    },
    {
        "_id": "64ff418281be4869535f88aa",
        "user": {
            "id": "64ff417f9235cdc2628d69e9"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277607562340466699"
        },
        "commitId": "64ff4182c3cbe69b66ef768d",
        "edit_ts": "2023-09-11T16:34:13.686Z",
        "numInstances": 1
    },
    {
        "_id": "64ff41839235cdc2628d69ed",
        "user": {
            "id": "64ff41819235cdc2628d69ea"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277607570930401281"
        },
        "commitId": "64ff4183c3cbe69b66ef773f",
        "edit_ts": "2023-09-11T16:34:15.286Z",
        "numInstances": 1
    },
    {
        "_id": "64ff43ac6e4e458f48437501",
        "user": {
            "id": "64ff43a96e4e458f484374ff"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277609941752348673"
        },
        "commitId": "64ff43acc3cbe69b66efbbf3",
        "edit_ts": "2023-09-11T16:43:27.942Z",
        "numInstances": 1
    },
    {
        "_id": "64ff43ae6e4e458f48437502",
        "user": {
            "id": "64ff43aa6e4e458f48437500"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277609954637250561"
        },
        "commitId": "64ff43aec3cbe69b66efbcc8",
        "edit_ts": "2023-09-11T16:43:30.273Z",
        "numInstances": 1
    },
    {
        "_id": "64ff43e36e4e458f48437512",
        "user": {
            "id": "64ff43e16e4e458f48437511"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277610173680582664"
        },
        "commitId": "64ff43e3c3cbe69b66efc707",
        "edit_ts": "2023-09-11T16:44:21.608Z",
        "numInstances": 1
    },
    {
        "_id": "64ff43e66e4e458f4843751a",
        "user": {
            "id": "64ff43e46e4e458f48437514"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277610190860451846"
        },
        "commitId": "64ff43e6c3cbe69b66efc926",
        "edit_ts": "2023-09-11T16:44:25.868Z",
        "numInstances": 1
    },
    {
        "_id": "64ff43eb6e4e458f48437522",
        "user": {
            "id": "64ff43e96e4e458f48437521"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277610216630255618"
        },
        "commitId": "64ff43ebc3cbe69b66efcbc5",
        "edit_ts": "2023-09-11T16:44:31.205Z",
        "numInstances": 1
    },
    {
        "_id": "64ff43ee6e4e458f48437528",
        "user": {
            "id": "64ff43ec6e4e458f48437525"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277610229515157510"
        },
        "commitId": "64ff43eec3cbe69b66efcd1e",
        "edit_ts": "2023-09-11T16:44:34.745Z",
        "numInstances": 1
    },
    {
        "_id": "64ff46fea55cf7cf8acb2f96",
        "user": {
            "id": "64ff46fb4063dabedd4d9b9e"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277613592474550281"
        },
        "commitId": "64ff46fec3cbe69b66f02eae",
        "edit_ts": "2023-09-11T16:57:37.855Z",
        "numInstances": 1
    },
    {
        "_id": "64ff46fe4063dabedd4d9ba0",
        "user": {
            "id": "64ff46fba55cf7cf8acb2f95"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277613596769517570"
        },
        "commitId": "64ff46fec3cbe69b66f02ede",
        "edit_ts": "2023-09-11T16:57:38.106Z",
        "numInstances": 1
    },
    {
        "_id": "64ff4701a55cf7cf8acb2f9a",
        "user": {
            "id": "64ff46ffa55cf7cf8acb2f97"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277613605359452168"
        },
        "commitId": "64ff4701c3cbe69b66f03048",
        "edit_ts": "2023-09-11T16:57:40.294Z",
        "numInstances": 1
    },
    {
        "_id": "64ff47014063dabedd4d9ba3",
        "user": {
            "id": "64ff46fd4063dabedd4d9b9f"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277613609654419457"
        },
        "commitId": "64ff4701c3cbe69b66f0306a",
        "edit_ts": "2023-09-11T16:57:41.560Z",
        "numInstances": 1
    },
    {
        "_id": "64ff492d255d4ca291f4b3b4",
        "user": {
            "id": "64ff492b786a3e096bf38531"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277615997656236038"
        },
        "commitId": "64ff492dc3cbe69b66f08098",
        "edit_ts": "2023-09-11T17:06:57.896Z",
        "numInstances": 1
    },
    {
        "_id": "64ff492eba2f88ce694dd0a7",
        "user": {
            "id": "64ff492c11925ac6b7f0b9fd"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277615997656236034"
        },
        "commitId": "64ff492ec3cbe69b66f080df",
        "edit_ts": "2023-09-11T17:06:57.763Z",
        "numInstances": 1
    },
    {
        "_id": "64ff4965ba2f88ce694dd0ab",
        "user": {
            "id": "64ff4963ba2f88ce694dd0aa"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277616220994535426"
        },
        "commitId": "64ff4965c3cbe69b66f08ac4",
        "numInstances": 1
    },
    {
        "_id": "64ff496e786a3e096bf38537",
        "user": {
            "id": "64ff496b255d4ca291f4b3b9"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277616272534142978"
        },
        "commitId": "64ff496ec3cbe69b66f08e0b",
        "edit_ts": "2023-09-11T17:08:01.660Z",
        "numInstances": 1
    },
    {
        "_id": "64ff4970786a3e096bf38538",
        "user": {
            "id": "64ff496d11925ac6b7f0ba09"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277616285419044874"
        },
        "commitId": "64ff4970c3cbe69b66f08f75",
        "edit_ts": "2023-09-11T17:08:04.631Z",
        "numInstances": 1
    },
    {
        "_id": "64ff497011925ac6b7f0ba0a",
        "user": {
            "id": "64ff496e255d4ca291f4b3ba"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277616285419044866"
        },
        "commitId": "64ff4970c3cbe69b66f08f99",
        "edit_ts": "2023-09-11T17:08:04.159Z",
        "numInstances": 1
    },
    {
        "_id": "64ff4dc51dfba90bb64cfc53",
        "user": {
            "id": "64ff4dc31dfba90bb64cfc50"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277621048537776132"
        },
        "commitId": "64ff4dc5c3cbe69b66f11705",
        "edit_ts": "2023-09-11T17:26:33.597Z",
        "numInstances": 1
    },
    {
        "_id": "64ff4dc75e0aec372c2ae220",
        "user": {
            "id": "64ff4dc41dfba90bb64cfc51"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277621052832743427"
        },
        "commitId": "64ff4dc7c3cbe69b66f117a9",
        "edit_ts": "2023-09-11T17:26:34.919Z",
        "numInstances": 1
    },
    {
        "_id": "64ff4dc81dfba90bb64cfc55",
        "user": {
            "id": "64ff4dc51dfba90bb64cfc52"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277621057127710722"
        },
        "commitId": "64ff4dc8c3cbe69b66f1186a",
        "edit_ts": "2023-09-11T17:26:35.600Z",
        "numInstances": 1
    },
    {
        "_id": "64ff4dc91dfba90bb64cfc58",
        "user": {
            "id": "64ff4dc71dfba90bb64cfc54"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277621065717645320"
        },
        "commitId": "64ff4dc9c3cbe69b66f11958",
        "edit_ts": "2023-09-11T17:26:37.788Z",
        "numInstances": 1
    },
    {
        "_id": "64ff4e7d5cbd1bfd27345e49",
        "user": {
            "id": "61f1bcc143ba5274680cfce3"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277622667740446724"
        },
        "teamDesmosAuthored": true,
        "commitId": "64ff4e7e5cbd1bfd27345e4b",
        "edit_ts": "2023-09-11T17:32:50.176Z",
        "licenses": [],
        "publishedTimestamp": "2023-09-11T17:32:50.176Z",
        "numInstances": 0
    },
    {
        "_id": "64ff507a7f43d2c8fb666b8c",
        "user": {
            "id": "64ff50787f43d2c8fb666b8b"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277624024950112257"
        },
        "commitId": "64ff507ac3cbe69b66f17f82",
        "edit_ts": "2023-09-11T17:38:06.175Z",
        "numInstances": 1
    },
    {
        "_id": "64ff50b77f43d2c8fb666b8f",
        "user": {
            "id": "64ff50b57f43d2c8fb666b8d"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277624286943117318"
        },
        "commitId": "64ff50b7c3cbe69b66f18ac2",
        "edit_ts": "2023-09-11T17:39:07.710Z",
        "numInstances": 1
    },
    {
        "_id": "64ff50b84e8f347a2833dd7e",
        "user": {
            "id": "64ff50b64e8f347a2833dd7d"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277624291238084609"
        },
        "commitId": "64ff50b8c3cbe69b66f18b24",
        "edit_ts": "2023-09-11T17:39:08.211Z",
        "numInstances": 1
    },
    {
        "_id": "64ff50b9c72bfc7ab9988bf5",
        "user": {
            "id": "64ff50b67f43d2c8fb666b8e"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277624291238084612"
        },
        "commitId": "64ff50b9c3cbe69b66f18b87",
        "edit_ts": "2023-09-11T17:39:08.781Z",
        "numInstances": 1
    },
    {
        "_id": "64ff50c14e8f347a2833dd81",
        "user": {
            "id": "64ff50be7f43d2c8fb666b90"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277624329892790274"
        },
        "commitId": "64ff50c1c3cbe69b66f18fde",
        "edit_ts": "2023-09-11T17:39:17.134Z",
        "numInstances": 1
    },
    {
        "_id": "64ff520bbe68cb03a4fbde9e",
        "user": {
            "id": "64ff5208be68cb03a4fbde9c"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277625747231997953"
        },
        "commitId": "64ff520bc3cbe69b66f1bdd9",
        "edit_ts": "2023-09-11T17:44:47.209Z",
        "numInstances": 1
    },
    {
        "_id": "64ff520cbe68cb03a4fbde9f",
        "user": {
            "id": "64ff5209afa3e272605e06cd"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277625742937030657"
        },
        "commitId": "64ff520cc3cbe69b66f1be56",
        "edit_ts": "2023-09-11T17:44:46.574Z",
        "numInstances": 1
    },
    {
        "_id": "64ff520cafa3e272605e06d0",
        "user": {
            "id": "64ff520abe68cb03a4fbde9d"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277625751526965255"
        },
        "commitId": "64ff520cc3cbe69b66f1be9b",
        "edit_ts": "2023-09-11T17:44:48.477Z",
        "numInstances": 1
    },
    {
        "_id": "64ff5212afa3e272605e06db",
        "user": {
            "id": "64ff520fbe68cb03a4fbdea0"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277625773001801731"
        },
        "commitId": "64ff5212c3cbe69b66f1c17b",
        "edit_ts": "2023-09-11T17:44:53.411Z",
        "numInstances": 1
    },
    {
        "_id": "64ff52af23ebcf0143575f5d",
        "user": {
            "id": "64ff52ad2d812e5072df7b51"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277626447311667211"
        },
        "commitId": "64ff52afc3cbe69b66f1d8c5",
        "edit_ts": "2023-09-11T17:47:30.975Z",
        "numInstances": 1
    },
    {
        "_id": "64ff52b22d812e5072df7b57",
        "user": {
            "id": "64ff52b02d812e5072df7b52"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277626468786503684"
        },
        "commitId": "64ff52b2c3cbe69b66f1da6d",
        "edit_ts": "2023-09-11T17:47:35.919Z",
        "numInstances": 1
    },
    {
        "_id": "64ff52b42d812e5072df7b5a",
        "user": {
            "id": "64ff52b123ebcf0143575f5e"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277626473081470977"
        },
        "commitId": "64ff52b4c3cbe69b66f1db8a",
        "edit_ts": "2023-09-11T17:47:36.464Z",
        "numInstances": 1
    },
    {
        "_id": "64ff52b823ebcf0143575f64",
        "user": {
            "id": "64ff52b523ebcf0143575f61"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277626485966372866"
        },
        "commitId": "64ff52b8c3cbe69b66f1dd22",
        "edit_ts": "2023-09-11T17:47:39.808Z",
        "numInstances": 1
    },
    {
        "_id": "64ff549a5ad220a939140843",
        "user": {
            "id": "64a811c6bd91179ef0dc5e37"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7334759193204752386"
        },
        "teamDesmosAuthored": true,
        "commitId": "65aadb3f322e64fe5329f9d3",
        "edit_ts": "2024-02-12T16:51:44.279Z",
        "licenses": [],
        "publishedTimestamp": "2024-01-19T20:30:45.080Z",
        "editionId": "64ff526cc3cbe69b66f1cf61",
        "numInstances": 0
    },
    {
        "_id": "64ff54a836dc63af93de3204",
        "user": {
            "id": "64ff54a570974a66b9dafae2"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277628620565118977"
        },
        "commitId": "64ff54a8c3cbe69b66f21e77",
        "edit_ts": "2023-09-11T17:55:56.239Z",
        "numInstances": 1
    },
    {
        "_id": "64ff54ad70974a66b9dafae5",
        "user": {
            "id": "64ff54ab36e01d1afc1ff185"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277628642039955457"
        },
        "commitId": "64ff54adc3cbe69b66f22066",
        "edit_ts": "2023-09-11T17:56:01.165Z",
        "numInstances": 1
    },
    {
        "_id": "64ff54e436e01d1afc1ff18b",
        "user": {
            "id": "64ff54e270974a66b9dafae9"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277628861083287555"
        },
        "commitId": "64ff54e4c3cbe69b66f22ce9",
        "numInstances": 1
    },
    {
        "_id": "64ff54e746a8877c3fed6922",
        "user": {
            "id": "64ff54e336e01d1afc1ff18a"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277628891148058632"
        },
        "commitId": "64ff54e7c3cbe69b66f22e41",
        "edit_ts": "2023-09-11T17:56:59.769Z",
        "numInstances": 1
    },
    {
        "_id": "64ff54eb36dc63af93de320f",
        "user": {
            "id": "64ff54e836dc63af93de320c"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277628908327927815"
        },
        "commitId": "64ff54ebc3cbe69b66f22fee",
        "edit_ts": "2023-09-11T17:57:03.755Z",
        "numInstances": 1
    },
    {
        "_id": "64ff54ee70974a66b9dafaec",
        "user": {
            "id": "64ff54ec46a8877c3fed6923"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277628921212829701"
        },
        "commitId": "64ff54eec3cbe69b66f231e3",
        "edit_ts": "2023-09-11T17:57:06.698Z",
        "numInstances": 1
    },
    {
        "_id": "64ff55581e9c31b9627a4eaf",
        "user": {
            "id": "64ff5554cde3fa618f405ede"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277629376479363074"
        },
        "commitId": "64ff5558c3cbe69b66f241c8",
        "edit_ts": "2023-09-11T17:58:52.514Z",
        "numInstances": 1
    },
    {
        "_id": "64ff5591a657c4c69411e6ca",
        "user": {
            "id": "64ff558fad05b8522c0484bb"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277629616997531649"
        },
        "commitId": "64ff5591c3cbe69b66f24ac6",
        "edit_ts": "2023-09-11T17:59:48.045Z",
        "numInstances": 1
    },
    {
        "_id": "64ff55981e9c31b9627a4eb8",
        "user": {
            "id": "64ff5597a657c4c69411e6cb"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277629651357270018"
        },
        "commitId": "64ff5598c3cbe69b66f24dba",
        "edit_ts": "2023-09-11T17:59:56.035Z",
        "numInstances": 1
    },
    {
        "_id": "64ff559a1e9c31b9627a4ebb",
        "user": {
            "id": "64ff5598a657c4c69411e6cc"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277629659947204611"
        },
        "commitId": "64ff559bc3cbe69b66f24f05",
        "edit_ts": "2023-09-11T17:59:58.315Z",
        "numInstances": 1
    },
    {
        "_id": "64ff55a0a657c4c69411e6cd",
        "user": {
            "id": "64ff559dad05b8522c0484bc"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277629681422041090"
        },
        "commitId": "64ff55a0c3cbe69b66f25177",
        "edit_ts": "2023-09-11T18:00:03.048Z",
        "numInstances": 1
    },
    {
        "_id": "64ff5759520b4e5876de9883",
        "user": {
            "id": "64ff5758520b4e5876de9881"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277631579797585921"
        },
        "commitId": "64ff5759c3cbe69b66f290c1",
        "edit_ts": "2023-09-11T18:07:25.203Z",
        "numInstances": 1
    },
    {
        "_id": "64ff575c520b4e5876de9884",
        "user": {
            "id": "64ff5759520b4e5876de9882"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277631592682487811"
        },
        "commitId": "64ff575cc3cbe69b66f2918c",
        "edit_ts": "2023-09-11T18:07:28.524Z",
        "numInstances": 1
    },
    {
        "_id": "64ff575f520b4e5876de9887",
        "user": {
            "id": "64ff575c93f4b5d295813a5d"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277631605567389703"
        },
        "commitId": "64ff575fc3cbe69b66f292f6",
        "edit_ts": "2023-09-11T18:07:31.925Z",
        "numInstances": 1
    },
    {
        "_id": "64ff577693f4b5d295813a65",
        "user": {
            "id": "64ff577393f4b5d295813a64"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277631700056670211"
        },
        "commitId": "64ff5776c3cbe69b66f2995d",
        "edit_ts": "2023-09-11T18:07:53.876Z",
        "numInstances": 1
    },
    {
        "_id": "64ff57b1c3cbe69b66f2a19d",
        "editionId": "64ff5725c3cbe69b66f288c5",
        "parentActivityMetaId": "64ff549a5ad220a939140843",
        "_ts": {
            "$timestamp": "7351847772858875906"
        },
        "commitId": "6565061f07a4c234ad065a67",
        "edit_ts": "2024-03-29T18:04:09.508Z",
        "licenses": [],
        "permissionToShare": true,
        "publishedTimestamp": "2023-11-27T21:12:21.556Z",
        "rootActivityMetaId": "64ff549a5ad220a939140843",
        "teamDesmosAuthored": true,
        "user": {
            "id": "64a811c6bd91179ef0dc5e37"
        },
        "numInstances": 0
    },
    {
        "_id": "64ff5941134e228ffd08dd31",
        "user": {
            "id": "64ff5940134e228ffd08dd30"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277633675741626369"
        },
        "commitId": "64ff5941c3cbe69b66f2d5d4",
        "edit_ts": "2023-09-11T18:15:33.303Z",
        "numInstances": 1
    },
    {
        "_id": "64ff5945134e228ffd08dd35",
        "user": {
            "id": "64ff5942134e228ffd08dd32"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277633688626528260"
        },
        "commitId": "64ff5945c3cbe69b66f2d7df",
        "edit_ts": "2023-09-11T18:15:36.694Z",
        "numInstances": 1
    },
    {
        "_id": "64ff59450cb6519653f974d6",
        "user": {
            "id": "64ff59420cb6519653f974d4"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277633692921495553"
        },
        "commitId": "64ff5945c3cbe69b66f2d810",
        "edit_ts": "2023-09-11T18:15:37.539Z",
        "numInstances": 1
    },
    {
        "_id": "64ff59470cb6519653f974d9",
        "user": {
            "id": "64ff59430cb6519653f974d5"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277633697216462854"
        },
        "commitId": "64ff5947c3cbe69b66f2d989",
        "edit_ts": "2023-09-11T18:15:38.831Z",
        "numInstances": 1
    },
    {
        "_id": "64ff594a966ece909691a35d",
        "user": {
            "id": "64ff594883a5d845752baf75"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277633705806397445"
        },
        "commitId": "64ff594ac3cbe69b66f2daf1",
        "edit_ts": "2023-09-11T18:15:40.666Z",
        "numInstances": 1
    },
    {
        "_id": "64ff59781b87f4ea47061ac7",
        "user": {
            "id": "64ff5976966ece909691a35f"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277633894784958473"
        },
        "commitId": "64ff5978c3cbe69b66f2e6da",
        "numInstances": 1
    },
    {
        "_id": "64ff597e966ece909691a367",
        "user": {
            "id": "64ff597b1b87f4ea47061ac8"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277633933439664137"
        },
        "commitId": "64ff597ec3cbe69b66f2e962",
        "edit_ts": "2023-09-11T18:16:33.744Z",
        "numInstances": 1
    },
    {
        "_id": "64ff598183a5d845752baf7e",
        "user": {
            "id": "64ff597e1b87f4ea47061ac9"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277633946324566057"
        },
        "commitId": "64ff5981c3cbe69b66f2eaa8",
        "edit_ts": "2023-09-11T18:16:36.878Z",
        "numInstances": 1
    },
    {
        "_id": "64ff59821b87f4ea47061acc",
        "user": {
            "id": "64ff5981966ece909691a368"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277633954914500609"
        },
        "commitId": "64ff5982c3cbe69b66f2eb79",
        "edit_ts": "2023-09-11T18:16:38.124Z",
        "numInstances": 1
    },
    {
        "_id": "64ff59ee134e228ffd08dd42",
        "user": {
            "id": "6400ddd8dfbdd9d2762dc515"
        },
        "ancestors": [
            {
                "_id": "64d6bb6fb57f1beb4d10acf2",
                "user": {
                    "id": "6400ddd8dfbdd9d2762dc515"
                }
            },
            {
                "_id": "64f219aab57f1beb4d10ad13",
                "user": {
                    "id": "643d92b7793f5d9028f215dd"
                }
            },
            {
                "_id": "64f784277d38e0fd5b935a1f",
                "user": {
                    "id": "643d92b7793f5d9028f215dd"
                }
            },
            {
                "_id": "64f78794c15e36dd6fed7516",
                "user": {
                    "id": "643d92b7793f5d9028f215dd"
                }
            },
            {
                "_id": "64f8daf3b89738a5e8344275",
                "user": {
                    "id": "645d4a2203b2c8c5c2496387"
                }
            }
        ],
        "_ts": {
            "$timestamp": "7283924862232428545"
        },
        "permissionToShare": true,
        "licenses": [],
        "teamDesmosAuthored": true,
        "commitId": "650b5acb150827e550652294",
        "edit_ts": "2023-09-28T17:08:34.929Z",
        "publishedTimestamp": "2023-09-20T20:49:18.915Z",
        "numInstances": 1
    },
    {
        "_id": "64ff5a4e134e228ffd08dd45",
        "user": {
            "id": "6400ddd8dfbdd9d2762dc515"
        },
        "ancestors": [
            {
                "_id": "64d6bb6fb57f1beb4d10acf2",
                "user": {
                    "id": "6400ddd8dfbdd9d2762dc515"
                }
            },
            {
                "_id": "64f219aab57f1beb4d10ad13",
                "user": {
                    "id": "643d92b7793f5d9028f215dd"
                }
            },
            {
                "_id": "64f784277d38e0fd5b935a1f",
                "user": {
                    "id": "643d92b7793f5d9028f215dd"
                }
            },
            {
                "_id": "64f78794c15e36dd6fed7516",
                "user": {
                    "id": "643d92b7793f5d9028f215dd"
                }
            },
            {
                "_id": "64f8daf3b89738a5e8344275",
                "user": {
                    "id": "645d4a2203b2c8c5c2496387"
                }
            }
        ],
        "_ts": {
            "$timestamp": "7277634874037501954"
        },
        "permissionToShare": true,
        "licenses": [],
        "teamDesmosAuthored": true,
        "commitId": "64ff5a4ec3cbe69b66f30a9c",
        "edit_ts": "2023-09-11T18:20:12.613Z",
        "numInstances": 0
    },
    {
        "_id": "64ff5d133f3eea1db5df98c6",
        "user": {
            "id": "64ff5d1129865e84f2ad0be1"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277637871924674561"
        },
        "commitId": "64ff5d13c3cbe69b66f35e68",
        "edit_ts": "2023-09-11T18:31:50.817Z",
        "numInstances": 1
    },
    {
        "_id": "64ff5d4e3f3eea1db5df98cc",
        "user": {
            "id": "64ff5d4cca02f11c3f9e4531"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277638129622712322"
        },
        "commitId": "64ff5d4ec3cbe69b66f3697e",
        "edit_ts": "2023-09-11T18:32:50.021Z",
        "numInstances": 1
    },
    {
        "_id": "64ff5d4f29865e84f2ad0be4",
        "user": {
            "id": "64ff5d4d338635d2e7f618a2"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277638129622712326"
        },
        "commitId": "64ff5d4fc3cbe69b66f369f2",
        "edit_ts": "2023-09-11T18:32:50.207Z",
        "numInstances": 1
    },
    {
        "_id": "64ff5d51338635d2e7f618a3",
        "user": {
            "id": "64ff5d4fca02f11c3f9e4532"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277638133917679628"
        },
        "commitId": "64ff5d51c3cbe69b66f36b3d",
        "edit_ts": "2023-09-11T18:32:51.887Z",
        "numInstances": 1
    },
    {
        "_id": "64ff5d583f3eea1db5df98d0",
        "user": {
            "id": "64ff5d553f3eea1db5df98cf"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277638172572385282"
        },
        "commitId": "64ff5d58c3cbe69b66f36eb1",
        "edit_ts": "2023-09-11T18:33:00.926Z",
        "numInstances": 1
    },
    {
        "_id": "64ff5dcf49e03901a023de77",
        "user": {
            "id": "64ff5dce49e03901a023de74"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277638679378526209"
        },
        "commitId": "64ff5dcfc3cbe69b66f380a1",
        "edit_ts": "2023-09-11T18:34:58.424Z",
        "numInstances": 1
    },
    {
        "_id": "64ff5dd346b3b9d9605d2a6e",
        "user": {
            "id": "64ff5dd149e03901a023de7d"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277638692263428099"
        },
        "commitId": "64ff5dd3c3cbe69b66f38281",
        "edit_ts": "2023-09-11T18:35:01.558Z",
        "numInstances": 1
    },
    {
        "_id": "64ff5dd746b3b9d9605d2a73",
        "user": {
            "id": "64ff5dd549e03901a023de80"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277638713738264578"
        },
        "commitId": "64ff5dd7c3cbe69b66f38530",
        "edit_ts": "2023-09-11T18:35:06.375Z",
        "numInstances": 1
    },
    {
        "_id": "64ff5ddd46b3b9d9605d2a77",
        "user": {
            "id": "64ff5dda46b3b9d9605d2a76"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277638739508068354"
        },
        "commitId": "64ff5dddc3cbe69b66f387b8",
        "edit_ts": "2023-09-11T18:35:12.977Z",
        "numInstances": 1
    },
    {
        "_id": "64ff5ef94dfa999d37f160cb",
        "user": {
            "id": "64ff5ef6ba3b19097364224d"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277639963573747714"
        },
        "commitId": "64ff5ef9c3cbe69b66f3accf",
        "edit_ts": "2023-09-11T18:39:57.191Z",
        "numInstances": 1
    },
    {
        "_id": "64ff5efd4dfa999d37f160ce",
        "user": {
            "id": "64ff5efbba3b190973642252"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277639980753616903"
        },
        "commitId": "64ff5efdc3cbe69b66f3ae9d",
        "edit_ts": "2023-09-11T18:40:01.633Z",
        "numInstances": 1
    },
    {
        "_id": "64ff5eff4dfa999d37f160d3",
        "user": {
            "id": "64ff5efb4dfa999d37f160cc"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277639989343551489"
        },
        "commitId": "64ff5effc3cbe69b66f3b009",
        "edit_ts": "2023-09-11T18:40:03.543Z",
        "numInstances": 1
    },
    {
        "_id": "64ff5effba3b190973642253",
        "user": {
            "id": "64ff5efc4dfa999d37f160cd"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277640019408322561"
        },
        "commitId": "64ff5effc3cbe69b66f3b033",
        "edit_ts": "2023-09-11T18:40:10.074Z",
        "numInstances": 1
    },
    {
        "_id": "64ff60494751adcf81706e41",
        "user": {
            "id": "64ff6047e62241e0a074b373"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277641406682759169"
        },
        "commitId": "64ff6049c3cbe69b66f3dd55",
        "edit_ts": "2023-09-11T18:45:33.121Z",
        "numInstances": 1
    },
    {
        "_id": "64ff604ae62241e0a074b376",
        "user": {
            "id": "64ff60474751adcf81706e40"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277641406682759177"
        },
        "commitId": "64ff604ac3cbe69b66f3ddb3",
        "edit_ts": "2023-09-11T18:45:33.341Z",
        "numInstances": 1
    },
    {
        "_id": "64ff6050e62241e0a074b37f",
        "user": {
            "id": "64ff604ce62241e0a074b37a"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277641432452562945"
        },
        "commitId": "64ff6050c3cbe69b66f3e0cf",
        "edit_ts": "2023-09-11T18:45:39.892Z",
        "numInstances": 1
    },
    {
        "_id": "64ff6052e62241e0a074b380",
        "user": {
            "id": "64ff60504751adcf81706e46"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277641445337464833"
        },
        "commitId": "64ff6052c3cbe69b66f3e200",
        "edit_ts": "2023-09-11T18:45:42.817Z",
        "numInstances": 1
    },
    {
        "_id": "64ff60c1d087e30f6f564e93",
        "user": {
            "id": "64ff60bd39dac499a1af9991"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277641922078834689"
        },
        "commitId": "64ff60c1c3cbe69b66f3f2e0",
        "edit_ts": "2023-09-11T18:47:33.671Z",
        "numInstances": 1
    },
    {
        "_id": "64ff60fa6317c60fcab8707e",
        "user": {
            "id": "64ff60f8c351153fb118e02d"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277642162597003266"
        },
        "commitId": "64ff60fac3cbe69b66f3fd24",
        "edit_ts": "2023-09-11T18:48:29.442Z",
        "numInstances": 1
    },
    {
        "_id": "64ff60fed087e30f6f564e99",
        "user": {
            "id": "64ff60fcc351153fb118e032"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277642184071839746"
        },
        "commitId": "64ff60fec3cbe69b66f3fef3",
        "edit_ts": "2023-09-11T18:48:34.543Z",
        "numInstances": 1
    },
    {
        "_id": "64ff60fed087e30f6f564e9a",
        "user": {
            "id": "64ff60fc6317c60fcab8707f"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277642184071839753"
        },
        "commitId": "64ff60fec3cbe69b66f3ff6a",
        "edit_ts": "2023-09-11T18:48:34.814Z",
        "numInstances": 1
    },
    {
        "_id": "64ff61026317c60fcab87080",
        "user": {
            "id": "64ff60ffc351153fb118e033"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277642201251708929"
        },
        "commitId": "64ff6102c3cbe69b66f40119",
        "edit_ts": "2023-09-11T18:48:38.066Z",
        "numInstances": 1
    },
    {
        "_id": "64ff6170f171be428c0ef648",
        "user": {
            "id": "64ff616ef171be428c0ef647"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277642673698111490"
        },
        "commitId": "64ff6170c3cbe69b66f41236",
        "edit_ts": "2023-09-11T18:50:28.300Z",
        "numInstances": 1
    },
    {
        "_id": "64ff6176b09f6ed1816e2f1a",
        "user": {
            "id": "64ff6173b09f6ed1816e2f19"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277642699467915266"
        },
        "commitId": "64ff6176c3cbe69b66f413ff",
        "edit_ts": "2023-09-11T18:50:34.092Z",
        "numInstances": 1
    },
    {
        "_id": "64ff61a91c4f6ea068757354",
        "user": {
            "id": "64ff61a71c4f6ea068757353"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277642901331378177"
        },
        "commitId": "64ff61a9c3cbe69b66f41d88",
        "numInstances": 1
    },
    {
        "_id": "64ff61b2f171be428c0ef64d",
        "user": {
            "id": "64ff61b01c4f6ea068757357"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277642957165953026"
        },
        "commitId": "64ff61b2c3cbe69b66f42188",
        "edit_ts": "2023-09-11T18:51:34.199Z",
        "numInstances": 1
    },
    {
        "_id": "64ff61b3f171be428c0ef64e",
        "user": {
            "id": "64ff61b0f171be428c0ef64c"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277642961460920324"
        },
        "commitId": "64ff61b3c3cbe69b66f42225",
        "edit_ts": "2023-09-11T18:51:35.673Z",
        "numInstances": 1
    },
    {
        "_id": "64ff61baf171be428c0ef64f",
        "user": {
            "id": "64ff61b71c4f6ea068757359"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277642987230724098"
        },
        "commitId": "64ff61bac3cbe69b66f42595",
        "edit_ts": "2023-09-11T18:51:41.144Z",
        "numInstances": 1
    },
    {
        "_id": "64ff61d66078d392e7258de8",
        "user": {
            "id": "64ff61d46078d392e7258de7"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277643111784775682"
        },
        "commitId": "64ff61d6c3cbe69b66f42aaa",
        "edit_ts": "2023-09-11T18:52:10.243Z",
        "numInstances": 1
    },
    {
        "_id": "64ff61f34a1ae2361ab597c5",
        "user": {
            "id": "64ff61f185c8bb5627bbc538"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277643236338827265"
        },
        "commitId": "64ff61f3c3cbe69b66f43138",
        "edit_ts": "2023-09-11T18:52:39.039Z",
        "numInstances": 1
    },
    {
        "_id": "64ff61f44a1ae2361ab597c7",
        "user": {
            "id": "64ff61f14a1ae2361ab597c4"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277643236338827269"
        },
        "commitId": "64ff61f4c3cbe69b66f4319b",
        "edit_ts": "2023-09-11T18:52:39.232Z",
        "numInstances": 1
    },
    {
        "_id": "64ff61f74a1ae2361ab597c8",
        "user": {
            "id": "64ff61f44a1ae2361ab597c6"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277643253518696451"
        },
        "commitId": "64ff61f7c3cbe69b66f432c6",
        "edit_ts": "2023-09-11T18:52:43.623Z",
        "numInstances": 1
    },
    {
        "_id": "64ff62126078d392e7258def",
        "user": {
            "id": "64ff621090ae669733bc401d"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277643369482813442"
        },
        "commitId": "64ff6212c3cbe69b66f43bdf",
        "edit_ts": "2023-09-11T18:53:10.009Z",
        "numInstances": 1
    },
    {
        "_id": "64ff6212002abd4efe5b0936",
        "user": {
            "id": "64ff621090ae669733bc401e"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277643369482813447"
        },
        "commitId": "64ff6212c3cbe69b66f43bfd",
        "edit_ts": "2023-09-11T18:53:10.384Z",
        "numInstances": 1
    },
    {
        "_id": "64ff621390ae669733bc4020",
        "user": {
            "id": "64ff621190ae669733bc401f"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277643378072748033"
        },
        "commitId": "64ff6213c3cbe69b66f43c7a",
        "edit_ts": "2023-09-11T18:53:12.002Z",
        "numInstances": 1
    },
    {
        "_id": "64ff621988f992817ffd475b",
        "user": {
            "id": "64ff621688f992817ffd475a"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277643395252617219"
        },
        "commitId": "64ff6219c3cbe69b66f43fc2",
        "edit_ts": "2023-09-11T18:53:16.630Z",
        "numInstances": 1
    },
    {
        "_id": "64ff621d4a1ae2361ab597d0",
        "user": {
            "id": "64ff621b4a1ae2361ab597cf"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277643412432486402"
        },
        "commitId": "64ff621dc3cbe69b66f441b8",
        "edit_ts": "2023-09-11T18:53:20.596Z",
        "numInstances": 1
    },
    {
        "_id": "64ff6361c79fc26b376f3015",
        "user": {
            "id": "64ff635f3dd44930b37752f2"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277644804001890306"
        },
        "commitId": "64ff6361c3cbe69b66f46c35",
        "edit_ts": "2023-09-11T18:58:44.909Z",
        "numInstances": 1
    },
    {
        "_id": "64ff6399c79fc26b376f3017",
        "user": {
            "id": "64ff6397b0b387f8c46c33f1"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277645044520058886"
        },
        "commitId": "64ff6399c3cbe69b66f476f9",
        "edit_ts": "2023-09-11T18:59:40.554Z",
        "numInstances": 1
    },
    {
        "_id": "64ff6399c79fc26b376f3018",
        "user": {
            "id": "64ff63983dd44930b37752f5"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277645048815026177"
        },
        "commitId": "64ff6399c3cbe69b66f47753",
        "edit_ts": "2023-09-11T18:59:41.315Z",
        "numInstances": 1
    },
    {
        "_id": "64ff639cbb5a076197cf069a",
        "user": {
            "id": "64ff6399bb5a076197cf0699"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277645057404960770"
        },
        "commitId": "64ff639cc3cbe69b66f47893",
        "edit_ts": "2023-09-11T18:59:43.810Z",
        "numInstances": 1
    },
    {
        "_id": "64ff639eb0b387f8c46c33f4",
        "user": {
            "id": "64ff639cc79fc26b376f3019"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277645070289862658"
        },
        "commitId": "64ff639ec3cbe69b66f47a04",
        "edit_ts": "2023-09-11T18:59:46.491Z",
        "numInstances": 1
    },
    {
        "_id": "64ff63b8b0b387f8c46c33f9",
        "user": {
            "id": "64ff63b6bb5a076197cf069b"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277645164779143170"
        },
        "commitId": "64ff63b8c3cbe69b66f47fcd",
        "numInstances": 1
    },
    {
        "_id": "64ff66640ab14ce74bd05506",
        "user": {
            "id": "64ff66630ab14ce74bd05505"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277648102536773635"
        },
        "commitId": "64ff6664c3cbe69b66f4d218",
        "numInstances": 1
    },
    {
        "_id": "64ff666b5c6fea94e6a8f538",
        "user": {
            "id": "64ff66680ab14ce74bd0550b"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277648149781413890"
        },
        "commitId": "64ff666bc3cbe69b66f4d587",
        "edit_ts": "2023-09-11T19:11:43.084Z",
        "numInstances": 1
    },
    {
        "_id": "64ff666b0ab14ce74bd0550e",
        "user": {
            "id": "64ff666a0ab14ce74bd0550d"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277648149781413894"
        },
        "commitId": "64ff666bc3cbe69b66f4d5a9",
        "edit_ts": "2023-09-11T19:11:43.175Z",
        "numInstances": 1
    },
    {
        "_id": "64ff66740ab14ce74bd05513",
        "user": {
            "id": "64ff66715c6fea94e6a8f53b"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277648188436119553"
        },
        "commitId": "64ff6674c3cbe69b66f4d95e",
        "edit_ts": "2023-09-11T19:11:52.285Z",
        "numInstances": 1
    },
    {
        "_id": "64ff68435c9971b508651ba1",
        "user": {
            "id": "64ff6840029b1ec8331b5150"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277650177005977602"
        },
        "commitId": "64ff6843c3cbe69b66f51212",
        "edit_ts": "2023-09-11T19:19:35.526Z",
        "numInstances": 1
    },
    {
        "_id": "64ff684a4d115fbc7cf211ac",
        "user": {
            "id": "64ff6846029b1ec8331b5153"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277650211365715970"
        },
        "commitId": "64ff684ac3cbe69b66f514da",
        "edit_ts": "2023-09-11T19:19:43.571Z",
        "numInstances": 1
    },
    {
        "_id": "64ff68804d115fbc7cf211b0",
        "user": {
            "id": "64ff687f0cd8e5c9c074ae95"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277650421819113473"
        },
        "commitId": "64ff6880c3cbe69b66f51e0f",
        "numInstances": 1
    },
    {
        "_id": "64ff688a0cd8e5c9c074ae9b",
        "user": {
            "id": "64ff68885c9971b508651ba9"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277650477653688321"
        },
        "commitId": "64ff688ac3cbe69b66f521fe",
        "edit_ts": "2023-09-11T19:20:45.728Z",
        "numInstances": 1
    },
    {
        "_id": "64ff688c4d115fbc7cf211b6",
        "user": {
            "id": "64ff68895c9971b508651baa"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277650490538590276"
        },
        "commitId": "64ff688cc3cbe69b66f52354",
        "edit_ts": "2023-09-11T19:20:48.549Z",
        "numInstances": 1
    },
    {
        "_id": "64ff688f0cd8e5c9c074ae9e",
        "user": {
            "id": "64ff688b5c9971b508651bab"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277650499128524801"
        },
        "commitId": "64ff688fc3cbe69b66f52450",
        "edit_ts": "2023-09-11T19:20:50.827Z",
        "numInstances": 1
    },
    {
        "_id": "64ff6b54134e228ffd08dd48",
        "user": {
            "id": "6400ddd8dfbdd9d2762dc515"
        },
        "ancestors": [
            {
                "_id": "64d6bb6fb57f1beb4d10acf2",
                "user": {
                    "id": "6400ddd8dfbdd9d2762dc515"
                }
            },
            {
                "_id": "64f219aab57f1beb4d10ad13",
                "user": {
                    "id": "643d92b7793f5d9028f215dd"
                }
            },
            {
                "_id": "64f784277d38e0fd5b935a1f",
                "user": {
                    "id": "643d92b7793f5d9028f215dd"
                }
            },
            {
                "_id": "64f78794c15e36dd6fed7516",
                "user": {
                    "id": "643d92b7793f5d9028f215dd"
                }
            },
            {
                "_id": "64f8daf3b89738a5e8344275",
                "user": {
                    "id": "645d4a2203b2c8c5c2496387"
                }
            }
        ],
        "_ts": {
            "$timestamp": "7277670049819656194"
        },
        "permissionToShare": true,
        "licenses": [],
        "teamDesmosAuthored": true,
        "commitId": "64ff6b54c3cbe69b66f57e27",
        "edit_ts": "2023-09-11T20:36:42.440Z",
        "numInstances": 0
    },
    {
        "_id": "64ff6b61134e228ffd08dd4b",
        "user": {
            "id": "645d4a2203b2c8c5c2496387"
        },
        "ancestors": [
            {
                "_id": "64d6bb6fb57f1beb4d10acf2",
                "user": {
                    "id": "6400ddd8dfbdd9d2762dc515"
                }
            },
            {
                "_id": "64f219aab57f1beb4d10ad13",
                "user": {
                    "id": "643d92b7793f5d9028f215dd"
                }
            },
            {
                "_id": "64f784277d38e0fd5b935a1f",
                "user": {
                    "id": "643d92b7793f5d9028f215dd"
                }
            },
            {
                "_id": "64f78794c15e36dd6fed7516",
                "user": {
                    "id": "643d92b7793f5d9028f215dd"
                }
            },
            {
                "_id": "64f8daf3b89738a5e8344275",
                "user": {
                    "id": "645d4a2203b2c8c5c2496387"
                }
            }
        ],
        "_ts": {
            "$timestamp": "7299149288641134597"
        },
        "permissionToShare": true,
        "licenses": [],
        "commitId": "654bc976f45abc570575648f",
        "edit_ts": "2023-11-08T17:47:07.827Z",
        "publishedTimestamp": "2023-11-08T17:47:07.827Z",
        "numInstances": 2
    },
    {
        "_id": "64ff6bf2c6d7972f945cd5b1",
        "user": {
            "id": "64ff6bf1dc2a8393c20ca63c"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277654209980268550"
        },
        "commitId": "64ff6bf2c3cbe69b66f5968d",
        "numInstances": 1
    },
    {
        "_id": "64ff6bf7dc2a8393c20ca645",
        "user": {
            "id": "64ff6bf5c6d7972f945cd5b2"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277654248634974213"
        },
        "commitId": "64ff6bf7c3cbe69b66f59906",
        "edit_ts": "2023-09-11T19:35:23.728Z",
        "numInstances": 1
    },
    {
        "_id": "64ff6bfcc6d7972f945cd5b4",
        "user": {
            "id": "64ff6bfadc2a8393c20ca64a"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277654252929941510"
        },
        "commitId": "64ff6bfcc3cbe69b66f59b14",
        "numInstances": 1
    },
    {
        "_id": "64ff6bfdc6d7972f945cd5b7",
        "user": {
            "id": "64ff6bfbc6d7972f945cd5b3"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277654274404777990"
        },
        "commitId": "64ff6bfdc3cbe69b66f59c16",
        "edit_ts": "2023-09-11T19:35:29.724Z",
        "numInstances": 1
    },
    {
        "_id": "64ff6f025cee55a6daccc2c7",
        "user": {
            "id": "64ff6f005cee55a6daccc2c6"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277657594414497794"
        },
        "commitId": "64ff6f02c3cbe69b66f5fe15",
        "edit_ts": "2023-09-11T19:48:22.066Z",
        "numInstances": 1
    },
    {
        "_id": "64ff6f026cc60d20580a1f73",
        "user": {
            "id": "64ff6f0030fb72be28b947fb"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277657594414497798"
        },
        "commitId": "64ff6f02c3cbe69b66f5fe5e",
        "edit_ts": "2023-09-11T19:48:22.544Z",
        "numInstances": 1
    },
    {
        "_id": "64ff6f3a30fb72be28b94800",
        "user": {
            "id": "64ff6f386f319e2a7b0465e9"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277657830637699074"
        },
        "commitId": "64ff6f3ac3cbe69b66f60a71",
        "edit_ts": "2023-09-11T19:49:17.344Z",
        "numInstances": 1
    },
    {
        "_id": "64ff6f3b6f319e2a7b0465ea",
        "user": {
            "id": "64ff6f3930fb72be28b947ff"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277657839227633665"
        },
        "commitId": "64ff6f3bc3cbe69b66f60b31",
        "edit_ts": "2023-09-11T19:49:19.206Z",
        "numInstances": 1
    },
    {
        "_id": "64ff6f3c30fb72be28b94802",
        "user": {
            "id": "64ff6f3a5cee55a6daccc2ce"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277657839227633669"
        },
        "commitId": "64ff6f3cc3cbe69b66f60bf5",
        "edit_ts": "2023-09-11T19:49:19.463Z",
        "numInstances": 1
    },
    {
        "_id": "64ff6f3e30fb72be28b94803",
        "user": {
            "id": "64ff6f3c30fb72be28b94801"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277657847817568259"
        },
        "commitId": "64ff6f3ec3cbe69b66f60cee",
        "edit_ts": "2023-09-11T19:49:21.525Z",
        "numInstances": 1
    },
    {
        "_id": "64ff7000394edfbc2b5c0aee",
        "user": {
            "id": "64ff6fff394edfbc2b5c0aed"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277658668156321793"
        },
        "commitId": "64ff7000c3cbe69b66f628fb",
        "numInstances": 1
    },
    {
        "_id": "64ff7003394edfbc2b5c0aef",
        "user": {
            "id": "64ff70010fe5b6e39cbd3c77"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277658681041223681"
        },
        "commitId": "64ff7003c3cbe69b66f629ef",
        "numInstances": 1
    },
    {
        "_id": "64ff700b394edfbc2b5c0afa",
        "user": {
            "id": "64ff7008394edfbc2b5c0af7"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277658728285863937"
        },
        "commitId": "64ff700bc3cbe69b66f62e93",
        "edit_ts": "2023-09-11T19:52:46.500Z",
        "numInstances": 1
    },
    {
        "_id": "64ff700b5ad220a939140848",
        "user": {
            "id": "64a811c6bd91179ef0dc5e37"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277660351783501829"
        },
        "teamDesmosAuthored": true,
        "commitId": "64ff700c5ad220a93914084a",
        "edit_ts": "2023-09-11T19:59:04.353Z",
        "licenses": [],
        "publishedTimestamp": "2023-09-11T19:59:04.353Z",
        "editionId": "64ff6ee5c3cbe69b66f5f96e",
        "numInstances": 0
    },
    {
        "_id": "64ff700e0fe5b6e39cbd3c7d",
        "user": {
            "id": "64ff700c394edfbc2b5c0afd"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277658749760700418"
        },
        "commitId": "64ff700ec3cbe69b66f6302c",
        "edit_ts": "2023-09-11T19:52:51.374Z",
        "numInstances": 1
    },
    {
        "_id": "64ff7109f602dfe4d861f550",
        "user": {
            "id": "64ff71088798f33eb8cd9ed5"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277659823502524421"
        },
        "commitId": "64ff7109c3cbe69b66f65219",
        "edit_ts": "2023-09-11T19:57:01.548Z",
        "numInstances": 1
    },
    {
        "_id": "64ff710d4929e43215bed4a6",
        "user": {
            "id": "64ff710a76d566e0589e3764"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277659836387426306"
        },
        "commitId": "64ff710dc3cbe69b66f65303",
        "edit_ts": "2023-09-11T19:57:04.331Z",
        "numInstances": 1
    },
    {
        "_id": "64ff7144f602dfe4d861f557",
        "user": {
            "id": "64ff714376d566e0589e3769"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277660059725725697"
        },
        "commitId": "64ff7144c3cbe69b66f65d4f",
        "numInstances": 1
    },
    {
        "_id": "64ff71458798f33eb8cd9ed8",
        "user": {
            "id": "64ff7143f602dfe4d861f556"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277660076905594885"
        },
        "commitId": "64ff7145c3cbe69b66f65dde",
        "edit_ts": "2023-09-11T19:58:00.531Z",
        "numInstances": 1
    },
    {
        "_id": "64ff714b8798f33eb8cd9edb",
        "user": {
            "id": "64ff7149f602dfe4d861f558"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277660106970365953"
        },
        "commitId": "64ff714bc3cbe69b66f6605b",
        "edit_ts": "2023-09-11T19:58:07.014Z",
        "numInstances": 1
    },
    {
        "_id": "64ff7155f602dfe4d861f55a",
        "user": {
            "id": "64ff71524929e43215bed4b5"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277660149920038913"
        },
        "commitId": "64ff7155c3cbe69b66f6638d",
        "edit_ts": "2023-09-11T19:58:17.066Z",
        "numInstances": 1
    },
    {
        "_id": "64ff71f8f339e5575674e86d",
        "user": {
            "id": "64ff71f6f339e5575674e86b"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277660832819838977"
        },
        "commitId": "64ff71f8c3cbe69b66f67ed4",
        "numInstances": 1
    },
    {
        "_id": "64ff71f9fdb5fa65b5a2d667",
        "user": {
            "id": "64ff71f7f339e5575674e86c"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277660845704740866"
        },
        "commitId": "64ff71f9c3cbe69b66f67f65",
        "edit_ts": "2023-09-11T20:00:59.772Z",
        "numInstances": 1
    },
    {
        "_id": "64ff71fcf339e5575674e86f",
        "user": {
            "id": "64ff71faf339e5575674e86e"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277660862884610052"
        },
        "commitId": "64ff71fcc3cbe69b66f681a3",
        "edit_ts": "2023-09-11T20:01:03.828Z",
        "numInstances": 1
    },
    {
        "_id": "64ff7201f339e5575674e872",
        "user": {
            "id": "64ff71fdfdb5fa65b5a2d670"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277660888654413827"
        },
        "commitId": "64ff7201c3cbe69b66f684ee",
        "edit_ts": "2023-09-11T20:01:09.484Z",
        "numInstances": 1
    },
    {
        "_id": "64ff72049691c3df49f86c8c",
        "user": {
            "id": "64ff72029691c3df49f86c8b"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277660884359446529"
        },
        "commitId": "64ff7204c3cbe69b66f68751",
        "numInstances": 1
    },
    {
        "_id": "64ff72069691c3df49f86c91",
        "user": {
            "id": "64ff7204946dc36f2df92bb6"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277660905834283010"
        },
        "commitId": "64ff7206c3cbe69b66f688d3",
        "edit_ts": "2023-09-11T20:01:13.573Z",
        "numInstances": 1
    },
    {
        "_id": "64ff7209946dc36f2df92bb9",
        "user": {
            "id": "64ff7207946dc36f2df92bb8"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277660923014152193"
        },
        "commitId": "64ff7209c3cbe69b66f68bdc",
        "edit_ts": "2023-09-11T20:01:17.148Z",
        "numInstances": 1
    },
    {
        "_id": "64ff720a9691c3df49f86c96",
        "user": {
            "id": "64ff7207946dc36f2df92bb7"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277660923014152197"
        },
        "commitId": "64ff720ac3cbe69b66f68ca3",
        "edit_ts": "2023-09-11T20:01:17.829Z",
        "numInstances": 1
    },
    {
        "_id": "64ff728081f1896b00ce90a8",
        "user": {
            "id": "64ff727e81f1896b00ce90a5"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277661429820293122"
        },
        "commitId": "64ff7280c3cbe69b66f69ef5",
        "edit_ts": "2023-09-11T20:03:15.232Z",
        "numInstances": 1
    },
    {
        "_id": "64ff72836567eccbc0e44823",
        "user": {
            "id": "64ff728181f1896b00ce90a9"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277661442705195010"
        },
        "commitId": "64ff7283c3cbe69b66f6a00c",
        "edit_ts": "2023-09-11T20:03:18.596Z",
        "numInstances": 1
    },
    {
        "_id": "64ff72866567eccbc0e44824",
        "user": {
            "id": "64ff728481f1896b00ce90ac"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277661459885064195"
        },
        "commitId": "64ff7286c3cbe69b66f6a196",
        "edit_ts": "2023-09-11T20:03:22.370Z",
        "numInstances": 1
    },
    {
        "_id": "64ff729481f1896b00ce90b6",
        "user": {
            "id": "64ff729081f1896b00ce90b5"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277661520014606337"
        },
        "commitId": "64ff7294c3cbe69b66f6a642",
        "edit_ts": "2023-09-11T20:03:36.337Z",
        "numInstances": 1
    },
    {
        "_id": "64ff741a4f2607e0d28e7833",
        "user": {
            "id": "64ff7418c2aaa394862e5594"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277663195051851779"
        },
        "commitId": "64ff741ac3cbe69b66f6dce5",
        "edit_ts": "2023-09-11T20:10:06.576Z",
        "numInstances": 1
    },
    {
        "_id": "64ff74214f2607e0d28e7836",
        "user": {
            "id": "64ff741f58bc4dce17b47889"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277663207936753666"
        },
        "commitId": "64ff7421c3cbe69b66f6df21",
        "numInstances": 1
    },
    {
        "_id": "64ff7452c2aaa394862e5599",
        "user": {
            "id": "64ff7450c2aaa394862e5598"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277663418390151169"
        },
        "commitId": "64ff7452c3cbe69b66f6e73f",
        "numInstances": 1
    },
    {
        "_id": "64ff74554f2607e0d28e783a",
        "user": {
            "id": "64ff74534f2607e0d28e7839"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277663444159954950"
        },
        "commitId": "64ff7455c3cbe69b66f6e92b",
        "edit_ts": "2023-09-11T20:11:04.672Z",
        "numInstances": 1
    },
    {
        "_id": "64ff745a9bced47cd9311fc1",
        "user": {
            "id": "64ff74589bced47cd9311fc0"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277663469929758721"
        },
        "commitId": "64ff745ac3cbe69b66f6eb0c",
        "edit_ts": "2023-09-11T20:11:10.808Z",
        "numInstances": 1
    },
    {
        "_id": "64ff7464c2aaa394862e55a4",
        "user": {
            "id": "64ff746158bc4dce17b4788f"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277663512879431681"
        },
        "commitId": "64ff7464c3cbe69b66f6ef42",
        "edit_ts": "2023-09-11T20:11:20.251Z",
        "numInstances": 1
    },
    {
        "_id": "64ff7486b007c969a9db860a",
        "user": {
            "id": "64ff748468eb538b1934f4e6"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277663658908319746"
        },
        "commitId": "64ff7486c3cbe69b66f6f5ab",
        "edit_ts": "2023-09-11T20:11:54.198Z",
        "numInstances": 1
    },
    {
        "_id": "64ff7489b007c969a9db860e",
        "user": {
            "id": "64ff748768eb538b1934f4e9"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277663671793221634"
        },
        "commitId": "64ff7489c3cbe69b66f6f74b",
        "edit_ts": "2023-09-11T20:11:57.026Z",
        "numInstances": 1
    },
    {
        "_id": "64ff748db007c969a9db8614",
        "user": {
            "id": "64ff7489b007c969a9db860f"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277663693268058115"
        },
        "commitId": "64ff748dc3cbe69b66f6fa20",
        "edit_ts": "2023-09-11T20:12:02.447Z",
        "numInstances": 1
    },
    {
        "_id": "64ff748e2482c7f7620f1994",
        "user": {
            "id": "64ff748b42a11db62daddb61"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277663693268058119"
        },
        "commitId": "64ff748ec3cbe69b66f6fa69",
        "edit_ts": "2023-09-11T20:12:02.515Z",
        "numInstances": 1
    },
    {
        "_id": "64ff7490b007c969a9db8618",
        "user": {
            "id": "64ff748eb007c969a9db8615"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277663701857992705"
        },
        "commitId": "64ff7490c3cbe69b66f6fbc5",
        "edit_ts": "2023-09-11T20:12:04.066Z",
        "numInstances": 1
    },
    {
        "_id": "64ff74cc42a11db62daddb66",
        "user": {
            "id": "64ff74ca2482c7f7620f1996"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277663959556030465"
        },
        "commitId": "64ff74ccc3cbe69b66f70832",
        "edit_ts": "2023-09-11T20:13:04.034Z",
        "numInstances": 1
    },
    {
        "_id": "64ff74d242a11db62daddb6b",
        "user": {
            "id": "64ff74d042a11db62daddb6a"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277663981030866950"
        },
        "commitId": "64ff74d2c3cbe69b66f70a84",
        "edit_ts": "2023-09-11T20:13:09.837Z",
        "numInstances": 1
    },
    {
        "_id": "64ff74d202ef8e395f00ca4c",
        "user": {
            "id": "64ff74cf42a11db62daddb69"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277663989620801537"
        },
        "commitId": "64ff74d2c3cbe69b66f70aee",
        "edit_ts": "2023-09-11T20:13:11.249Z",
        "numInstances": 1
    },
    {
        "_id": "64ff74d42482c7f7620f199d",
        "user": {
            "id": "64ff74d2f1a64d703cf691ec"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277663993915768840"
        },
        "commitId": "64ff74d4c3cbe69b66f70c3f",
        "edit_ts": "2023-09-11T20:13:12.400Z",
        "numInstances": 1
    },
    {
        "_id": "64ff772cc3cbe69b66f757c4",
        "editionId": "64ff7655c3cbe69b66f73e4e",
        "parentActivityMetaId": "64ff700b5ad220a939140848",
        "_ts": {
            "$timestamp": "7277666553716277253"
        },
        "commitId": "64ff772cc3cbe69b66f757d4",
        "edit_ts": "2023-09-11T19:59:04.353Z",
        "licenses": [],
        "permissionToShare": true,
        "publishedTimestamp": "2023-09-11T19:59:04.353Z",
        "rootActivityMetaId": "64ff700b5ad220a939140848",
        "teamDesmosAuthored": true,
        "user": {
            "id": "64a811c6bd91179ef0dc5e37"
        },
        "numInstances": 0
    },
    {
        "_id": "64ff7b0f4063dabedd4d9bad",
        "user": {
            "id": "64a811c6bd91179ef0dc5e37"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277671664727359492"
        },
        "teamDesmosAuthored": true,
        "commitId": "64ff7b4ea55cf7cf8acb2fa2",
        "edit_ts": "2023-09-11T20:42:58.756Z",
        "licenses": [],
        "publishedTimestamp": "2023-09-11T20:42:58.756Z",
        "numInstances": 0
    },
    {
        "_id": "64ff7b883cd2cd485b591a64",
        "user": {
            "id": "64ff7b863cd2cd485b591a63"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277671364079648770"
        },
        "commitId": "64ff7b88c3cbe69b66f7eb8e",
        "edit_ts": "2023-09-11T20:41:48.199Z",
        "numInstances": 1
    },
    {
        "_id": "64ff7b8d3cd2cd485b591a69",
        "user": {
            "id": "64ff7b8b3cd2cd485b591a67"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277671385554485249"
        },
        "commitId": "64ff7b8dc3cbe69b66f7ed8d",
        "edit_ts": "2023-09-11T20:41:53.231Z",
        "numInstances": 1
    },
    {
        "_id": "64ff7b923cd2cd485b591a6a",
        "user": {
            "id": "64ff7b8f09dc94401450c231"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277671389849452547"
        },
        "commitId": "64ff7b92c3cbe69b66f7ef49",
        "numInstances": 1
    },
    {
        "_id": "64ff7b983cd2cd485b591a6b",
        "user": {
            "id": "64ff7b9509dc94401450c238"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277671432799125507"
        },
        "commitId": "64ff7b98c3cbe69b66f7f173",
        "edit_ts": "2023-09-11T20:42:04.226Z",
        "numInstances": 1
    },
    {
        "_id": "64ff7e330f8bdeacbbda6614",
        "user": {
            "id": "64ff7e2fd8baa5c1eadc22dc"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277674297542311938"
        },
        "commitId": "64ff7e33c3cbe69b66f8531c",
        "edit_ts": "2023-09-11T20:53:11.343Z",
        "numInstances": 1
    },
    {
        "_id": "64ff7e71d8baa5c1eadc22e1",
        "user": {
            "id": "64ff7e707b4d734f4d98141c"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277674563830284289"
        },
        "commitId": "64ff7e71c3cbe69b66f85f7d",
        "edit_ts": "2023-09-11T20:54:13.331Z",
        "numInstances": 1
    },
    {
        "_id": "64ff7e7658bae4cb197723e6",
        "user": {
            "id": "64ff7e730f8bdeacbbda6619"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277674585305120774"
        },
        "commitId": "64ff7e76c3cbe69b66f861be",
        "edit_ts": "2023-09-11T20:54:18.789Z",
        "numInstances": 1
    },
    {
        "_id": "64ff7e78d8baa5c1eadc22e4",
        "user": {
            "id": "64ff7e760f8bdeacbbda661a"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277674589600088065"
        },
        "commitId": "64ff7e78c3cbe69b66f86352",
        "edit_ts": "2023-09-11T20:54:19.407Z",
        "numInstances": 1
    },
    {
        "_id": "64ff7e7958bae4cb197723eb",
        "user": {
            "id": "64ff7e767b4d734f4d98141d"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277674581010153478"
        },
        "commitId": "64ff7e79c3cbe69b66f86432",
        "numInstances": 1
    },
    {
        "_id": "64ff7eca281e9cd85df9df85",
        "user": {
            "id": "64ff7ec855a80cd16699a07e"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277674946082373633"
        },
        "commitId": "64ff7ecac3cbe69b66f874ad",
        "edit_ts": "2023-09-11T20:55:42.233Z",
        "numInstances": 1
    },
    {
        "_id": "64ff7ece281e9cd85df9df88",
        "user": {
            "id": "64ff7ecc55a80cd16699a080"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277674958967275522"
        },
        "commitId": "64ff7ecec3cbe69b66f87675",
        "edit_ts": "2023-09-11T20:55:45.785Z",
        "numInstances": 1
    },
    {
        "_id": "64ff7ece281e9cd85df9df89",
        "user": {
            "id": "64ff7ecc55a80cd16699a07f"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277674958967275525"
        },
        "commitId": "64ff7ecec3cbe69b66f876a9",
        "edit_ts": "2023-09-11T20:55:45.867Z",
        "numInstances": 1
    },
    {
        "_id": "64ff7ed0281e9cd85df9df8c",
        "user": {
            "id": "64ff7ecd55a80cd16699a081"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277674967557210115"
        },
        "commitId": "64ff7ed0c3cbe69b66f877e8",
        "edit_ts": "2023-09-11T20:55:47.426Z",
        "numInstances": 1
    },
    {
        "_id": "64ff7f3655e5b24f5c1d86fb",
        "user": {
            "id": "64ff7f343fabae6d24d01a11"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277675392758972419"
        },
        "commitId": "64ff7f36c3cbe69b66f88bbc",
        "numInstances": 1
    },
    {
        "_id": "64ff7f393fabae6d24d01a18",
        "user": {
            "id": "64ff7f383fabae6d24d01a16"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277675422823743490"
        },
        "commitId": "64ff7f39c3cbe69b66f88da9",
        "edit_ts": "2023-09-11T20:57:33.404Z",
        "numInstances": 1
    },
    {
        "_id": "64ff7f3a3fabae6d24d01a19",
        "user": {
            "id": "64ff7f3755e5b24f5c1d86fc"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277675422823743494"
        },
        "commitId": "64ff7f3ac3cbe69b66f88e02",
        "edit_ts": "2023-09-11T20:57:33.548Z",
        "numInstances": 1
    },
    {
        "_id": "64ff7f3a55e5b24f5c1d86fd",
        "user": {
            "id": "64ff7f383fabae6d24d01a17"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277675422823743498"
        },
        "commitId": "64ff7f3ac3cbe69b66f88ec2",
        "edit_ts": "2023-09-11T20:57:33.920Z",
        "numInstances": 1
    },
    {
        "_id": "64ff808013a7474e5af472cf",
        "user": {
            "id": "64ff807d8776a5d381bd1a46"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277676827278049282"
        },
        "commitId": "64ff8080c3cbe69b66f8c79b",
        "edit_ts": "2023-09-11T21:03:00.094Z",
        "numInstances": 1
    },
    {
        "_id": "64ff80b9b11b5fa9fa3880db",
        "user": {
            "id": "64ff80b78776a5d381bd1a49"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277677054911315969"
        },
        "commitId": "64ff80b9c3cbe69b66f8d3f0",
        "numInstances": 1
    },
    {
        "_id": "64ff80be13a7474e5af472d2",
        "user": {
            "id": "64ff80bc56afc22e751bcfbc"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277677089271054341"
        },
        "commitId": "64ff80bec3cbe69b66f8d6cc",
        "edit_ts": "2023-09-11T21:04:01.745Z",
        "numInstances": 1
    },
    {
        "_id": "64ff80c413a7474e5af472d3",
        "user": {
            "id": "64ff80c18776a5d381bd1a4e"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277677115040858117"
        },
        "commitId": "64ff80c4c3cbe69b66f8d91d",
        "edit_ts": "2023-09-11T21:04:07.811Z",
        "numInstances": 1
    },
    {
        "_id": "64ff80f856afc22e751bcfbf",
        "user": {
            "id": "64ff80f713a7474e5af472d5"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277677338379157507"
        },
        "commitId": "64ff80f8c3cbe69b66f8e419",
        "edit_ts": "2023-09-11T21:04:59.696Z",
        "numInstances": 1
    },
    {
        "_id": "64ff813574b5252d45958aff",
        "user": {
            "id": "64ff813474b5252d45958afd"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277677587487260676"
        },
        "commitId": "64ff8135c3cbe69b66f8f082",
        "numInstances": 1
    },
    {
        "_id": "64ff813674b5252d45958b02",
        "user": {
            "id": "64ff813474b5252d45958afe"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277677591782227974"
        },
        "commitId": "64ff8136c3cbe69b66f8f12b",
        "numInstances": 1
    },
    {
        "_id": "64ff813d74b5252d45958b0b",
        "user": {
            "id": "64ff813a74b5252d45958b08"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277677634731900933"
        },
        "commitId": "64ff813dc3cbe69b66f8f631",
        "edit_ts": "2023-09-11T21:06:08.954Z",
        "numInstances": 1
    },
    {
        "_id": "64ff813e74b5252d45958b0c",
        "user": {
            "id": "64ff813c8e02854f0da83c45"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277677643321835521"
        },
        "commitId": "64ff813ec3cbe69b66f8f6e5",
        "edit_ts": "2023-09-11T21:06:10.687Z",
        "numInstances": 1
    },
    {
        "_id": "64ff81fa8701458e60f12ef8",
        "user": {
            "id": "64ff81f8a34696f6234e6961"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277678446480719874"
        },
        "commitId": "64ff81fac3cbe69b66f9194e",
        "edit_ts": "2023-09-11T21:09:17.839Z",
        "numInstances": 1
    },
    {
        "_id": "64ff822ca34696f6234e6964",
        "user": {
            "id": "64ff822b11a470c717088703"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277678648344182786"
        },
        "commitId": "64ff822cc3cbe69b66f92354",
        "numInstances": 1
    },
    {
        "_id": "64ff822e11a470c717088705",
        "user": {
            "id": "64ff822d11a470c717088704"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277678656934117377"
        },
        "commitId": "64ff822ec3cbe69b66f9243f",
        "numInstances": 1
    },
    {
        "_id": "64ff8239a34696f6234e696d",
        "user": {
            "id": "64ff8237a34696f6234e696c"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277678721358626818"
        },
        "commitId": "64ff8239c3cbe69b66f92997",
        "edit_ts": "2023-09-11T21:10:21.013Z",
        "numInstances": 1
    },
    {
        "_id": "64ff825711a470c717088709",
        "user": {
            "id": "64ff825511a470c717088708"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277678845912678402"
        },
        "commitId": "64ff8257c3cbe69b66f93076",
        "edit_ts": "2023-09-11T21:10:50.644Z",
        "numInstances": 1
    },
    {
        "_id": "64ff8290c5839d3e78e99e7d",
        "user": {
            "id": "64ff828ddd98a434bcb2d261"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277679090725814274"
        },
        "commitId": "64ff8290c3cbe69b66f93c1b",
        "edit_ts": "2023-09-11T21:11:47.966Z",
        "numInstances": 1
    },
    {
        "_id": "64ff82c82d82448e12ca3951",
        "user": {
            "id": "64ff82c6c5839d3e78e99e80"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277679318359081113"
        },
        "commitId": "64ff82c8c3cbe69b66f948c4",
        "numInstances": 1
    },
    {
        "_id": "64ff82c92d82448e12ca3952",
        "user": {
            "id": "64ff82c7c5839d3e78e99e81"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277679335538950150"
        },
        "commitId": "64ff82c9c3cbe69b66f9490a",
        "edit_ts": "2023-09-11T21:12:44.516Z",
        "numInstances": 1
    },
    {
        "_id": "64ff82ccdd98a434bcb2d268",
        "user": {
            "id": "64ff82c93c588e3fcf256cf1"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277679348423852034"
        },
        "commitId": "64ff82ccc3cbe69b66f94ade",
        "edit_ts": "2023-09-11T21:12:47.958Z",
        "numInstances": 1
    },
    {
        "_id": "64ff82ccdd98a434bcb2d269",
        "user": {
            "id": "64ff82cac5839d3e78e99e82"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277679348423852037"
        },
        "commitId": "64ff82ccc3cbe69b66f94bb8",
        "edit_ts": "2023-09-11T21:12:47.990Z",
        "numInstances": 1
    },
    {
        "_id": "64ff83c3108c8b1931e51755",
        "user": {
            "id": "64ff83c1108c8b1931e51752"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277680413575741452"
        },
        "commitId": "64ff83c3c3cbe69b66f97994",
        "edit_ts": "2023-09-11T21:16:55.542Z",
        "numInstances": 1
    },
    {
        "_id": "64ff83c5108c8b1931e51756",
        "user": {
            "id": "64ff83c32ad828829e084c72"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277680422165676034"
        },
        "commitId": "64ff83c5c3cbe69b66f97a8e",
        "edit_ts": "2023-09-11T21:16:57.223Z",
        "numInstances": 1
    },
    {
        "_id": "64ff83c72ad828829e084c77",
        "user": {
            "id": "64ff83c52ad828829e084c73"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277680426460643333"
        },
        "commitId": "64ff83c7c3cbe69b66f97b79",
        "edit_ts": "2023-09-11T21:16:58.387Z",
        "numInstances": 1
    },
    {
        "_id": "64ff83ca2ad828829e084c7c",
        "user": {
            "id": "64ff83c62ad828829e084c76"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277680426460643336"
        },
        "commitId": "64ff83cac3cbe69b66f97dcd",
        "numInstances": 0
    },
    {
        "_id": "64ff83e4108c8b1931e51761",
        "user": {
            "id": "64ff83e1108c8b1931e51760"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277680551014694914"
        },
        "commitId": "64ff83e4c3cbe69b66f98452",
        "edit_ts": "2023-09-11T21:17:27.338Z",
        "numInstances": 1
    },
    {
        "_id": "64ff84430aff65f8bea08f9f",
        "user": {
            "id": "64ff84400aff65f8bea08f9e"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277680963331555329"
        },
        "commitId": "64ff8443c3cbe69b66f99680",
        "edit_ts": "2023-09-11T21:19:03.105Z",
        "numInstances": 1
    },
    {
        "_id": "64ff8445c3d68c752354d14b",
        "user": {
            "id": "64ff84430aff65f8bea08fa0"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277680971921489922"
        },
        "commitId": "64ff8445c3cbe69b66f99828",
        "edit_ts": "2023-09-11T21:19:05.057Z",
        "numInstances": 1
    },
    {
        "_id": "64ff84480aff65f8bea08fa5",
        "user": {
            "id": "64ff8446c3d68c752354d14c"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277680984806391809"
        },
        "commitId": "64ff8448c3cbe69b66f99945",
        "edit_ts": "2023-09-11T21:19:08.080Z",
        "numInstances": 1
    },
    {
        "_id": "64ff8453c3d68c752354d155",
        "user": {
            "id": "64ff8451c3d68c752354d154"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277681027756064771"
        },
        "commitId": "64ff8453c3cbe69b66f99ef0",
        "edit_ts": "2023-09-11T21:19:18.630Z",
        "numInstances": 1
    },
    {
        "_id": "64ff84981eec72d0a5347df4",
        "user": {
            "id": "64ff84971eec72d0a5347df1"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277681311223906314"
        },
        "commitId": "64ff8498c3cbe69b66f9ace7",
        "numInstances": 1
    },
    {
        "_id": "64ff849d1eec72d0a5347dfd",
        "user": {
            "id": "64ff849ad83f125395ec315d"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277681345583644674"
        },
        "commitId": "64ff849dc3cbe69b66f9b057",
        "edit_ts": "2023-09-11T21:20:32.486Z",
        "numInstances": 1
    },
    {
        "_id": "64ff849fd83f125395ec3162",
        "user": {
            "id": "64ff849cd83f125395ec315e"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277681354173579269"
        },
        "commitId": "64ff849fc3cbe69b66f9b1a2",
        "edit_ts": "2023-09-11T21:20:34.701Z",
        "numInstances": 1
    },
    {
        "_id": "64ff84a11eec72d0a5347e00",
        "user": {
            "id": "64ff849ed83f125395ec315f"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277681367058481154"
        },
        "commitId": "64ff84a1c3cbe69b66f9b269",
        "edit_ts": "2023-09-11T21:20:37.463Z",
        "numInstances": 1
    },
    {
        "_id": "64ff855dc5398ab3fd7b5fed",
        "user": {
            "id": "64ff855b11e25b7e9a82adc3"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277682170217365508"
        },
        "commitId": "64ff855dc3cbe69b66f9d555",
        "edit_ts": "2023-09-11T21:23:44.820Z",
        "numInstances": 1
    },
    {
        "_id": "64ff8566c5398ab3fd7b5ff2",
        "user": {
            "id": "64ff85630c3ecabcd67f822f"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277682217462005827"
        },
        "commitId": "64ff8566c3cbe69b66f9d8a6",
        "edit_ts": "2023-09-11T21:23:55.127Z",
        "numInstances": 1
    },
    {
        "_id": "64ff858918d5c374a2f36f4b",
        "user": {
            "id": "64ff858818d5c374a2f36f49"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277682363490893830"
        },
        "commitId": "64ff8589c3cbe69b66f9e2a2",
        "edit_ts": "2023-09-11T21:24:29.678Z",
        "numInstances": 1
    },
    {
        "_id": "64ff858a00f114267b452449",
        "user": {
            "id": "64ff858818d5c374a2f36f4a"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277682363490893825"
        },
        "commitId": "64ff858ac3cbe69b66f9e308",
        "edit_ts": "2023-09-11T21:24:29.024Z",
        "numInstances": 1
    },
    {
        "_id": "64ff858b18d5c374a2f36f4c",
        "user": {
            "id": "64ff858900f114267b452448"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277682367785861127"
        },
        "commitId": "64ff858bc3cbe69b66f9e399",
        "edit_ts": "2023-09-11T21:24:30.309Z",
        "numInstances": 1
    },
    {
        "_id": "64ff858e18d5c374a2f36f4f",
        "user": {
            "id": "64ff858b00f114267b45244a"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277682380670763015"
        },
        "commitId": "64ff858ec3cbe69b66f9e53d",
        "edit_ts": "2023-09-11T21:24:33.985Z",
        "numInstances": 1
    },
    {
        "_id": "64ff859cc5398ab3fd7b5ff6",
        "user": {
            "id": "64ff859bc5398ab3fd7b5ff5"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277682427915403266"
        },
        "commitId": "64ff859cc3cbe69b66f9ebc0",
        "numInstances": 1
    },
    {
        "_id": "64ff85a511e25b7e9a82adc9",
        "user": {
            "id": "64ff85a30c3ecabcd67f8238"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277682479455010822"
        },
        "commitId": "64ff85a5c3cbe69b66f9efe6",
        "edit_ts": "2023-09-11T21:24:56.701Z",
        "numInstances": 1
    },
    {
        "_id": "64ff85a9c5398ab3fd7b5ffa",
        "user": {
            "id": "64ff85a70c3ecabcd67f823b"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277682500929847297"
        },
        "commitId": "64ff85a9c3cbe69b66f9f1d8",
        "edit_ts": "2023-09-11T21:25:01.576Z",
        "numInstances": 1
    },
    {
        "_id": "64ff85aa18640319245874af",
        "user": {
            "id": "64ff85a8c5398ab3fd7b5ff9"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277682505224814595"
        },
        "commitId": "64ff85aac3cbe69b66f9f333",
        "edit_ts": "2023-09-11T21:25:02.604Z",
        "numInstances": 1
    },
    {
        "_id": "64ff8661406e6655caefd6ba",
        "user": {
            "id": "64ff865f1bac07f8f44cc9e5"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277683274023960578"
        },
        "commitId": "64ff8661c3cbe69b66fa1677",
        "numInstances": 1
    },
    {
        "_id": "64ff86661bac07f8f44cc9eb",
        "user": {
            "id": "64ff8664406e6655caefd6bd"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277683308383698951"
        },
        "commitId": "64ff8666c3cbe69b66fa18f9",
        "edit_ts": "2023-09-11T21:28:09.610Z",
        "numInstances": 1
    },
    {
        "_id": "64ff86671bac07f8f44cc9ec",
        "user": {
            "id": "64ff8664406e6655caefd6be"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277683312678666242"
        },
        "commitId": "64ff8667c3cbe69b66fa196e",
        "edit_ts": "2023-09-11T21:28:10.032Z",
        "numInstances": 1
    },
    {
        "_id": "64ff8669406e6655caefd6c1",
        "user": {
            "id": "64ff86671bac07f8f44cc9ed"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277683321268600841"
        },
        "commitId": "64ff8669c3cbe69b66fa1ae7",
        "edit_ts": "2023-09-11T21:28:12.744Z",
        "numInstances": 1
    },
    {
        "_id": "64ff86da72ecde2aba0c60dd",
        "user": {
            "id": "64ff86d872ecde2aba0c60db"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277683806599905282"
        },
        "commitId": "64ff86dac3cbe69b66fa3439",
        "edit_ts": "2023-09-11T21:30:05.229Z",
        "numInstances": 1
    },
    {
        "_id": "64ff86db2fd3b7bc46cfe339",
        "user": {
            "id": "64ff86da72ecde2aba0c60dc"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277683815189839874"
        },
        "commitId": "64ff86dbc3cbe69b66fa34eb",
        "edit_ts": "2023-09-11T21:30:07.227Z",
        "numInstances": 1
    },
    {
        "_id": "64ff86f1109785f9eb93e1d1",
        "user": {
            "id": "64ff86def0e15dec0a14d00c"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277683909679120388"
        },
        "commitId": "64ff86f1c3cbe69b66fa3b3f",
        "edit_ts": "2023-09-11T21:30:29.447Z",
        "numInstances": 1
    },
    {
        "_id": "64ff8713a6d9f3446fa5bb44",
        "user": {
            "id": "64ff8712a6d9f3446fa5bb43"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277684051413041156"
        },
        "commitId": "64ff8713c3cbe69b66fa449a",
        "edit_ts": "2023-09-11T21:31:02.752Z",
        "numInstances": 1
    },
    {
        "_id": "64ff8719a6d9f3446fa5bb47",
        "user": {
            "id": "64ff871672ecde2aba0c60e2"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277684081477812228"
        },
        "commitId": "64ff8719c3cbe69b66fa47c6",
        "edit_ts": "2023-09-11T21:31:09.757Z",
        "numInstances": 1
    },
    {
        "_id": "64ff871972ecde2aba0c60e4",
        "user": {
            "id": "64ff871772ecde2aba0c60e3"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277684077182844931"
        },
        "commitId": "64ff8719c3cbe69b66fa4806",
        "edit_ts": "2023-09-11T21:31:08.659Z",
        "numInstances": 1
    },
    {
        "_id": "64ff871e72ecde2aba0c60e9",
        "user": {
            "id": "64ff871b7ab1459f6b1635ed"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277684102952648706"
        },
        "commitId": "64ff871ec3cbe69b66fa4a1f",
        "edit_ts": "2023-09-11T21:31:14.032Z",
        "numInstances": 1
    },
    {
        "_id": "64ff872a109785f9eb93e1d7",
        "user": {
            "id": "64ff8728b9b7d09aa578e761"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277684137312387080"
        },
        "commitId": "64ff872ac3cbe69b66fa50fa",
        "numInstances": 1
    },
    {
        "_id": "64ff872f109785f9eb93e1da",
        "user": {
            "id": "64ff872de4d09f64f8a1644e"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277684175967092738"
        },
        "commitId": "64ff872fc3cbe69b66fa53aa",
        "edit_ts": "2023-09-11T21:31:31.322Z",
        "numInstances": 1
    },
    {
        "_id": "64ff8731e4d09f64f8a1644f",
        "user": {
            "id": "64ff872eb9b7d09aa578e762"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277684184557027331"
        },
        "commitId": "64ff8731c3cbe69b66fa54d3",
        "edit_ts": "2023-09-11T21:31:33.020Z",
        "numInstances": 1
    },
    {
        "_id": "64ff8731b9b7d09aa578e768",
        "user": {
            "id": "64ff872eb9b7d09aa578e763"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277684184557027334"
        },
        "commitId": "64ff8731c3cbe69b66fa5539",
        "edit_ts": "2023-09-11T21:31:33.912Z",
        "numInstances": 1
    },
    {
        "_id": "64ff874472ecde2aba0c60ee",
        "user": {
            "id": "64ff8742a6d9f3446fa5bb48"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277684261866438658"
        },
        "commitId": "64ff8744c3cbe69b66fa5c0c",
        "edit_ts": "2023-09-11T21:31:51.172Z",
        "numInstances": 1
    },
    {
        "_id": "64ff877417bf60a855dcc1b4",
        "user": {
            "id": "64ff877394cd52bc58ff800e"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277684455139966978"
        },
        "commitId": "64ff8774c3cbe69b66fa65b4",
        "numInstances": 1
    },
    {
        "_id": "64ff877a2ce252f32dcc082c",
        "user": {
            "id": "64ff8778fc0ec2a1a982a933"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277684498089639938"
        },
        "commitId": "64ff877ac3cbe69b66fa6a0d",
        "edit_ts": "2023-09-11T21:32:46.242Z",
        "numInstances": 1
    },
    {
        "_id": "64ff87802ce252f32dcc082f",
        "user": {
            "id": "64ff877d770599b110b1c474"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277684528154411012"
        },
        "commitId": "64ff8780c3cbe69b66fa6c15",
        "edit_ts": "2023-09-11T21:32:53.929Z",
        "numInstances": 1
    },
    {
        "_id": "64ff87a517bf60a855dcc1b7",
        "user": {
            "id": "64ff87a3dfbd52418cae7061"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277684665593364481"
        },
        "commitId": "64ff87a5c3cbe69b66fa757e",
        "numInstances": 1
    },
    {
        "_id": "64ff87a6fc0ec2a1a982a936",
        "user": {
            "id": "64ff87a42ce252f32dcc0832"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277684687068200962"
        },
        "commitId": "64ff87a6c3cbe69b66fa7670",
        "edit_ts": "2023-09-11T21:33:30.007Z",
        "numInstances": 1
    },
    {
        "_id": "64ff87a917bf60a855dcc1ba",
        "user": {
            "id": "64ff87a61b0b62947c1032f7"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277684699953102849"
        },
        "commitId": "64ff87a9c3cbe69b66fa789e",
        "edit_ts": "2023-09-11T21:33:33.088Z",
        "numInstances": 1
    },
    {
        "_id": "64ff87abdfbd52418cae7064",
        "user": {
            "id": "64ff87a994cd52bc58ff8012"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277684708543037446"
        },
        "commitId": "64ff87abc3cbe69b66fa7a1d",
        "edit_ts": "2023-09-11T21:33:35.113Z",
        "numInstances": 1
    },
    {
        "_id": "64ff87b4dfbd52418cae7067",
        "user": {
            "id": "64ff87b217bf60a855dcc1c4"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277684747197743106"
        },
        "commitId": "64ff87b4c3cbe69b66fa7f60",
        "edit_ts": "2023-09-11T21:33:44.544Z",
        "numInstances": 1
    },
    {
        "_id": "64ff87daa6501b10ded5b115",
        "user": {
            "id": "64ff87d8a6501b10ded5b114"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277684893226631176"
        },
        "commitId": "64ff87dac3cbe69b66fa88ce",
        "numInstances": 1
    },
    {
        "_id": "64ff87e0770599b110b1c47c",
        "user": {
            "id": "64ff87de770599b110b1c479"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277684940471271425"
        },
        "commitId": "64ff87e0c3cbe69b66fa8ae9",
        "edit_ts": "2023-09-11T21:34:29.143Z",
        "numInstances": 1
    },
    {
        "_id": "64ff87e72ce252f32dcc083b",
        "user": {
            "id": "64ff87e4a6501b10ded5b117"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277684966241075205"
        },
        "commitId": "64ff87e7c3cbe69b66fa8e34",
        "edit_ts": "2023-09-11T21:34:35.290Z",
        "numInstances": 1
    },
    {
        "_id": "64ff87ee770599b110b1c483",
        "user": {
            "id": "64ff87eb770599b110b1c482"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277684992010878978"
        },
        "commitId": "64ff87eec3cbe69b66fa90f4",
        "edit_ts": "2023-09-11T21:34:41.919Z",
        "numInstances": 1
    },
    {
        "_id": "64ff8de4ff14239b8bddb32f",
        "user": {
            "id": "64ff8de1c37f32ca111ca172"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277691546130972679"
        },
        "commitId": "64ff8de4c3cbe69b66fb6aae",
        "edit_ts": "2023-09-11T22:00:07.806Z",
        "numInstances": 1
    },
    {
        "_id": "64ff8de6c37f32ca111ca177",
        "user": {
            "id": "64ff8de3c37f32ca111ca173"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277691554720907267"
        },
        "commitId": "64ff8de6c3cbe69b66fb6bdc",
        "edit_ts": "2023-09-11T22:00:09.563Z",
        "numInstances": 1
    },
    {
        "_id": "64ff8de7ff14239b8bddb330",
        "user": {
            "id": "64ff8de4c37f32ca111ca174"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277691559015874563"
        },
        "commitId": "64ff8de7c3cbe69b66fb6c2a",
        "edit_ts": "2023-09-11T22:00:10.719Z",
        "numInstances": 1
    },
    {
        "_id": "64ff8df5c37f32ca111ca17e",
        "user": {
            "id": "64ff8df3c37f32ca111ca17d"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277691623440384002"
        },
        "commitId": "64ff8df5c3cbe69b66fb7216",
        "edit_ts": "2023-09-11T22:00:25.169Z",
        "numInstances": 1
    },
    {
        "_id": "64ff9a9fb39211e716e4b409",
        "user": {
            "id": "64ff9a9ef72bc1f6f0d45846"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277705530544488452"
        },
        "commitId": "64ff9a9fc3cbe69b66fd04ae",
        "numInstances": 1
    },
    {
        "_id": "64ff9aa9f72bc1f6f0d45851",
        "user": {
            "id": "64ff9aa5b39211e716e4b40e"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277705586379063302"
        },
        "commitId": "64ff9aa9c3cbe69b66fd0920",
        "edit_ts": "2023-09-11T22:54:36.509Z",
        "numInstances": 1
    },
    {
        "_id": "64ff9aa9f72bc1f6f0d45852",
        "user": {
            "id": "64ff9aa7f72bc1f6f0d4584f"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277705590674030616"
        },
        "commitId": "64ff9aa9c3cbe69b66fd0984",
        "edit_ts": "2023-09-11T22:54:37.296Z",
        "numInstances": 1
    },
    {
        "_id": "64ff9aabb39211e716e4b40f",
        "user": {
            "id": "64ff9aa8f72bc1f6f0d45850"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277705594968997890"
        },
        "commitId": "64ff9aabc3cbe69b66fd0a27",
        "edit_ts": "2023-09-11T22:54:38.274Z",
        "numInstances": 1
    },
    {
        "_id": "64ff9d41868bb7912317d498",
        "user": {
            "id": "64ff9d3f9f9a23ae8e7fafb6"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277708438237347851"
        },
        "commitId": "64ff9d41c3cbe69b66fd5a92",
        "edit_ts": "2023-09-11T23:05:40.992Z",
        "numInstances": 1
    },
    {
        "_id": "64ff9d4314c25f290ebd49cd",
        "user": {
            "id": "64ff9d419d6f1aecbf21fa48"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277708446827282435"
        },
        "commitId": "64ff9d43c3cbe69b66fd5b41",
        "edit_ts": "2023-09-11T23:05:42.728Z",
        "numInstances": 1
    },
    {
        "_id": "64ff9d4a9d6f1aecbf21fa4d",
        "user": {
            "id": "64ff9d47868bb7912317d499"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277708476892053515"
        },
        "commitId": "64ff9d4ac3cbe69b66fd5e8f",
        "edit_ts": "2023-09-11T23:05:49.880Z",
        "numInstances": 1
    },
    {
        "_id": "64ffa30d1b5f9059b8a12d3d",
        "user": {
            "id": "64ffa30b1b5f9059b8a12d37"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277714816263782402"
        },
        "commitId": "64ffa30dc3cbe69b66fe06c8",
        "edit_ts": "2023-09-11T23:30:25.482Z",
        "numInstances": 1
    },
    {
        "_id": "64ffa313f291e4cc2900d670",
        "user": {
            "id": "64ffa311f291e4cc2900d66e"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277714846328553476"
        },
        "commitId": "64ffa313c3cbe69b66fe08de",
        "edit_ts": "2023-09-11T23:30:32.712Z",
        "numInstances": 1
    },
    {
        "_id": "64ffa3141b5f9059b8a12d42",
        "user": {
            "id": "64ffa312f291e4cc2900d66f"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277714842033586179"
        },
        "commitId": "64ffa314c3cbe69b66fe093d",
        "edit_ts": "2023-09-11T23:30:31.818Z",
        "numInstances": 1
    },
    {
        "_id": "64ffa322f291e4cc2900d675",
        "user": {
            "id": "64ffa31ff291e4cc2900d674"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277714902163128321"
        },
        "commitId": "64ffa322c3cbe69b66fe0dca",
        "edit_ts": "2023-09-11T23:30:45.394Z",
        "numInstances": 1
    },
    {
        "_id": "64ffa66d51a84fac005b44f9",
        "user": {
            "id": "64ffa66bf90dc4b858b38ff5"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277718522820558850"
        },
        "commitId": "64ffa66dc3cbe69b66fe6f4d",
        "edit_ts": "2023-09-11T23:44:48.947Z",
        "numInstances": 1
    },
    {
        "_id": "64ffa69c17aba50b435cb6bc",
        "user": {
            "id": "64ffa69b51a84fac005b44fe"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277718711799119875"
        },
        "commitId": "64ffa69cc3cbe69b66fe7671",
        "numInstances": 1
    },
    {
        "_id": "64ffa6a351a84fac005b4501",
        "user": {
            "id": "64ffa6a1f90dc4b858b38ff8"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277718754748792835"
        },
        "commitId": "64ffa6a3c3cbe69b66fe79ac",
        "edit_ts": "2023-09-11T23:45:42.894Z",
        "numInstances": 1
    },
    {
        "_id": "64ffa6a717aba50b435cb6c0",
        "user": {
            "id": "64ffa6a551a84fac005b4503"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277718771928662018"
        },
        "commitId": "64ffa6a7c3cbe69b66fe7b46",
        "edit_ts": "2023-09-11T23:45:46.559Z",
        "numInstances": 1
    },
    {
        "_id": "64ffa6b051a84fac005b4508",
        "user": {
            "id": "64ffa6adf90dc4b858b38ffd"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277718810583367681"
        },
        "commitId": "64ffa6b0c3cbe69b66fe7efa",
        "edit_ts": "2023-09-11T23:45:55.594Z",
        "numInstances": 1
    },
    {
        "_id": "64ffa82217aba50b435cb6c5",
        "user": {
            "id": "64ffa82151a84fac005b450b"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277720404016234499"
        },
        "commitId": "64ffa822c3cbe69b66feab3e",
        "edit_ts": "2023-09-11T23:52:06.336Z",
        "numInstances": 1
    },
    {
        "_id": "64ffa858f90dc4b858b39002",
        "user": {
            "id": "64ffa85717aba50b435cb6cd"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277720618764599302"
        },
        "commitId": "64ffa858c3cbe69b66feb4c8",
        "numInstances": 1
    },
    {
        "_id": "64ffa85a17aba50b435cb6cf",
        "user": {
            "id": "64ffa8589d798ad65f870fe0"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277720640239435778"
        },
        "commitId": "64ffa85ac3cbe69b66feb5a7",
        "edit_ts": "2023-09-11T23:53:01.078Z",
        "numInstances": 1
    },
    {
        "_id": "64ffa85af90dc4b858b39003",
        "user": {
            "id": "64ffa85817aba50b435cb6ce"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277720644534403074"
        },
        "commitId": "64ffa85ac3cbe69b66feb5d9",
        "edit_ts": "2023-09-11T23:53:02.337Z",
        "numInstances": 1
    },
    {
        "_id": "64ffa864f90dc4b858b3900b",
        "user": {
            "id": "64ffa862f90dc4b858b3900a"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277720683189108737"
        },
        "commitId": "64ffa864c3cbe69b66feba8e",
        "edit_ts": "2023-09-11T23:53:11.870Z",
        "numInstances": 1
    },
    {
        "_id": "64ffa9239d798ad65f870fe7",
        "user": {
            "id": "64ffa9219d798ad65f870fe6"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277721507822829569"
        },
        "commitId": "64ffa923c3cbe69b66fed300",
        "edit_ts": "2023-09-11T23:56:23.129Z",
        "numInstances": 1
    },
    {
        "_id": "64ffa95817aba50b435cb6db",
        "user": {
            "id": "64ffa956f90dc4b858b39014"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277721731161128962"
        },
        "commitId": "64ffa958c3cbe69b66fedb89",
        "edit_ts": "2023-09-11T23:57:15.777Z",
        "numInstances": 1
    },
    {
        "_id": "64ffa95c9d798ad65f870fec",
        "user": {
            "id": "64ffa95a17aba50b435cb6dc"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277721748340998149"
        },
        "commitId": "64ffa95cc3cbe69b66fedda3",
        "edit_ts": "2023-09-11T23:57:19.375Z",
        "numInstances": 1
    },
    {
        "_id": "64ffa95cf90dc4b858b39018",
        "user": {
            "id": "64ffa958f90dc4b858b39015"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277721752635965443"
        },
        "commitId": "64ffa95cc3cbe69b66feddce",
        "edit_ts": "2023-09-11T23:57:20.988Z",
        "numInstances": 1
    },
    {
        "_id": "64ffa961f90dc4b858b3901c",
        "user": {
            "id": "64ffa95ff90dc4b858b3901b"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277721774110801922"
        },
        "commitId": "64ffa961c3cbe69b66fee088",
        "edit_ts": "2023-09-11T23:57:25.430Z",
        "numInstances": 1
    },
    {
        "_id": "64ffdb6da2d8fa72af47f9b6",
        "user": {
            "id": "64ffdb6bb817f2717edc0aea"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277776784051929089"
        },
        "commitId": "64ffdb6dc3cbe69b66048350",
        "numInstances": 1
    },
    {
        "_id": "64ffdb9d9134d5f46ac4c5ff",
        "user": {
            "id": "64ffdb9ca2d8fa72af47f9bb"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277776990210359303"
        },
        "commitId": "64ffdb9dc3cbe69b66048b57",
        "numInstances": 1
    },
    {
        "_id": "64ffdba39134d5f46ac4c600",
        "user": {
            "id": "64ffdba1b817f2717edc0aef"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277777028865064961"
        },
        "commitId": "64ffdba3c3cbe69b66048d97",
        "edit_ts": "2023-09-12T03:31:50.491Z",
        "numInstances": 1
    },
    {
        "_id": "64ffdba79134d5f46ac4c603",
        "user": {
            "id": "64ffdba5b817f2717edc0af2"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277777050339901442"
        },
        "commitId": "64ffdba7c3cbe69b66048eed",
        "edit_ts": "2023-09-12T03:31:55.203Z",
        "numInstances": 1
    },
    {
        "_id": "64ffdbddb817f2717edc0af9",
        "user": {
            "id": "64ffdbdb10f2cfe0416fb66f"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277777282268135425"
        },
        "commitId": "64ffdbddc3cbe69b66049819",
        "edit_ts": "2023-09-12T03:32:49.873Z",
        "numInstances": 1
    },
    {
        "_id": "64fff09ff839ef1b45566fb6",
        "user": {
            "id": "64fff09df839ef1b45566fb1"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277800105724346371"
        },
        "commitId": "64fff09fc3cbe69b6606ede8",
        "edit_ts": "2023-09-12T05:01:23.311Z",
        "numInstances": 1
    },
    {
        "_id": "64fff0a24c0e4c8e2b2a2707",
        "user": {
            "id": "64fff09f4c0e4c8e2b2a2704"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277800118609248257"
        },
        "commitId": "64fff0a2c3cbe69b6606ef10",
        "edit_ts": "2023-09-12T05:01:26.176Z",
        "numInstances": 1
    },
    {
        "_id": "64fff0a44c0e4c8e2b2a2709",
        "user": {
            "id": "64fff0a1f839ef1b45566fb7"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277800122904215557"
        },
        "commitId": "64fff0a4c3cbe69b6606efda",
        "edit_ts": "2023-09-12T05:01:27.471Z",
        "numInstances": 1
    },
    {
        "_id": "64fff0a7f839ef1b45566fbc",
        "user": {
            "id": "64fff0a34c0e4c8e2b2a2708"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277800140084084740"
        },
        "commitId": "64fff0a7c3cbe69b6606f161",
        "edit_ts": "2023-09-12T05:01:31.322Z",
        "numInstances": 1
    },
    {
        "_id": "64ff6851f0b3287138d9c561",
        "user": {
            "id": "5d111e3789953a0906ba3973"
        },
        "ancestors": [
            {
                "_id": "64ff64f8d8e09e082e81b98b",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff683bd5c27ac0f63599e3",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            }
        ],
        "_ts": {
            "$timestamp": "7277650254315392255"
        },
        "permissionToShare": true,
        "licenses": [],
        "authorGroupAccess": {
            "math-assessment": true
        },
        "commitId": "64ff685221fc549ad3c5cbee",
        "edit_ts": "2023-09-11T19:19:53.911Z",
        "publishedTimestamp": "2023-09-11T19:19:53.911Z",
        "numInstances": 0
    },
    {
        "_id": "64ff6a02566fb55d5cda6b72",
        "user": {
            "id": "5d111e3789953a0906ba3973"
        },
        "ancestors": [
            {
                "_id": "64ff64f8d8e09e082e81b98b",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff683bd5c27ac0f63599e3",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6851f0b3287138d9c561",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff69e94f1beed04f2683ae",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            }
        ],
        "_ts": {
            "$timestamp": "7277652118331195921"
        },
        "permissionToShare": true,
        "licenses": [],
        "authorGroupAccess": {
            "math-assessment": true
        },
        "commitId": "64ff6a02c08dbffa32b30b58",
        "edit_ts": "2023-09-11T19:27:07.161Z",
        "numInstances": 0
    },
    {
        "_id": "64ff6a3aca85711fdd68e82f",
        "user": {
            "id": "5d111e3789953a0906ba3973"
        },
        "ancestors": [
            {
                "_id": "64ff64f8d8e09e082e81b98b",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff683bd5c27ac0f63599e3",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6851f0b3287138d9c561",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff69e94f1beed04f2683ae",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a02566fb55d5cda6b72",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a155c850d07f3d3db90",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a28d5a84dc179b363cb",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            }
        ],
        "_ts": {
            "$timestamp": "7277999405091782770"
        },
        "permissionToShare": true,
        "licenses": [],
        "authorGroupAccess": {
            "math-assessment": true
        },
        "commitId": "6500a5df925abcaba89224fe",
        "edit_ts": "2023-09-12T17:54:46.019Z",
        "publishedTimestamp": "2023-09-12T17:54:46.019Z",
        "numInstances": 0
    },
    {
        "_id": "64ff6a60fc16123890d804d1",
        "user": {
            "id": "5d111e3789953a0906ba3973"
        },
        "ancestors": [
            {
                "_id": "64ff64f8d8e09e082e81b98b",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff683bd5c27ac0f63599e3",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6851f0b3287138d9c561",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff69e94f1beed04f2683ae",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a02566fb55d5cda6b72",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a155c850d07f3d3db90",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a28d5a84dc179b363cb",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a3aca85711fdd68e82f",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a4daa47c93c3739cdb7",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            }
        ],
        "_ts": {
            "$timestamp": "7277652526353091374"
        },
        "permissionToShare": true,
        "licenses": [],
        "authorGroupAccess": {
            "math-assessment": true
        },
        "commitId": "64ff6a60ce6c5339c02ac999",
        "edit_ts": "2023-09-11T19:28:42.862Z",
        "publishedTimestamp": "2023-09-11T19:28:42.862Z",
        "numInstances": 0
    },
    {
        "_id": "64ff718ba9520a1e8938d808",
        "user": {
            "id": "5d111e3789953a0906ba3973"
        },
        "ancestors": [
            {
                "_id": "64ff64f8d8e09e082e81b98b",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff683bd5c27ac0f63599e3",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6851f0b3287138d9c561",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff69e94f1beed04f2683ae",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a02566fb55d5cda6b72",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a155c850d07f3d3db90",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a28d5a84dc179b363cb",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a3aca85711fdd68e82f",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a4daa47c93c3739cdb7",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a60fc16123890d804d1",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a755025349b0b4938d3",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a8633f3b9e3df04eb13",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a971931fc6080203d53",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6aa7c2e071ea3435e1c5",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6aba8a78dc7590501df0",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6acf3abb1ff474be4763",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6adee7a430617610f669",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6b359c2861703221db84",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6b45ed1333c29faca1d2",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6b5c4734470bea9020d0",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff71105e2b44594b5d5b82",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff712297b8fc4ff09425e1",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7133505fd3124e61333f",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7145de53d0d0b2ba099f",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff715b2d106b80208ca511",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff716b5ab49a5c40eca161",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff717c2b416f15466f7b2e",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            }
        ],
        "_ts": {
            "$timestamp": "7277660386143241077"
        },
        "permissionToShare": true,
        "licenses": [],
        "authorGroupAccess": {
            "math-assessment": true
        },
        "commitId": "64ff718bc08dbffa32da8040",
        "edit_ts": "2023-09-11T19:59:12.328Z",
        "numInstances": 0
    },
    {
        "_id": "64ff71f9cf2d2789f55dae05",
        "user": {
            "id": "5d111e3789953a0906ba3973"
        },
        "ancestors": [
            {
                "_id": "64ff64f8d8e09e082e81b98b",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff683bd5c27ac0f63599e3",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6851f0b3287138d9c561",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff69e94f1beed04f2683ae",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a02566fb55d5cda6b72",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a155c850d07f3d3db90",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a28d5a84dc179b363cb",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a3aca85711fdd68e82f",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a4daa47c93c3739cdb7",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a60fc16123890d804d1",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a755025349b0b4938d3",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a8633f3b9e3df04eb13",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a971931fc6080203d53",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6aa7c2e071ea3435e1c5",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6aba8a78dc7590501df0",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6acf3abb1ff474be4763",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6adee7a430617610f669",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6b359c2861703221db84",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6b45ed1333c29faca1d2",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6b5c4734470bea9020d0",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff71105e2b44594b5d5b82",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff712297b8fc4ff09425e1",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7133505fd3124e61333f",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7145de53d0d0b2ba099f",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff715b2d106b80208ca511",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff716b5ab49a5c40eca161",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff717c2b416f15466f7b2e",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff718ba9520a1e8938d808",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff719886e2a33dbfcf4d8c",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff71a88a86053de86ca929",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff71b530ba2442e7e07823",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff71decc590e165bbb02b3",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff71edd8e09e082e81bb12",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            }
        ],
        "_ts": {
            "$timestamp": "7277660875769512594"
        },
        "permissionToShare": true,
        "licenses": [],
        "authorGroupAccess": {
            "math-assessment": true
        },
        "commitId": "64ff71fa2aa846484d513af0",
        "edit_ts": "2023-09-11T20:01:06.230Z",
        "publishedTimestamp": "2023-09-11T20:01:06.230Z",
        "numInstances": 0
    },
    {
        "_id": "64ff722810af00ca2f54d4ca",
        "user": {
            "id": "5d111e3789953a0906ba3973"
        },
        "ancestors": [
            {
                "_id": "64ff64f8d8e09e082e81b98b",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff683bd5c27ac0f63599e3",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6851f0b3287138d9c561",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff69e94f1beed04f2683ae",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a02566fb55d5cda6b72",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a155c850d07f3d3db90",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a28d5a84dc179b363cb",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a3aca85711fdd68e82f",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a4daa47c93c3739cdb7",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a60fc16123890d804d1",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a755025349b0b4938d3",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a8633f3b9e3df04eb13",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a971931fc6080203d53",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6aa7c2e071ea3435e1c5",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6aba8a78dc7590501df0",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6acf3abb1ff474be4763",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6adee7a430617610f669",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6b359c2861703221db84",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6b45ed1333c29faca1d2",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6b5c4734470bea9020d0",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff71105e2b44594b5d5b82",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff712297b8fc4ff09425e1",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7133505fd3124e61333f",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7145de53d0d0b2ba099f",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff715b2d106b80208ca511",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff716b5ab49a5c40eca161",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff717c2b416f15466f7b2e",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff718ba9520a1e8938d808",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff719886e2a33dbfcf4d8c",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff71a88a86053de86ca929",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff71b530ba2442e7e07823",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff71decc590e165bbb02b3",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff71edd8e09e082e81bb12",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff71f9cf2d2789f55dae05",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff720aaa9aa2655bf05874",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7219593ce320987b487d",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            }
        ],
        "_ts": {
            "$timestamp": "7278255977848111156"
        },
        "permissionToShare": true,
        "licenses": [],
        "authorGroupAccess": {
            "math-assessment": true
        },
        "commitId": "65018f39f70c8bcfa8ea2bb2",
        "edit_ts": "2023-09-13T10:30:24.338Z",
        "publishedTimestamp": "2023-09-13T10:30:24.338Z",
        "numInstances": 0
    },
    {
        "_id": "64ff745ff20dfc1045ecda26",
        "user": {
            "id": "5d111e3789953a0906ba3973"
        },
        "ancestors": [
            {
                "_id": "64ff64f8d8e09e082e81b98b",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff683bd5c27ac0f63599e3",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6851f0b3287138d9c561",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff69e94f1beed04f2683ae",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a02566fb55d5cda6b72",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a155c850d07f3d3db90",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a28d5a84dc179b363cb",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a3aca85711fdd68e82f",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a4daa47c93c3739cdb7",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a60fc16123890d804d1",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a755025349b0b4938d3",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a8633f3b9e3df04eb13",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a971931fc6080203d53",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6aa7c2e071ea3435e1c5",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6aba8a78dc7590501df0",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6acf3abb1ff474be4763",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6adee7a430617610f669",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6b359c2861703221db84",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6b45ed1333c29faca1d2",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6b5c4734470bea9020d0",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff71105e2b44594b5d5b82",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff712297b8fc4ff09425e1",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7133505fd3124e61333f",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7145de53d0d0b2ba099f",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff715b2d106b80208ca511",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff716b5ab49a5c40eca161",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff717c2b416f15466f7b2e",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff718ba9520a1e8938d808",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff719886e2a33dbfcf4d8c",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff71a88a86053de86ca929",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff71b530ba2442e7e07823",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff71decc590e165bbb02b3",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff71edd8e09e082e81bb12",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff71f9cf2d2789f55dae05",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff720aaa9aa2655bf05874",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7219593ce320987b487d",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff722810af00ca2f54d4ca",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7236f26f2ef70b6d8951",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7246aaf2700e78da8130",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff72e2593115d1d19b629c",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff72f1e6e73d1d3497f7e9",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff72feaef8148f82c7fe59",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff73178bd17105a219ef73",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7328451cbab7e90c804a",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7337d6c09ff24c37a783",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff73472b416f15466f7b55",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7359a12f4e4ff0596918",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7368ec9b3725b5300eea",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff737be10f745a2f931d65",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff73914734470bea9021a0",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff73a52fda9cbcb3eca069",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff73c177ccb9ce6aca270d",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff73cf4734470bea9021ab",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff73dcf26f2ef70b6d8982",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff73e8d84f5d1dd42f4cd6",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff73f4885725eccccd6183",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7401063e0227500a3fd7",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff741e5fb22316f15f1bb0",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff742b4f1beed04f2684c4",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff744da7da1f1bb36ac187",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            }
        ],
        "_ts": {
            "$timestamp": "7277663491404597297"
        },
        "permissionToShare": true,
        "licenses": [],
        "authorGroupAccess": {
            "math-assessment": true
        },
        "commitId": "64ff745fc08dbffa328e94aa",
        "edit_ts": "2023-09-11T20:11:15.895Z",
        "numInstances": 0
    },
    {
        "_id": "64ff74f44f1beed04f2684d8",
        "user": {
            "id": "5d111e3789953a0906ba3973"
        },
        "ancestors": [
            {
                "_id": "64ff64f8d8e09e082e81b98b",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff683bd5c27ac0f63599e3",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6851f0b3287138d9c561",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff69e94f1beed04f2683ae",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a02566fb55d5cda6b72",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a155c850d07f3d3db90",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a28d5a84dc179b363cb",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a3aca85711fdd68e82f",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a4daa47c93c3739cdb7",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a60fc16123890d804d1",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a755025349b0b4938d3",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a8633f3b9e3df04eb13",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a971931fc6080203d53",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6aa7c2e071ea3435e1c5",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6aba8a78dc7590501df0",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6acf3abb1ff474be4763",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6adee7a430617610f669",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6b359c2861703221db84",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6b45ed1333c29faca1d2",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6b5c4734470bea9020d0",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff71105e2b44594b5d5b82",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff712297b8fc4ff09425e1",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7133505fd3124e61333f",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7145de53d0d0b2ba099f",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff715b2d106b80208ca511",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff716b5ab49a5c40eca161",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff717c2b416f15466f7b2e",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff718ba9520a1e8938d808",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff719886e2a33dbfcf4d8c",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff71a88a86053de86ca929",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff71b530ba2442e7e07823",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff71decc590e165bbb02b3",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff71edd8e09e082e81bb12",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff71f9cf2d2789f55dae05",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff720aaa9aa2655bf05874",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7219593ce320987b487d",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff722810af00ca2f54d4ca",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7236f26f2ef70b6d8951",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7246aaf2700e78da8130",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff72e2593115d1d19b629c",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff72f1e6e73d1d3497f7e9",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff72feaef8148f82c7fe59",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff73178bd17105a219ef73",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7328451cbab7e90c804a",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7337d6c09ff24c37a783",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff73472b416f15466f7b55",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7359a12f4e4ff0596918",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7368ec9b3725b5300eea",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff737be10f745a2f931d65",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff73914734470bea9021a0",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff73a52fda9cbcb3eca069",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff74cdcf23a5a9b47f225c",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff74e48341071dce784c19",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            }
        ],
        "_ts": {
            "$timestamp": "7277664139944657292"
        },
        "permissionToShare": true,
        "licenses": [],
        "authorGroupAccess": {
            "math-assessment": true
        },
        "commitId": "64ff74f4c08dbffa32b429d0",
        "edit_ts": "2023-09-11T20:13:46.140Z",
        "numInstances": 0
    },
    {
        "_id": "64ff751d4cbe19f62334b614",
        "user": {
            "id": "5d111e3789953a0906ba3973"
        },
        "ancestors": [
            {
                "_id": "64ff64f8d8e09e082e81b98b",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff683bd5c27ac0f63599e3",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6851f0b3287138d9c561",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff69e94f1beed04f2683ae",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a02566fb55d5cda6b72",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a155c850d07f3d3db90",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a28d5a84dc179b363cb",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a3aca85711fdd68e82f",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a4daa47c93c3739cdb7",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a60fc16123890d804d1",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a755025349b0b4938d3",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a8633f3b9e3df04eb13",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a971931fc6080203d53",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6aa7c2e071ea3435e1c5",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6aba8a78dc7590501df0",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6acf3abb1ff474be4763",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6adee7a430617610f669",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6b359c2861703221db84",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6b45ed1333c29faca1d2",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6b5c4734470bea9020d0",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff71105e2b44594b5d5b82",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff712297b8fc4ff09425e1",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7133505fd3124e61333f",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7145de53d0d0b2ba099f",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff715b2d106b80208ca511",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff716b5ab49a5c40eca161",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff717c2b416f15466f7b2e",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff718ba9520a1e8938d808",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff719886e2a33dbfcf4d8c",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff71a88a86053de86ca929",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff71b530ba2442e7e07823",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff71decc590e165bbb02b3",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff71edd8e09e082e81bb12",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff71f9cf2d2789f55dae05",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff720aaa9aa2655bf05874",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7219593ce320987b487d",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff722810af00ca2f54d4ca",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7236f26f2ef70b6d8951",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7246aaf2700e78da8130",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff72e2593115d1d19b629c",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff72f1e6e73d1d3497f7e9",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff72feaef8148f82c7fe59",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff73178bd17105a219ef73",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7328451cbab7e90c804a",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7337d6c09ff24c37a783",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff73472b416f15466f7b55",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7359a12f4e4ff0596918",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7368ec9b3725b5300eea",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff737be10f745a2f931d65",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff73914734470bea9021a0",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff73a52fda9cbcb3eca069",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff74cdcf23a5a9b47f225c",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff74e48341071dce784c19",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff74f44f1beed04f2684d8",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7503a9520a1e8938d87d",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff750fd63888bd09abdaf7",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            }
        ],
        "_ts": {
            "$timestamp": "7277664320333285595"
        },
        "permissionToShare": true,
        "licenses": [],
        "authorGroupAccess": {
            "math-assessment": true
        },
        "commitId": "64ff751dc08dbffa32be54e0",
        "edit_ts": "2023-09-11T20:14:28.888Z",
        "numInstances": 0
    },
    {
        "_id": "64ff75592c27dff8e24b768c",
        "user": {
            "id": "5d111e3789953a0906ba3973"
        },
        "ancestors": [
            {
                "_id": "64ff64f8d8e09e082e81b98b",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff683bd5c27ac0f63599e3",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6851f0b3287138d9c561",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff69e94f1beed04f2683ae",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a02566fb55d5cda6b72",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a155c850d07f3d3db90",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a28d5a84dc179b363cb",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a3aca85711fdd68e82f",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a4daa47c93c3739cdb7",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a60fc16123890d804d1",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a755025349b0b4938d3",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a8633f3b9e3df04eb13",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6a971931fc6080203d53",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6aa7c2e071ea3435e1c5",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6aba8a78dc7590501df0",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6acf3abb1ff474be4763",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6adee7a430617610f669",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6b359c2861703221db84",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6b45ed1333c29faca1d2",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff6b5c4734470bea9020d0",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff71105e2b44594b5d5b82",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff712297b8fc4ff09425e1",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7133505fd3124e61333f",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7145de53d0d0b2ba099f",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff715b2d106b80208ca511",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff716b5ab49a5c40eca161",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff717c2b416f15466f7b2e",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff718ba9520a1e8938d808",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff719886e2a33dbfcf4d8c",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff71a88a86053de86ca929",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff71b530ba2442e7e07823",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff71decc590e165bbb02b3",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff71edd8e09e082e81bb12",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff71f9cf2d2789f55dae05",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff720aaa9aa2655bf05874",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7219593ce320987b487d",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff722810af00ca2f54d4ca",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7236f26f2ef70b6d8951",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7246aaf2700e78da8130",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff72e2593115d1d19b629c",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff72f1e6e73d1d3497f7e9",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff72feaef8148f82c7fe59",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff73178bd17105a219ef73",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7328451cbab7e90c804a",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7337d6c09ff24c37a783",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff73472b416f15466f7b55",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7359a12f4e4ff0596918",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7368ec9b3725b5300eea",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff737be10f745a2f931d65",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff73914734470bea9021a0",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff73a52fda9cbcb3eca069",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff74cdcf23a5a9b47f225c",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff74e48341071dce784c19",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff74f44f1beed04f2684d8",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff7503a9520a1e8938d87d",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff750fd63888bd09abdaf7",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff751d4cbe19f62334b614",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff75311daef64da058b690",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff753e2c03a5683d243471",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            },
            {
                "_id": "64ff754bc2e071ea3435e2d0",
                "user": {
                    "id": "5d111e3789953a0906ba3973"
                }
            }
        ],
        "_ts": {
            "$timestamp": "7277664573736354818"
        },
        "permissionToShare": true,
        "licenses": [],
        "authorGroupAccess": {
            "math-assessment": true
        },
        "commitId": "64ff7559c08dbffa32cdcba4",
        "edit_ts": "2023-09-11T20:15:27.414Z",
        "numInstances": 0
    },
    {
        "_id": "65000a13c32c3bf7b65ffbb1",
        "user": {
            "id": "65000a11c32c3bf7b65ffbae"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277828087436279817"
        },
        "commitId": "65000a13c3cbe69b660a1ecb",
        "edit_ts": "2023-09-12T06:49:58.566Z",
        "numInstances": 1
    },
    {
        "_id": "65000a17c32c3bf7b65ffbb7",
        "user": {
            "id": "65000a15fad7aeeba108f70d"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277828108911116289"
        },
        "commitId": "65000a17c3cbe69b660a2101",
        "edit_ts": "2023-09-12T06:50:03.511Z",
        "numInstances": 1
    },
    {
        "_id": "65000a1dc32c3bf7b65ffbba",
        "user": {
            "id": "65000a1afad7aeeba108f712"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277828130385952772"
        },
        "commitId": "65000a1dc3cbe69b660a22bf",
        "edit_ts": "2023-09-12T06:50:08.371Z",
        "numInstances": 1
    },
    {
        "_id": "65000a1dc32c3bf7b65ffbbb",
        "user": {
            "id": "65000a1bfad7aeeba108f713"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277828134680920066"
        },
        "commitId": "65000a1dc3cbe69b660a236e",
        "edit_ts": "2023-09-12T06:50:09.157Z",
        "numInstances": 1
    },
    {
        "_id": "650022faee93c3f2ce70a76b",
        "user": {
            "id": "650022f89836a0107a91cac6"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277855467852791812"
        },
        "commitId": "650022fac3cbe69b662397de",
        "edit_ts": "2023-09-12T08:36:13.986Z",
        "numInstances": 1
    },
    {
        "_id": "65002337ee93c3f2ce70a773",
        "user": {
            "id": "65002336598e97edea1475e6"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277855734140764165"
        },
        "commitId": "65002337c3cbe69b6623a1de",
        "edit_ts": "2023-09-12T08:37:15.629Z",
        "numInstances": 1
    },
    {
        "_id": "6500233bee93c3f2ce70a776",
        "user": {
            "id": "650023399836a0107a91cacb"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277855747025666050"
        },
        "commitId": "6500233bc3cbe69b6623a32c",
        "edit_ts": "2023-09-12T08:37:18.673Z",
        "numInstances": 1
    },
    {
        "_id": "6500233f9836a0107a91cacc",
        "user": {
            "id": "6500233c6b4ad0852ff9b0b0"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277855768500502531"
        },
        "commitId": "6500233fc3cbe69b6623a57d",
        "edit_ts": "2023-09-12T08:37:23.890Z",
        "numInstances": 1
    },
    {
        "_id": "650023416b4ad0852ff9b0b4",
        "user": {
            "id": "6500233d6b4ad0852ff9b0b3"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277855772795469826"
        },
        "commitId": "65002341c3cbe69b6623a657",
        "edit_ts": "2023-09-12T08:37:24.905Z",
        "numInstances": 1
    },
    {
        "_id": "65002407a3142204e78bc632",
        "user": {
            "id": "650024058e1d5d9bbe7e6933"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277856627493961737"
        },
        "commitId": "65002407c3cbe69b6623c128",
        "edit_ts": "2023-09-12T08:40:43.972Z",
        "numInstances": 1
    },
    {
        "_id": "6500240b8e1d5d9bbe7e6935",
        "user": {
            "id": "650024098e1d5d9bbe7e6934"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277856640378863627"
        },
        "commitId": "6500240bc3cbe69b6623c2c4",
        "edit_ts": "2023-09-12T08:40:46.859Z",
        "numInstances": 1
    },
    {
        "_id": "6500240ca3142204e78bc637",
        "user": {
            "id": "65002408a3142204e78bc634"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277856644673830913"
        },
        "commitId": "6500240cc3cbe69b6623c343",
        "edit_ts": "2023-09-12T08:40:47.731Z",
        "numInstances": 1
    },
    {
        "_id": "650024148e1d5d9bbe7e6939",
        "user": {
            "id": "650024118e1d5d9bbe7e6938"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277856679033569289"
        },
        "commitId": "65002414c3cbe69b6623c790",
        "edit_ts": "2023-09-12T08:40:55.936Z",
        "numInstances": 1
    },
    {
        "_id": "65002bc308d9ad68a8077783",
        "user": {
            "id": "65002bc10d05df9d8344ddc4"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277865127234240519"
        },
        "commitId": "65002bc3c3cbe69b6624a8b8",
        "edit_ts": "2023-09-12T09:13:42.863Z",
        "numInstances": 1
    },
    {
        "_id": "65002bc50d05df9d8344ddc7",
        "user": {
            "id": "65002bc308d9ad68a8077784"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277865144414109697"
        },
        "commitId": "65002bc5c3cbe69b6624a9db",
        "edit_ts": "2023-09-12T09:13:46.126Z",
        "numInstances": 1
    },
    {
        "_id": "65002bc90d05df9d8344ddcb",
        "user": {
            "id": "65002bc608d9ad68a8077787"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277865157299011585"
        },
        "commitId": "65002bc9c3cbe69b6624ab90",
        "edit_ts": "2023-09-12T09:13:49.145Z",
        "numInstances": 1
    },
    {
        "_id": "65002bcc08d9ad68a807778a",
        "user": {
            "id": "65002bc80d05df9d8344ddca"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277865165888946181"
        },
        "commitId": "65002bccc3cbe69b6624ad3c",
        "edit_ts": "2023-09-12T09:13:51.909Z",
        "numInstances": 1
    },
    {
        "_id": "65002dd30c19745af766faf2",
        "user": {
            "id": "65002dd1cdb46ca4a87df194"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277867399271940106"
        },
        "commitId": "65002dd3c3cbe69b6624ec54",
        "edit_ts": "2023-09-12T09:22:31.500Z",
        "numInstances": 1
    },
    {
        "_id": "65002dd50c19745af766faf3",
        "user": {
            "id": "65002dd30c19745af766faf1"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277867403566907394"
        },
        "commitId": "65002dd5c3cbe69b6624ecc3",
        "edit_ts": "2023-09-12T09:22:32.711Z",
        "numInstances": 1
    },
    {
        "_id": "65002dd5cdb46ca4a87df195",
        "user": {
            "id": "65002dd20c19745af766faf0"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277867403566907400"
        },
        "commitId": "65002dd5c3cbe69b6624ed1b",
        "edit_ts": "2023-09-12T09:22:32.835Z",
        "numInstances": 1
    },
    {
        "_id": "65002e06cdb46ca4a87df1a0",
        "user": {
            "id": "65002e03cdb46ca4a87df19f"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277867614020304898"
        },
        "commitId": "65002e06c3cbe69b6624f6a5",
        "edit_ts": "2023-09-12T09:23:21.536Z",
        "numInstances": 1
    },
    {
        "_id": "65002eed042d00533485b9e8",
        "user": {
            "id": "65002eeac03aa592343c7f9c"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277868610452717571"
        },
        "commitId": "65002eedc3cbe69b662513f8",
        "edit_ts": "2023-09-12T09:27:13.620Z",
        "numInstances": 1
    },
    {
        "_id": "65002f24042d00533485b9ed",
        "user": {
            "id": "65002f22042d00533485b9ec"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277868846675918849"
        },
        "commitId": "65002f24c3cbe69b66251c0a",
        "edit_ts": "2023-09-12T09:28:08.533Z",
        "numInstances": 1
    },
    {
        "_id": "65002f29042d00533485b9f3",
        "user": {
            "id": "65002f27c03aa592343c7f9d"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277868868150755329"
        },
        "commitId": "65002f29c3cbe69b66251e8b",
        "edit_ts": "2023-09-12T09:28:13.168Z",
        "numInstances": 1
    },
    {
        "_id": "65002f2e05d8919497b85fef",
        "user": {
            "id": "65002f2cc03aa592343c7fa2"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277868889625591810"
        },
        "commitId": "65002f2ec3cbe69b66252088",
        "edit_ts": "2023-09-12T09:28:18.743Z",
        "numInstances": 1
    },
    {
        "_id": "65002f47c03aa592343c7fa5",
        "user": {
            "id": "65002f4405d8919497b85ff2"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277868992704806915"
        },
        "commitId": "65002f47c3cbe69b66252679",
        "edit_ts": "2023-09-12T09:28:42.903Z",
        "numInstances": 1
    },
    {
        "_id": "6500303b6656b1af0e2bb6c1",
        "user": {
            "id": "65003039d3bb00e2e2b827a2"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277870040676827150"
        },
        "commitId": "6500303bc3cbe69b662546d7",
        "edit_ts": "2023-09-12T09:32:46.835Z",
        "numInstances": 1
    },
    {
        "_id": "6500303f8952f1624f214154",
        "user": {
            "id": "6500303ebfcbba0576e4fbda"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277870062151663621"
        },
        "commitId": "6500303fc3cbe69b662549c3",
        "edit_ts": "2023-09-12T09:32:51.695Z",
        "numInstances": 1
    },
    {
        "_id": "650030428952f1624f214155",
        "user": {
            "id": "65003040bfcbba0576e4fbdc"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277870057856696321"
        },
        "commitId": "65003042c3cbe69b66254b4f",
        "numInstances": 1
    },
    {
        "_id": "65003044bfcbba0576e4fbe3",
        "user": {
            "id": "650030428952f1624f214156"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277870079331532802"
        },
        "commitId": "65003044c3cbe69b66254c87",
        "edit_ts": "2023-09-12T09:32:55.612Z",
        "numInstances": 1
    },
    {
        "_id": "65003045bfcbba0576e4fbe4",
        "user": {
            "id": "650030438952f1624f214157"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277870083626500099"
        },
        "commitId": "65003045c3cbe69b66254d46",
        "edit_ts": "2023-09-12T09:32:56.857Z",
        "numInstances": 1
    },
    {
        "_id": "6500306ca9fa1b335d294ca9",
        "user": {
            "id": "6500306ba9fa1b335d294ca8"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277870238245322755"
        },
        "commitId": "6500306cc3cbe69b66255720",
        "numInstances": 1
    },
    {
        "_id": "6500306efa9f646bedb51da9",
        "user": {
            "id": "6500306cebe788a0a344afaa"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277870264015126530"
        },
        "commitId": "6500306ec3cbe69b66255866",
        "edit_ts": "2023-09-12T09:33:38.222Z",
        "numInstances": 1
    },
    {
        "_id": "6500306febe788a0a344afac",
        "user": {
            "id": "6500306cfa9f646bedb51da8"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277870264015126596"
        },
        "commitId": "6500306fc3cbe69b662559dd",
        "edit_ts": "2023-09-12T09:33:38.911Z",
        "numInstances": 1
    },
    {
        "_id": "6500306ffa9f646bedb51daa",
        "user": {
            "id": "6500306debe788a0a344afab"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277870264015126534"
        },
        "commitId": "6500306fc3cbe69b66255a0f",
        "edit_ts": "2023-09-12T09:33:38.304Z",
        "numInstances": 1
    },
    {
        "_id": "650030777a930d8922903f57",
        "user": {
            "id": "650030756656b1af0e2bb6c7"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277870302669832194"
        },
        "commitId": "65003077c3cbe69b66255fda",
        "edit_ts": "2023-09-12T09:33:47.075Z",
        "numInstances": 1
    },
    {
        "_id": "6500307ad3bb00e2e2b827a7",
        "user": {
            "id": "650030776656b1af0e2bb6c8"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277870311259766791"
        },
        "commitId": "6500307ac3cbe69b6625613a",
        "edit_ts": "2023-09-12T09:33:49.999Z",
        "numInstances": 1
    },
    {
        "_id": "6500307febe788a0a344afb2",
        "user": {
            "id": "6500307cebe788a0a344afb1"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277870337029570653"
        },
        "commitId": "6500307fc3cbe69b662563d4",
        "edit_ts": "2023-09-12T09:33:55.545Z",
        "numInstances": 1
    },
    {
        "_id": "65003082a9fa1b335d294cb4",
        "user": {
            "id": "6500307ed3bb00e2e2b827a8"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277870349914472450"
        },
        "commitId": "65003082c3cbe69b6625654d",
        "edit_ts": "2023-09-12T09:33:58.631Z",
        "numInstances": 1
    },
    {
        "_id": "650030a07b08789790a8aac8",
        "user": {
            "id": "6500309fc53498db53220305"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277870474468524035"
        },
        "commitId": "650030a0c3cbe69b66256dbb",
        "edit_ts": "2023-09-12T09:34:27.516Z",
        "numInstances": 1
    },
    {
        "_id": "650030a2c53498db53220308",
        "user": {
            "id": "650030a07b08789790a8aac7"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277870470173556748"
        },
        "commitId": "650030a2c3cbe69b66256f39",
        "numInstances": 1
    },
    {
        "_id": "650030a7c53498db5322030a",
        "user": {
            "id": "650030a5c53498db53220309"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277870504533295105"
        },
        "commitId": "650030a7c3cbe69b66257179",
        "edit_ts": "2023-09-12T09:34:34.414Z",
        "numInstances": 1
    },
    {
        "_id": "650030a9c53498db5322030b",
        "user": {
            "id": "650030a67b08789790a8aad1"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277870517418196995"
        },
        "commitId": "650030a9c3cbe69b6625725f",
        "edit_ts": "2023-09-12T09:34:37.998Z",
        "numInstances": 1
    },
    {
        "_id": "6500310e16afa659bff0f0ed",
        "user": {
            "id": "6500310c9681ce1a3452ee5b"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277870951209893889"
        },
        "commitId": "6500310ec3cbe69b66258136",
        "edit_ts": "2023-09-12T09:36:18.639Z",
        "numInstances": 1
    },
    {
        "_id": "650031499681ce1a3452ee5f",
        "user": {
            "id": "6500314772d976f2c626a938"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277871200317997064"
        },
        "commitId": "65003149c3cbe69b66258ae7",
        "edit_ts": "2023-09-12T09:37:16.839Z",
        "numInstances": 1
    },
    {
        "_id": "6500314c0a8157767dad6184",
        "user": {
            "id": "650031490a8157767dad6183"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277871213202898955"
        },
        "commitId": "6500314cc3cbe69b66258c63",
        "edit_ts": "2023-09-12T09:37:19.800Z",
        "numInstances": 1
    },
    {
        "_id": "6500314f0a8157767dad618b",
        "user": {
            "id": "6500314d9681ce1a3452ee62"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277871226087800834"
        },
        "commitId": "6500314fc3cbe69b66258e7e",
        "edit_ts": "2023-09-12T09:37:22.436Z",
        "numInstances": 1
    },
    {
        "_id": "6500315372d976f2c626a93d",
        "user": {
            "id": "6500315172d976f2c626a93c"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277871243267670019"
        },
        "commitId": "65003153c3cbe69b6625906f",
        "edit_ts": "2023-09-12T09:37:26.729Z",
        "numInstances": 1
    },
    {
        "_id": "650031e7a688c5b736088937",
        "user": {
            "id": "650031e54c952e9f000a3cc6"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277871883217797122"
        },
        "commitId": "650031e7c3cbe69b6625a4ed",
        "edit_ts": "2023-09-12T09:39:55.159Z",
        "numInstances": 1
    },
    {
        "_id": "650032204c952e9f000a3ccd",
        "user": {
            "id": "6500321ee4120abcba779fb5"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277872119440998403"
        },
        "commitId": "65003220c3cbe69b6625af04",
        "edit_ts": "2023-09-12T09:40:50.840Z",
        "numInstances": 1
    },
    {
        "_id": "650032224c952e9f000a3cce",
        "user": {
            "id": "65003220e4120abcba779fb6"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277872119440998406"
        },
        "commitId": "65003222c3cbe69b6625b0b5",
        "numInstances": 1
    },
    {
        "_id": "65003223c3e7d5b5b4422566",
        "user": {
            "id": "65003221c3e7d5b5b4422565"
        },
        "permissionToShare": true,
        "_ts": {
            "$timestamp": "7277872140915834882"
        },
        "commitId": "65003223c3cbe69b6625b197",
        "edit_ts": "2023-09-12T09:40:55.495Z",
        "numInstances": 1
    }
] satisfies IActivityMeta[];