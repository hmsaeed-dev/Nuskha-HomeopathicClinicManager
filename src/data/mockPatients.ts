import { Patient } from '@/types';

/**
 * Extended Mock Patients Dataset (42 Clinically Validated Records)
 * Realistically modeled for single-doctor homoeopathic OPD practice
 * in Taxila / Wah / Rawalpindi region with balanced multi-horizon distribution.
 */
export const EXTENDED_PATIENTS: Patient[] = [
  {
    "id": "p-6",
    "mrn": "NK-1511",
    "fullName": "Tariq Mehmood",
    "relationType": "s/o",
    "relativeName": "Abdul Majeed",
    "age": 44,
    "gender": "Male",
    "phone": "0301-7350753",
    "locality": "Wah Cantt",
    "totalVisits": 14,
    "lastVisitDate": "22 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-p-6-1",
        "name": "Chronic Gastric Acidity & Reflux",
        "severity": "Severe",
        "trend": "Improving",
        "duration": "2 yrs"
      }
    ],
    "severityTrend": {
      "complaintName": "Chronic Gastric Acidity & Reflux",
      "overallRelief": "-65% relief",
      "history": [
        {
          "label": "17 Nov",
          "date": "17 Nov 2026",
          "score": 80
        },
        {
          "label": "20 Nov",
          "date": "20 Nov 2026",
          "score": 60
        },
        {
          "label": "21 Nov",
          "date": "21 Nov 2026",
          "score": 40
        },
        {
          "label": "22 Nov",
          "date": "22 Nov 2026",
          "score": 20
        }
      ]
    },
    "pastVisits": [
      {
        "id": "v-1037",
        "patientId": "p-6",
        "date": "22 Nov 2026",
        "tokenNo": 10,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Chronic Gastric Acidity & Reflux since 2 yrs.",
        "prescriptions": [
          {
            "id": "rx-2047",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1061",
        "patientId": "p-6",
        "date": "21 Nov 2026",
        "tokenNo": 14,
        "reaction": "Improved",
        "symptoms": "Chronic Gastric Acidity & Reflux markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2082",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1066",
        "patientId": "p-6",
        "date": "20 Nov 2026",
        "tokenNo": 2,
        "reaction": "Improved",
        "symptoms": "Chronic Gastric Acidity & Reflux markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2087",
            "remedy": "Nux Vomica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          },
          {
            "id": "rx-2088",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1117",
        "patientId": "p-6",
        "date": "17 Nov 2026",
        "tokenNo": 8,
        "reaction": "No Change",
        "symptoms": "Persistent Chronic Gastric Acidity & Reflux. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2159",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          },
          {
            "id": "rx-2160",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1197",
        "patientId": "p-6",
        "date": "11 Nov 2026",
        "tokenNo": 7,
        "reaction": "No Change",
        "symptoms": "Persistent Chronic Gastric Acidity & Reflux. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2272",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1227",
        "patientId": "p-6",
        "date": "08 Nov 2026",
        "tokenNo": 1,
        "reaction": "Improved",
        "symptoms": "Chronic Gastric Acidity & Reflux markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2315",
            "remedy": "Nux Vomica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1320",
        "patientId": "p-6",
        "date": "01 Nov 2026",
        "tokenNo": 2,
        "reaction": "Improved",
        "symptoms": "Chronic Gastric Acidity & Reflux markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2449",
            "remedy": "Nux Vomica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": true
          },
          {
            "id": "rx-2450",
            "remedy": "Rhus Toxicodendron",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1382",
        "patientId": "p-6",
        "date": "18 Sep 2026",
        "tokenNo": 15,
        "reaction": "Improved",
        "symptoms": "Chronic Gastric Acidity & Reflux markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2538",
            "remedy": "Nux Vomica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          },
          {
            "id": "rx-2539",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1408",
        "patientId": "p-6",
        "date": "22 Aug 2026",
        "tokenNo": 11,
        "reaction": "Improved",
        "symptoms": "Chronic Gastric Acidity & Reflux markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2572",
            "remedy": "Nux Vomica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": true
          },
          {
            "id": "rx-2573",
            "remedy": "Rhus Toxicodendron",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1453",
        "patientId": "p-6",
        "date": "04 Jul 2026",
        "tokenNo": 12,
        "reaction": "Improved",
        "symptoms": "Chronic Gastric Acidity & Reflux markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2636",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1460",
        "patientId": "p-6",
        "date": "16 Jun 2026",
        "tokenNo": 7,
        "reaction": "Improved",
        "symptoms": "Chronic Gastric Acidity & Reflux markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2647",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 0,
        "feeStatus": "Free"
      },
      {
        "id": "v-1470",
        "patientId": "p-6",
        "date": "20 May 2026",
        "tokenNo": 2,
        "reaction": "Improved",
        "symptoms": "Chronic Gastric Acidity & Reflux markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2659",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          },
          {
            "id": "rx-2660",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1499",
        "patientId": "p-6",
        "date": "18 Mar 2026",
        "tokenNo": 1,
        "reaction": "Decline",
        "symptoms": "Aggravation of Chronic Gastric Acidity & Reflux following cold exposure; acute recurrence.",
        "prescriptions": [
          {
            "id": "rx-2697",
            "remedy": "Nux Vomica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1533",
        "patientId": "p-6",
        "date": "15 Jan 2026",
        "tokenNo": 6,
        "reaction": "No Change",
        "symptoms": "Persistent Chronic Gastric Acidity & Reflux. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2745",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-7",
    "mrn": "NK-1512",
    "fullName": "Muhammad Aslam",
    "relationType": "s/o",
    "relativeName": "Muhammad Din",
    "age": 52,
    "gender": "Male",
    "phone": "0333-5129482",
    "locality": "Taxila Cantt",
    "totalVisits": 15,
    "lastVisitDate": "22 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-p-7-1",
        "name": "Sciatica & Lumbar Spondylosis",
        "severity": "Moderate",
        "trend": "Declining",
        "duration": "1 yr"
      }
    ],
    "severityTrend": {
      "complaintName": "Sciatica & Lumbar Spondylosis",
      "overallRelief": "-65% relief",
      "history": [
        {
          "label": "19 Nov",
          "date": "19 Nov 2026",
          "score": 80
        },
        {
          "label": "20 Nov",
          "date": "20 Nov 2026",
          "score": 60
        },
        {
          "label": "21 Nov",
          "date": "21 Nov 2026",
          "score": 40
        },
        {
          "label": "22 Nov",
          "date": "22 Nov 2026",
          "score": 20
        }
      ]
    },
    "pastVisits": [
      {
        "id": "v-1033",
        "patientId": "p-7",
        "date": "22 Nov 2026",
        "tokenNo": 6,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Sciatica & Lumbar Spondylosis since 1 yr.",
        "prescriptions": [
          {
            "id": "rx-2042",
            "remedy": "Rhus Toxicodendron",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1062",
        "patientId": "p-7",
        "date": "21 Nov 2026",
        "tokenNo": 15,
        "reaction": "Improved",
        "symptoms": "Sciatica & Lumbar Spondylosis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2083",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1065",
        "patientId": "p-7",
        "date": "20 Nov 2026",
        "tokenNo": 1,
        "reaction": "Improved",
        "symptoms": "Sciatica & Lumbar Spondylosis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2086",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1084",
        "patientId": "p-7",
        "date": "19 Nov 2026",
        "tokenNo": 4,
        "reaction": "No Change",
        "symptoms": "Persistent Sciatica & Lumbar Spondylosis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2115",
            "remedy": "Rhus Toxicodendron",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1120",
        "patientId": "p-7",
        "date": "17 Nov 2026",
        "tokenNo": 11,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Sciatica & Lumbar Spondylosis since 1 yr.",
        "prescriptions": [
          {
            "id": "rx-2164",
            "remedy": "Rhus Toxicodendron",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1149",
        "patientId": "p-7",
        "date": "14 Nov 2026",
        "tokenNo": 3,
        "reaction": "No Change",
        "symptoms": "Persistent Sciatica & Lumbar Spondylosis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2204",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1174",
        "patientId": "p-7",
        "date": "13 Nov 2026",
        "tokenNo": 12,
        "reaction": "Improved",
        "symptoms": "Sciatica & Lumbar Spondylosis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2239",
            "remedy": "Rhus Toxicodendron",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          },
          {
            "id": "rx-2240",
            "remedy": "Sulphur",
            "potency": "200C",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1184",
        "patientId": "p-7",
        "date": "12 Nov 2026",
        "tokenNo": 9,
        "reaction": "Improved",
        "symptoms": "Sciatica & Lumbar Spondylosis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2252",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": true
          },
          {
            "id": "rx-2253",
            "remedy": "Sulphur",
            "potency": "200C",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1258",
        "patientId": "p-7",
        "date": "06 Nov 2026",
        "tokenNo": 5,
        "reaction": "Improved",
        "symptoms": "Sciatica & Lumbar Spondylosis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2360",
            "remedy": "Rhus Toxicodendron",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1328",
        "patientId": "p-7",
        "date": "28 Oct 2026",
        "tokenNo": 2,
        "reaction": "Improved",
        "symptoms": "Sciatica & Lumbar Spondylosis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2462",
            "remedy": "Rhus Toxicodendron",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1342",
        "patientId": "p-7",
        "date": "15 Oct 2026",
        "tokenNo": 2,
        "reaction": "No Change",
        "symptoms": "Persistent Sciatica & Lumbar Spondylosis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2480",
            "remedy": "Rhus Toxicodendron",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1385",
        "patientId": "p-7",
        "date": "05 Sep 2026",
        "tokenNo": 2,
        "reaction": "Improved",
        "symptoms": "Sciatica & Lumbar Spondylosis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2542",
            "remedy": "Rhus Toxicodendron",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": true
          },
          {
            "id": "rx-2543",
            "remedy": "Sulphur",
            "potency": "200C",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1403",
        "patientId": "p-7",
        "date": "22 Aug 2026",
        "tokenNo": 6,
        "reaction": "Improved",
        "symptoms": "Sciatica & Lumbar Spondylosis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2566",
            "remedy": "Rhus Toxicodendron",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1421",
        "patientId": "p-7",
        "date": "08 Aug 2026",
        "tokenNo": 9,
        "reaction": "Decline",
        "symptoms": "Aggravation of Sciatica & Lumbar Spondylosis following cold exposure; acute recurrence.",
        "prescriptions": [
          {
            "id": "rx-2592",
            "remedy": "Rhus Toxicodendron",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1500",
        "patientId": "p-7",
        "date": "18 Mar 2026",
        "tokenNo": 2,
        "reaction": "Improved",
        "symptoms": "Sciatica & Lumbar Spondylosis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2698",
            "remedy": "Rhus Toxicodendron",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          },
          {
            "id": "rx-2699",
            "remedy": "Sulphur",
            "potency": "200C",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Due"
      }
    ]
  },
  {
    "id": "p-8",
    "mrn": "NK-1513",
    "fullName": "Imtiaz Ahmed",
    "relationType": "s/o",
    "relativeName": "Nazir Ahmed",
    "age": 39,
    "gender": "Male",
    "phone": "0302-8819203",
    "locality": "Mohallah Farooqia",
    "totalVisits": 12,
    "lastVisitDate": "22 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-p-8-1",
        "name": "Dyspepsia & Flatulence",
        "severity": "Mild",
        "trend": "Improving",
        "duration": "8 mos"
      }
    ],
    "severityTrend": {
      "complaintName": "Dyspepsia & Flatulence",
      "overallRelief": "-65% relief",
      "history": [
        {
          "label": "15 Nov",
          "date": "15 Nov 2026",
          "score": 80
        },
        {
          "label": "17 Nov",
          "date": "17 Nov 2026",
          "score": 60
        },
        {
          "label": "19 Nov",
          "date": "19 Nov 2026",
          "score": 40
        },
        {
          "label": "22 Nov",
          "date": "22 Nov 2026",
          "score": 20
        }
      ]
    },
    "pastVisits": [
      {
        "id": "v-1044",
        "patientId": "p-8",
        "date": "22 Nov 2026",
        "tokenNo": 17,
        "reaction": "No Change",
        "symptoms": "Persistent Dyspepsia & Flatulence. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2057",
            "remedy": "Lycopodium",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops 4 PM in water",
            "isRepeat": false
          },
          {
            "id": "rx-2058",
            "remedy": "Hepar Sulphuris",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS for painful sensitivity",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1094",
        "patientId": "p-8",
        "date": "19 Nov 2026",
        "tokenNo": 14,
        "reaction": "Improved",
        "symptoms": "Dyspepsia & Flatulence markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2127",
            "remedy": "Lycopodium",
            "potency": "1M",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops 4 PM in water",
            "isRepeat": true
          },
          {
            "id": "rx-2128",
            "remedy": "Hepar Sulphuris",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS for painful sensitivity",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 0,
        "feeStatus": "Free"
      },
      {
        "id": "v-1119",
        "patientId": "p-8",
        "date": "17 Nov 2026",
        "tokenNo": 10,
        "reaction": "Improved",
        "symptoms": "Dyspepsia & Flatulence markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2162",
            "remedy": "Lycopodium",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops 4 PM in water",
            "isRepeat": true
          },
          {
            "id": "rx-2163",
            "remedy": "Hepar Sulphuris",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS for painful sensitivity",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1141",
        "patientId": "p-8",
        "date": "15 Nov 2026",
        "tokenNo": 6,
        "reaction": "No Change",
        "symptoms": "Persistent Dyspepsia & Flatulence. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2190",
            "remedy": "Lycopodium",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops 4 PM in water",
            "isRepeat": false
          },
          {
            "id": "rx-2191",
            "remedy": "Hepar Sulphuris",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS for painful sensitivity",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1161",
        "patientId": "p-8",
        "date": "14 Nov 2026",
        "tokenNo": 15,
        "reaction": "Improved",
        "symptoms": "Dyspepsia & Flatulence markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2219",
            "remedy": "Lycopodium",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops 4 PM in water",
            "isRepeat": true
          },
          {
            "id": "rx-2220",
            "remedy": "Hepar Sulphuris",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS for painful sensitivity",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1168",
        "patientId": "p-8",
        "date": "13 Nov 2026",
        "tokenNo": 6,
        "reaction": "Improved",
        "symptoms": "Dyspepsia & Flatulence markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2229",
            "remedy": "Lycopodium",
            "potency": "1M",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops 4 PM in water",
            "isRepeat": false
          },
          {
            "id": "rx-2230",
            "remedy": "Hepar Sulphuris",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS for painful sensitivity",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1206",
        "patientId": "p-8",
        "date": "10 Nov 2026",
        "tokenNo": 4,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Dyspepsia & Flatulence since 8 mos.",
        "prescriptions": [
          {
            "id": "rx-2285",
            "remedy": "Lycopodium",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops 4 PM in water",
            "isRepeat": false
          },
          {
            "id": "rx-2286",
            "remedy": "Hepar Sulphuris",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS for painful sensitivity",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1233",
        "patientId": "p-8",
        "date": "08 Nov 2026",
        "tokenNo": 7,
        "reaction": "Improved",
        "symptoms": "Dyspepsia & Flatulence markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2323",
            "remedy": "Lycopodium",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops 4 PM in water",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1286",
        "patientId": "p-8",
        "date": "04 Nov 2026",
        "tokenNo": 6,
        "reaction": "Improved",
        "symptoms": "Dyspepsia & Flatulence markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2400",
            "remedy": "Lycopodium",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops 4 PM in water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1311",
        "patientId": "p-8",
        "date": "02 Nov 2026",
        "tokenNo": 5,
        "reaction": "Improved",
        "symptoms": "Dyspepsia & Flatulence markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2435",
            "remedy": "Lycopodium",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops 4 PM in water",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1338",
        "patientId": "p-8",
        "date": "28 Oct 2026",
        "tokenNo": 12,
        "reaction": "No Change",
        "symptoms": "Persistent Dyspepsia & Flatulence. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2475",
            "remedy": "Lycopodium",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops 4 PM in water",
            "isRepeat": false
          },
          {
            "id": "rx-2476",
            "remedy": "Hepar Sulphuris",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS for painful sensitivity",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1395",
        "patientId": "p-8",
        "date": "05 Sep 2026",
        "tokenNo": 12,
        "reaction": "Improved",
        "symptoms": "Dyspepsia & Flatulence markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2557",
            "remedy": "Lycopodium",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops 4 PM in water",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Due"
      }
    ]
  },
  {
    "id": "p-9",
    "mrn": "NK-1514",
    "fullName": "Malik Farooq",
    "relationType": "s/o",
    "relativeName": "Malik Zaman",
    "age": 48,
    "gender": "Male",
    "phone": "0315-9944112",
    "locality": "Lala Rukh",
    "totalVisits": 15,
    "lastVisitDate": "24 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-p-9-1",
        "name": "Chronic Gastric Acidity & Reflux",
        "severity": "Severe",
        "trend": "Improving",
        "duration": "2 yrs"
      }
    ],
    "severityTrend": {
      "complaintName": "Chronic Gastric Acidity & Reflux",
      "overallRelief": "-65% relief",
      "history": [
        {
          "label": "16 Nov",
          "date": "16 Nov 2026",
          "score": 80
        },
        {
          "label": "18 Nov",
          "date": "18 Nov 2026",
          "score": 60
        },
        {
          "label": "22 Nov",
          "date": "22 Nov 2026",
          "score": 40
        },
        {
          "label": "24 Nov",
          "date": "24 Nov 2026",
          "score": 20
        }
      ]
    },
    "pastVisits": [
      {
        "id": "v-1016",
        "patientId": "p-9",
        "date": "24 Nov 2026",
        "tokenNo": 16,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Chronic Gastric Acidity & Reflux since 2 yrs.",
        "prescriptions": [
          {
            "id": "rx-2021",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          },
          {
            "id": "rx-2022",
            "remedy": "Rhus Toxicodendron",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1045",
        "patientId": "p-9",
        "date": "22 Nov 2026",
        "tokenNo": 18,
        "reaction": "Improved",
        "symptoms": "Chronic Gastric Acidity & Reflux markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2059",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": true
          },
          {
            "id": "rx-2060",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1108",
        "patientId": "p-9",
        "date": "18 Nov 2026",
        "tokenNo": 13,
        "reaction": "Improved",
        "symptoms": "Chronic Gastric Acidity & Reflux markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2146",
            "remedy": "Nux Vomica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": true
          },
          {
            "id": "rx-2147",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1123",
        "patientId": "p-9",
        "date": "16 Nov 2026",
        "tokenNo": 2,
        "reaction": "Improved",
        "symptoms": "Chronic Gastric Acidity & Reflux markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2168",
            "remedy": "Nux Vomica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1167",
        "patientId": "p-9",
        "date": "13 Nov 2026",
        "tokenNo": 5,
        "reaction": "Improved",
        "symptoms": "Chronic Gastric Acidity & Reflux markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2227",
            "remedy": "Nux Vomica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": true
          },
          {
            "id": "rx-2228",
            "remedy": "Rhus Toxicodendron",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1189",
        "patientId": "p-9",
        "date": "12 Nov 2026",
        "tokenNo": 14,
        "reaction": "Decline",
        "symptoms": "Aggravation of Chronic Gastric Acidity & Reflux following cold exposure; acute recurrence.",
        "prescriptions": [
          {
            "id": "rx-2258",
            "remedy": "Nux Vomica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1201",
        "patientId": "p-9",
        "date": "11 Nov 2026",
        "tokenNo": 11,
        "reaction": "Improved",
        "symptoms": "Chronic Gastric Acidity & Reflux markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2279",
            "remedy": "Nux Vomica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1257",
        "patientId": "p-9",
        "date": "06 Nov 2026",
        "tokenNo": 4,
        "reaction": "No Change",
        "symptoms": "Persistent Chronic Gastric Acidity & Reflux. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2359",
            "remedy": "Nux Vomica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1287",
        "patientId": "p-9",
        "date": "04 Nov 2026",
        "tokenNo": 7,
        "reaction": "Improved",
        "symptoms": "Chronic Gastric Acidity & Reflux markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2401",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 0,
        "feeStatus": "Free"
      },
      {
        "id": "v-1301",
        "patientId": "p-9",
        "date": "03 Nov 2026",
        "tokenNo": 10,
        "reaction": "Improved",
        "symptoms": "Chronic Gastric Acidity & Reflux markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2421",
            "remedy": "Nux Vomica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          },
          {
            "id": "rx-2422",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1354",
        "patientId": "p-9",
        "date": "15 Oct 2026",
        "tokenNo": 14,
        "reaction": "Improved",
        "symptoms": "Chronic Gastric Acidity & Reflux markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2498",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": true
          },
          {
            "id": "rx-2499",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1391",
        "patientId": "p-9",
        "date": "05 Sep 2026",
        "tokenNo": 8,
        "reaction": "Improved",
        "symptoms": "Chronic Gastric Acidity & Reflux markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2550",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": true
          },
          {
            "id": "rx-2551",
            "remedy": "Rhus Toxicodendron",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1428",
        "patientId": "p-9",
        "date": "19 Jul 2026",
        "tokenNo": 3,
        "reaction": "Improved",
        "symptoms": "Chronic Gastric Acidity & Reflux markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2600",
            "remedy": "Nux Vomica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          },
          {
            "id": "rx-2601",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1443",
        "patientId": "p-9",
        "date": "04 Jul 2026",
        "tokenNo": 2,
        "reaction": "Improved",
        "symptoms": "Chronic Gastric Acidity & Reflux markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2621",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          },
          {
            "id": "rx-2622",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1515",
        "patientId": "p-9",
        "date": "22 Feb 2026",
        "tokenNo": 2,
        "reaction": "Improved",
        "symptoms": "Chronic Gastric Acidity & Reflux markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2720",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-10",
    "mrn": "NK-1515",
    "fullName": "Tanveer Hussain",
    "relationType": "s/o",
    "relativeName": "Khadim Hussain",
    "age": 35,
    "gender": "Male",
    "phone": "0346-2211909",
    "locality": "Sarai Kala",
    "totalVisits": 10,
    "lastVisitDate": "13 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-p-10-1",
        "name": "Anxiety & Anticipatory Tremors",
        "severity": "Moderate",
        "trend": "Stable",
        "duration": "1 yr"
      }
    ],
    "severityTrend": {
      "complaintName": "Anxiety & Anticipatory Tremors",
      "overallRelief": "-65% relief",
      "history": [
        {
          "label": "03 Nov",
          "date": "03 Nov 2026",
          "score": 80
        },
        {
          "label": "07 Nov",
          "date": "07 Nov 2026",
          "score": 60
        },
        {
          "label": "09 Nov",
          "date": "09 Nov 2026",
          "score": 40
        },
        {
          "label": "13 Nov",
          "date": "13 Nov 2026",
          "score": 20
        }
      ]
    },
    "pastVisits": [
      {
        "id": "v-1166",
        "patientId": "p-10",
        "date": "13 Nov 2026",
        "tokenNo": 4,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Anxiety & Anticipatory Tremors since 1 yr.",
        "prescriptions": [
          {
            "id": "rx-2226",
            "remedy": "Gelsemium",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops BD for heaviness & fatigue",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1217",
        "patientId": "p-10",
        "date": "09 Nov 2026",
        "tokenNo": 1,
        "reaction": "Improved",
        "symptoms": "Anxiety & Anticipatory Tremors markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2300",
            "remedy": "Gelsemium",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops BD for heaviness & fatigue",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1251",
        "patientId": "p-10",
        "date": "07 Nov 2026",
        "tokenNo": 10,
        "reaction": "No Change",
        "symptoms": "Persistent Anxiety & Anticipatory Tremors. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2350",
            "remedy": "Gelsemium",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops BD for heaviness & fatigue",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1303",
        "patientId": "p-10",
        "date": "03 Nov 2026",
        "tokenNo": 12,
        "reaction": "Improved",
        "symptoms": "Anxiety & Anticipatory Tremors markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2424",
            "remedy": "Gelsemium",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops BD for heaviness & fatigue",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1313",
        "patientId": "p-10",
        "date": "02 Nov 2026",
        "tokenNo": 7,
        "reaction": "Improved",
        "symptoms": "Anxiety & Anticipatory Tremors markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2438",
            "remedy": "Gelsemium",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops BD for heaviness & fatigue",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1333",
        "patientId": "p-10",
        "date": "28 Oct 2026",
        "tokenNo": 7,
        "reaction": "Decline",
        "symptoms": "Aggravation of Anxiety & Anticipatory Tremors following cold exposure; acute recurrence.",
        "prescriptions": [
          {
            "id": "rx-2469",
            "remedy": "Gelsemium",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops BD for heaviness & fatigue",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1412",
        "patientId": "p-10",
        "date": "22 Aug 2026",
        "tokenNo": 15,
        "reaction": "Improved",
        "symptoms": "Anxiety & Anticipatory Tremors markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2578",
            "remedy": "Gelsemium",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops BD for heaviness & fatigue",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1462",
        "patientId": "p-10",
        "date": "16 Jun 2026",
        "tokenNo": 9,
        "reaction": "Improved",
        "symptoms": "Anxiety & Anticipatory Tremors markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2650",
            "remedy": "Gelsemium",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops BD for heaviness & fatigue",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1493",
        "patientId": "p-10",
        "date": "14 Apr 2026",
        "tokenNo": 11,
        "reaction": "Improved",
        "symptoms": "Anxiety & Anticipatory Tremors markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2689",
            "remedy": "Gelsemium",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops BD for heaviness & fatigue",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1511",
        "patientId": "p-10",
        "date": "18 Mar 2026",
        "tokenNo": 13,
        "reaction": "Improved",
        "symptoms": "Anxiety & Anticipatory Tremors markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2714",
            "remedy": "Gelsemium",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops BD for heaviness & fatigue",
            "isRepeat": false
          },
          {
            "id": "rx-2715",
            "remedy": "Berberis Vulgaris",
            "potency": "Q (Mother Tincture)",
            "vehicle": "Mother Tincture",
            "dosage": "10 drops BD in warm water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-11",
    "mrn": "NK-1516",
    "fullName": "Bilal Zubair",
    "relationType": "s/o",
    "relativeName": "Muhammad Zubair",
    "age": 29,
    "gender": "Male",
    "phone": "0308-4455661",
    "locality": "Museum Road",
    "totalVisits": 13,
    "lastVisitDate": "21 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-p-11-1",
        "name": "Right-Sided Migraine",
        "severity": "Moderate",
        "trend": "Improving",
        "duration": "4 yrs"
      }
    ],
    "severityTrend": {
      "complaintName": "Right-Sided Migraine",
      "overallRelief": "-65% relief",
      "history": [
        {
          "label": "17 Nov",
          "date": "17 Nov 2026",
          "score": 80
        },
        {
          "label": "18 Nov",
          "date": "18 Nov 2026",
          "score": 60
        },
        {
          "label": "20 Nov",
          "date": "20 Nov 2026",
          "score": 40
        },
        {
          "label": "21 Nov",
          "date": "21 Nov 2026",
          "score": 20
        }
      ]
    },
    "pastVisits": [
      {
        "id": "v-1060",
        "patientId": "p-11",
        "date": "21 Nov 2026",
        "tokenNo": 13,
        "reaction": "Improved",
        "symptoms": "Right-Sided Migraine markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2081",
            "remedy": "Bryonia Alba",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops BD in half cup water",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1079",
        "patientId": "p-11",
        "date": "20 Nov 2026",
        "tokenNo": 15,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Right-Sided Migraine since 4 yrs.",
        "prescriptions": [
          {
            "id": "rx-2107",
            "remedy": "Bryonia Alba",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops BD in half cup water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1096",
        "patientId": "p-11",
        "date": "18 Nov 2026",
        "tokenNo": 1,
        "reaction": "No Change",
        "symptoms": "Persistent Right-Sided Migraine. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2130",
            "remedy": "Bryonia Alba",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops BD in half cup water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1110",
        "patientId": "p-11",
        "date": "17 Nov 2026",
        "tokenNo": 1,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Right-Sided Migraine since 4 yrs.",
        "prescriptions": [
          {
            "id": "rx-2150",
            "remedy": "Bryonia Alba",
            "potency": "1M",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops BD in half cup water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 0,
        "feeStatus": "Free"
      },
      {
        "id": "v-1126",
        "patientId": "p-11",
        "date": "16 Nov 2026",
        "tokenNo": 5,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Right-Sided Migraine since 4 yrs.",
        "prescriptions": [
          {
            "id": "rx-2171",
            "remedy": "Bryonia Alba",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops BD in half cup water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1139",
        "patientId": "p-11",
        "date": "15 Nov 2026",
        "tokenNo": 4,
        "reaction": "Improved",
        "symptoms": "Right-Sided Migraine markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2188",
            "remedy": "Bryonia Alba",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops BD in half cup water",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1172",
        "patientId": "p-11",
        "date": "13 Nov 2026",
        "tokenNo": 10,
        "reaction": "Improved",
        "symptoms": "Right-Sided Migraine markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2236",
            "remedy": "Bryonia Alba",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops BD in half cup water",
            "isRepeat": false
          },
          {
            "id": "rx-2237",
            "remedy": "Arnica Montana",
            "potency": "1M",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1250",
        "patientId": "p-11",
        "date": "07 Nov 2026",
        "tokenNo": 9,
        "reaction": "Improved",
        "symptoms": "Right-Sided Migraine markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2349",
            "remedy": "Bryonia Alba",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops BD in half cup water",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1300",
        "patientId": "p-11",
        "date": "03 Nov 2026",
        "tokenNo": 9,
        "reaction": "Decline",
        "symptoms": "Aggravation of Right-Sided Migraine following cold exposure; acute recurrence.",
        "prescriptions": [
          {
            "id": "rx-2420",
            "remedy": "Bryonia Alba",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops BD in half cup water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1425",
        "patientId": "p-11",
        "date": "08 Aug 2026",
        "tokenNo": 13,
        "reaction": "Improved",
        "symptoms": "Right-Sided Migraine markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2596",
            "remedy": "Bryonia Alba",
            "potency": "1M",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops BD in half cup water",
            "isRepeat": true
          },
          {
            "id": "rx-2597",
            "remedy": "Arnica Montana",
            "potency": "1M",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1437",
        "patientId": "p-11",
        "date": "19 Jul 2026",
        "tokenNo": 12,
        "reaction": "No Change",
        "symptoms": "Persistent Right-Sided Migraine. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2613",
            "remedy": "Bryonia Alba",
            "potency": "1M",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops BD in half cup water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1518",
        "patientId": "p-11",
        "date": "22 Feb 2026",
        "tokenNo": 5,
        "reaction": "Improved",
        "symptoms": "Right-Sided Migraine markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2724",
            "remedy": "Bryonia Alba",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops BD in half cup water",
            "isRepeat": true
          },
          {
            "id": "rx-2725",
            "remedy": "Arnica Montana",
            "potency": "1M",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1531",
        "patientId": "p-11",
        "date": "15 Jan 2026",
        "tokenNo": 4,
        "reaction": "No Change",
        "symptoms": "Persistent Right-Sided Migraine. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2742",
            "remedy": "Bryonia Alba",
            "potency": "1M",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops BD in half cup water",
            "isRepeat": false
          },
          {
            "id": "rx-2743",
            "remedy": "Arnica Montana",
            "potency": "1M",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-12",
    "mrn": "NK-1517",
    "fullName": "Khurram Shahzad",
    "relationType": "s/o",
    "relativeName": "Muhammad Akram",
    "age": 41,
    "gender": "Male",
    "phone": "0331-7788990",
    "locality": "Faisal Hills",
    "totalVisits": 16,
    "lastVisitDate": "24 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-p-12-1",
        "name": "Sciatica & Lumbar Spondylosis",
        "severity": "Moderate",
        "trend": "Declining",
        "duration": "1 yr"
      }
    ],
    "severityTrend": {
      "complaintName": "Sciatica & Lumbar Spondylosis",
      "overallRelief": "-65% relief",
      "history": [
        {
          "label": "12 Nov",
          "date": "12 Nov 2026",
          "score": 80
        },
        {
          "label": "18 Nov",
          "date": "18 Nov 2026",
          "score": 60
        },
        {
          "label": "19 Nov",
          "date": "19 Nov 2026",
          "score": 40
        },
        {
          "label": "24 Nov",
          "date": "24 Nov 2026",
          "score": 20
        }
      ]
    },
    "pastVisits": [
      {
        "id": "v-1014",
        "patientId": "p-12",
        "date": "24 Nov 2026",
        "tokenNo": 14,
        "reaction": "No Change",
        "symptoms": "Persistent Sciatica & Lumbar Spondylosis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2019",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1090",
        "patientId": "p-12",
        "date": "19 Nov 2026",
        "tokenNo": 10,
        "reaction": "Improved",
        "symptoms": "Sciatica & Lumbar Spondylosis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2122",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1104",
        "patientId": "p-12",
        "date": "18 Nov 2026",
        "tokenNo": 9,
        "reaction": "Improved",
        "symptoms": "Sciatica & Lumbar Spondylosis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2141",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          },
          {
            "id": "rx-2142",
            "remedy": "Sulphur",
            "potency": "1M",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1176",
        "patientId": "p-12",
        "date": "12 Nov 2026",
        "tokenNo": 1,
        "reaction": "Improved",
        "symptoms": "Sciatica & Lumbar Spondylosis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2242",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          },
          {
            "id": "rx-2243",
            "remedy": "Sulphur",
            "potency": "1M",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1247",
        "patientId": "p-12",
        "date": "07 Nov 2026",
        "tokenNo": 6,
        "reaction": "Improved",
        "symptoms": "Sciatica & Lumbar Spondylosis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2346",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1265",
        "patientId": "p-12",
        "date": "06 Nov 2026",
        "tokenNo": 12,
        "reaction": "No Change",
        "symptoms": "Persistent Sciatica & Lumbar Spondylosis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2370",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1335",
        "patientId": "p-12",
        "date": "28 Oct 2026",
        "tokenNo": 9,
        "reaction": "Improved",
        "symptoms": "Sciatica & Lumbar Spondylosis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2472",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1366",
        "patientId": "p-12",
        "date": "02 Oct 2026",
        "tokenNo": 11,
        "reaction": "Improved",
        "symptoms": "Sciatica & Lumbar Spondylosis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2513",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": true
          },
          {
            "id": "rx-2514",
            "remedy": "Sulphur",
            "potency": "200C",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1375",
        "patientId": "p-12",
        "date": "18 Sep 2026",
        "tokenNo": 8,
        "reaction": "Improved",
        "symptoms": "Sciatica & Lumbar Spondylosis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2527",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": true
          },
          {
            "id": "rx-2528",
            "remedy": "Sulphur",
            "potency": "200C",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1418",
        "patientId": "p-12",
        "date": "08 Aug 2026",
        "tokenNo": 6,
        "reaction": "No Change",
        "symptoms": "Persistent Sciatica & Lumbar Spondylosis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2587",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          },
          {
            "id": "rx-2588",
            "remedy": "Sulphur",
            "potency": "200C",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1432",
        "patientId": "p-12",
        "date": "19 Jul 2026",
        "tokenNo": 7,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Sciatica & Lumbar Spondylosis since 1 yr.",
        "prescriptions": [
          {
            "id": "rx-2605",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1447",
        "patientId": "p-12",
        "date": "04 Jul 2026",
        "tokenNo": 6,
        "reaction": "Improved",
        "symptoms": "Sciatica & Lumbar Spondylosis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2627",
            "remedy": "Rhus Toxicodendron",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1461",
        "patientId": "p-12",
        "date": "16 Jun 2026",
        "tokenNo": 8,
        "reaction": "No Change",
        "symptoms": "Persistent Sciatica & Lumbar Spondylosis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2648",
            "remedy": "Rhus Toxicodendron",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          },
          {
            "id": "rx-2649",
            "remedy": "Sulphur",
            "potency": "1M",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1487",
        "patientId": "p-12",
        "date": "14 Apr 2026",
        "tokenNo": 5,
        "reaction": "Improved",
        "symptoms": "Sciatica & Lumbar Spondylosis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2680",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1509",
        "patientId": "p-12",
        "date": "18 Mar 2026",
        "tokenNo": 11,
        "reaction": "No Change",
        "symptoms": "Persistent Sciatica & Lumbar Spondylosis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2712",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1521",
        "patientId": "p-12",
        "date": "22 Feb 2026",
        "tokenNo": 8,
        "reaction": "No Change",
        "symptoms": "Persistent Sciatica & Lumbar Spondylosis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2729",
            "remedy": "Rhus Toxicodendron",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-13",
    "mrn": "NK-1518",
    "fullName": "Waqas Riaz",
    "relationType": "s/o",
    "relativeName": "Riaz Ahmed",
    "age": 33,
    "gender": "Male",
    "phone": "0322-1144778",
    "locality": "Wah Model Town",
    "totalVisits": 8,
    "lastVisitDate": "23 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-p-13-1",
        "name": "Allergic Asthma & Wheezing",
        "severity": "Moderate",
        "trend": "Stable",
        "duration": "3 yrs"
      }
    ],
    "severityTrend": {
      "complaintName": "Allergic Asthma & Wheezing",
      "overallRelief": "-65% relief",
      "history": [
        {
          "label": "07 Nov",
          "date": "07 Nov 2026",
          "score": 80
        },
        {
          "label": "12 Nov",
          "date": "12 Nov 2026",
          "score": 60
        },
        {
          "label": "18 Nov",
          "date": "18 Nov 2026",
          "score": 40
        },
        {
          "label": "23 Nov",
          "date": "23 Nov 2026",
          "score": 20
        }
      ]
    },
    "pastVisits": [
      {
        "id": "v-1020",
        "patientId": "p-13",
        "date": "23 Nov 2026",
        "tokenNo": 2,
        "reaction": "Improved",
        "symptoms": "Allergic Asthma & Wheezing markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2027",
            "remedy": "Arsenicum Album",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops TDS",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1105",
        "patientId": "p-13",
        "date": "18 Nov 2026",
        "tokenNo": 10,
        "reaction": "Decline",
        "symptoms": "Aggravation of Allergic Asthma & Wheezing following cold exposure; acute recurrence.",
        "prescriptions": [
          {
            "id": "rx-2143",
            "remedy": "Arsenicum Album",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1178",
        "patientId": "p-13",
        "date": "12 Nov 2026",
        "tokenNo": 3,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Allergic Asthma & Wheezing since 3 yrs.",
        "prescriptions": [
          {
            "id": "rx-2245",
            "remedy": "Arsenicum Album",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1246",
        "patientId": "p-13",
        "date": "07 Nov 2026",
        "tokenNo": 5,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Allergic Asthma & Wheezing since 3 yrs.",
        "prescriptions": [
          {
            "id": "rx-2344",
            "remedy": "Arsenicum Album",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops TDS",
            "isRepeat": false
          },
          {
            "id": "rx-2345",
            "remedy": "Belladonna",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops SOS during acute throbbing attack",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1423",
        "patientId": "p-13",
        "date": "08 Aug 2026",
        "tokenNo": 11,
        "reaction": "No Change",
        "symptoms": "Persistent Allergic Asthma & Wheezing. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2594",
            "remedy": "Arsenicum Album",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1459",
        "patientId": "p-13",
        "date": "16 Jun 2026",
        "tokenNo": 6,
        "reaction": "No Change",
        "symptoms": "Persistent Allergic Asthma & Wheezing. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2645",
            "remedy": "Arsenicum Album",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops TDS",
            "isRepeat": false
          },
          {
            "id": "rx-2646",
            "remedy": "Belladonna",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops SOS during acute throbbing attack",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 0,
        "feeStatus": "Free"
      },
      {
        "id": "v-1471",
        "patientId": "p-13",
        "date": "20 May 2026",
        "tokenNo": 3,
        "reaction": "Improved",
        "symptoms": "Allergic Asthma & Wheezing markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2661",
            "remedy": "Arsenicum Album",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops TDS",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1516",
        "patientId": "p-13",
        "date": "22 Feb 2026",
        "tokenNo": 3,
        "reaction": "Decline",
        "symptoms": "Aggravation of Allergic Asthma & Wheezing following cold exposure; acute recurrence.",
        "prescriptions": [
          {
            "id": "rx-2721",
            "remedy": "Arsenicum Album",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-14",
    "mrn": "NK-1519",
    "fullName": "Farhan Ali",
    "relationType": "s/o",
    "relativeName": "Liaquat Ali",
    "age": 27,
    "gender": "Male",
    "phone": "0305-6677882",
    "locality": "Taxila Cantt",
    "totalVisits": 19,
    "lastVisitDate": "22 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-p-14-1",
        "name": "Renal Calculi (Left Flank Pain)",
        "severity": "Severe",
        "trend": "Declining",
        "duration": "4 wks"
      }
    ],
    "severityTrend": {
      "complaintName": "Renal Calculi (Left Flank Pain)",
      "overallRelief": "-65% relief",
      "history": [
        {
          "label": "17 Nov",
          "date": "17 Nov 2026",
          "score": 80
        },
        {
          "label": "19 Nov",
          "date": "19 Nov 2026",
          "score": 60
        },
        {
          "label": "21 Nov",
          "date": "21 Nov 2026",
          "score": 40
        },
        {
          "label": "22 Nov",
          "date": "22 Nov 2026",
          "score": 20
        }
      ]
    },
    "pastVisits": [
      {
        "id": "v-1038",
        "patientId": "p-14",
        "date": "22 Nov 2026",
        "tokenNo": 11,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Renal Calculi (Left Flank Pain) since 4 wks.",
        "prescriptions": [
          {
            "id": "rx-2048",
            "remedy": "Berberis Vulgaris",
            "potency": "30C",
            "vehicle": "Mother Tincture",
            "dosage": "10 drops BD in warm water",
            "isRepeat": false
          },
          {
            "id": "rx-2049",
            "remedy": "Arsenicum Album",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1048",
        "patientId": "p-14",
        "date": "21 Nov 2026",
        "tokenNo": 1,
        "reaction": "Improved",
        "symptoms": "Renal Calculi (Left Flank Pain) markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2064",
            "remedy": "Berberis Vulgaris",
            "potency": "30C",
            "vehicle": "Mother Tincture",
            "dosage": "10 drops BD in warm water",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1086",
        "patientId": "p-14",
        "date": "19 Nov 2026",
        "tokenNo": 6,
        "reaction": "Improved",
        "symptoms": "Renal Calculi (Left Flank Pain) markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2117",
            "remedy": "Berberis Vulgaris",
            "potency": "30C",
            "vehicle": "Mother Tincture",
            "dosage": "10 drops BD in warm water",
            "isRepeat": true
          },
          {
            "id": "rx-2118",
            "remedy": "Arsenicum Album",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1111",
        "patientId": "p-14",
        "date": "17 Nov 2026",
        "tokenNo": 2,
        "reaction": "No Change",
        "symptoms": "Persistent Renal Calculi (Left Flank Pain). Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2151",
            "remedy": "Berberis Vulgaris",
            "potency": "30C",
            "vehicle": "Mother Tincture",
            "dosage": "10 drops BD in warm water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1158",
        "patientId": "p-14",
        "date": "14 Nov 2026",
        "tokenNo": 12,
        "reaction": "Improved",
        "symptoms": "Renal Calculi (Left Flank Pain) markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2215",
            "remedy": "Berberis Vulgaris",
            "potency": "Q (Mother Tincture)",
            "vehicle": "Mother Tincture",
            "dosage": "10 drops BD in warm water",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1164",
        "patientId": "p-14",
        "date": "13 Nov 2026",
        "tokenNo": 2,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Renal Calculi (Left Flank Pain) since 4 wks.",
        "prescriptions": [
          {
            "id": "rx-2224",
            "remedy": "Berberis Vulgaris",
            "potency": "30C",
            "vehicle": "Mother Tincture",
            "dosage": "10 drops BD in warm water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1225",
        "patientId": "p-14",
        "date": "09 Nov 2026",
        "tokenNo": 9,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Renal Calculi (Left Flank Pain) since 4 wks.",
        "prescriptions": [
          {
            "id": "rx-2312",
            "remedy": "Berberis Vulgaris",
            "potency": "Q (Mother Tincture)",
            "vehicle": "Mother Tincture",
            "dosage": "10 drops BD in warm water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1244",
        "patientId": "p-14",
        "date": "07 Nov 2026",
        "tokenNo": 3,
        "reaction": "Improved",
        "symptoms": "Renal Calculi (Left Flank Pain) markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2341",
            "remedy": "Berberis Vulgaris",
            "potency": "Q (Mother Tincture)",
            "vehicle": "Mother Tincture",
            "dosage": "10 drops BD in warm water",
            "isRepeat": true
          },
          {
            "id": "rx-2342",
            "remedy": "Arsenicum Album",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1260",
        "patientId": "p-14",
        "date": "06 Nov 2026",
        "tokenNo": 7,
        "reaction": "Improved",
        "symptoms": "Renal Calculi (Left Flank Pain) markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2363",
            "remedy": "Berberis Vulgaris",
            "potency": "30C",
            "vehicle": "Mother Tincture",
            "dosage": "10 drops BD in warm water",
            "isRepeat": false
          },
          {
            "id": "rx-2364",
            "remedy": "Arsenicum Album",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1280",
        "patientId": "p-14",
        "date": "05 Nov 2026",
        "tokenNo": 14,
        "reaction": "Decline",
        "symptoms": "Aggravation of Renal Calculi (Left Flank Pain) following cold exposure; acute recurrence.",
        "prescriptions": [
          {
            "id": "rx-2390",
            "remedy": "Berberis Vulgaris",
            "potency": "Q (Mother Tincture)",
            "vehicle": "Mother Tincture",
            "dosage": "10 drops BD in warm water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1281",
        "patientId": "p-14",
        "date": "04 Nov 2026",
        "tokenNo": 1,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Renal Calculi (Left Flank Pain) since 4 wks.",
        "prescriptions": [
          {
            "id": "rx-2391",
            "remedy": "Berberis Vulgaris",
            "potency": "Q (Mother Tincture)",
            "vehicle": "Mother Tincture",
            "dosage": "10 drops BD in warm water",
            "isRepeat": false
          },
          {
            "id": "rx-2392",
            "remedy": "Arsenicum Album",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1292",
        "patientId": "p-14",
        "date": "03 Nov 2026",
        "tokenNo": 1,
        "reaction": "Improved",
        "symptoms": "Renal Calculi (Left Flank Pain) markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2408",
            "remedy": "Berberis Vulgaris",
            "potency": "30C",
            "vehicle": "Mother Tincture",
            "dosage": "10 drops BD in warm water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1334",
        "patientId": "p-14",
        "date": "28 Oct 2026",
        "tokenNo": 8,
        "reaction": "Decline",
        "symptoms": "Aggravation of Renal Calculi (Left Flank Pain) following cold exposure; acute recurrence.",
        "prescriptions": [
          {
            "id": "rx-2470",
            "remedy": "Berberis Vulgaris",
            "potency": "Q (Mother Tincture)",
            "vehicle": "Mother Tincture",
            "dosage": "10 drops BD in warm water",
            "isRepeat": false
          },
          {
            "id": "rx-2471",
            "remedy": "Arsenicum Album",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1344",
        "patientId": "p-14",
        "date": "15 Oct 2026",
        "tokenNo": 4,
        "reaction": "Improved",
        "symptoms": "Renal Calculi (Left Flank Pain) markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2483",
            "remedy": "Berberis Vulgaris",
            "potency": "30C",
            "vehicle": "Mother Tincture",
            "dosage": "10 drops BD in warm water",
            "isRepeat": true
          },
          {
            "id": "rx-2484",
            "remedy": "Arsenicum Album",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1399",
        "patientId": "p-14",
        "date": "22 Aug 2026",
        "tokenNo": 2,
        "reaction": "Improved",
        "symptoms": "Renal Calculi (Left Flank Pain) markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2562",
            "remedy": "Berberis Vulgaris",
            "potency": "30C",
            "vehicle": "Mother Tincture",
            "dosage": "10 drops BD in warm water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1469",
        "patientId": "p-14",
        "date": "20 May 2026",
        "tokenNo": 1,
        "reaction": "Improved",
        "symptoms": "Renal Calculi (Left Flank Pain) markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2658",
            "remedy": "Berberis Vulgaris",
            "potency": "Q (Mother Tincture)",
            "vehicle": "Mother Tincture",
            "dosage": "10 drops BD in warm water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1490",
        "patientId": "p-14",
        "date": "14 Apr 2026",
        "tokenNo": 8,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Renal Calculi (Left Flank Pain) since 4 wks.",
        "prescriptions": [
          {
            "id": "rx-2685",
            "remedy": "Berberis Vulgaris",
            "potency": "30C",
            "vehicle": "Mother Tincture",
            "dosage": "10 drops BD in warm water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1522",
        "patientId": "p-14",
        "date": "22 Feb 2026",
        "tokenNo": 9,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Renal Calculi (Left Flank Pain) since 4 wks.",
        "prescriptions": [
          {
            "id": "rx-2730",
            "remedy": "Berberis Vulgaris",
            "potency": "Q (Mother Tincture)",
            "vehicle": "Mother Tincture",
            "dosage": "10 drops BD in warm water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1539",
        "patientId": "p-14",
        "date": "15 Jan 2026",
        "tokenNo": 12,
        "reaction": "Improved",
        "symptoms": "Renal Calculi (Left Flank Pain) markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2753",
            "remedy": "Berberis Vulgaris",
            "potency": "30C",
            "vehicle": "Mother Tincture",
            "dosage": "10 drops BD in warm water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-15",
    "mrn": "NK-1520",
    "fullName": "Naveed Akhtar",
    "relationType": "s/o",
    "relativeName": "Akhtar Ali",
    "age": 45,
    "gender": "Male",
    "phone": "0314-5566771",
    "locality": "Mohallah Farooqia",
    "totalVisits": 13,
    "lastVisitDate": "22 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-p-15-1",
        "name": "Chronic Gastric Acidity & Reflux",
        "severity": "Severe",
        "trend": "Improving",
        "duration": "2 yrs"
      }
    ],
    "severityTrend": {
      "complaintName": "Chronic Gastric Acidity & Reflux",
      "overallRelief": "-65% relief",
      "history": [
        {
          "label": "13 Nov",
          "date": "13 Nov 2026",
          "score": 80
        },
        {
          "label": "18 Nov",
          "date": "18 Nov 2026",
          "score": 60
        },
        {
          "label": "21 Nov",
          "date": "21 Nov 2026",
          "score": 40
        },
        {
          "label": "22 Nov",
          "date": "22 Nov 2026",
          "score": 20
        }
      ]
    },
    "pastVisits": [
      {
        "id": "v-1035",
        "patientId": "p-15",
        "date": "22 Nov 2026",
        "tokenNo": 8,
        "reaction": "No Change",
        "symptoms": "Persistent Chronic Gastric Acidity & Reflux. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2045",
            "remedy": "Nux Vomica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1049",
        "patientId": "p-15",
        "date": "21 Nov 2026",
        "tokenNo": 2,
        "reaction": "Decline",
        "symptoms": "Aggravation of Chronic Gastric Acidity & Reflux following cold exposure; acute recurrence.",
        "prescriptions": [
          {
            "id": "rx-2065",
            "remedy": "Nux Vomica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1101",
        "patientId": "p-15",
        "date": "18 Nov 2026",
        "tokenNo": 6,
        "reaction": "No Change",
        "symptoms": "Persistent Chronic Gastric Acidity & Reflux. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2137",
            "remedy": "Nux Vomica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1171",
        "patientId": "p-15",
        "date": "13 Nov 2026",
        "tokenNo": 9,
        "reaction": "No Change",
        "symptoms": "Persistent Chronic Gastric Acidity & Reflux. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2234",
            "remedy": "Nux Vomica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          },
          {
            "id": "rx-2235",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1199",
        "patientId": "p-15",
        "date": "11 Nov 2026",
        "tokenNo": 9,
        "reaction": "Improved",
        "symptoms": "Chronic Gastric Acidity & Reflux markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2275",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": true
          },
          {
            "id": "rx-2276",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1207",
        "patientId": "p-15",
        "date": "10 Nov 2026",
        "tokenNo": 5,
        "reaction": "Improved",
        "symptoms": "Chronic Gastric Acidity & Reflux markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2287",
            "remedy": "Nux Vomica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1293",
        "patientId": "p-15",
        "date": "03 Nov 2026",
        "tokenNo": 2,
        "reaction": "No Change",
        "symptoms": "Persistent Chronic Gastric Acidity & Reflux. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2409",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          },
          {
            "id": "rx-2410",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1318",
        "patientId": "p-15",
        "date": "02 Nov 2026",
        "tokenNo": 12,
        "reaction": "Improved",
        "symptoms": "Chronic Gastric Acidity & Reflux markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2445",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          },
          {
            "id": "rx-2446",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1321",
        "patientId": "p-15",
        "date": "01 Nov 2026",
        "tokenNo": 3,
        "reaction": "Improved",
        "symptoms": "Chronic Gastric Acidity & Reflux markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2451",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": true
          },
          {
            "id": "rx-2452",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1337",
        "patientId": "p-15",
        "date": "28 Oct 2026",
        "tokenNo": 11,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Chronic Gastric Acidity & Reflux since 2 yrs.",
        "prescriptions": [
          {
            "id": "rx-2474",
            "remedy": "Nux Vomica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1386",
        "patientId": "p-15",
        "date": "05 Sep 2026",
        "tokenNo": 3,
        "reaction": "Improved",
        "symptoms": "Chronic Gastric Acidity & Reflux markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2544",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1431",
        "patientId": "p-15",
        "date": "19 Jul 2026",
        "tokenNo": 6,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Chronic Gastric Acidity & Reflux since 2 yrs.",
        "prescriptions": [
          {
            "id": "rx-2604",
            "remedy": "Nux Vomica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1536",
        "patientId": "p-15",
        "date": "15 Jan 2026",
        "tokenNo": 9,
        "reaction": "Improved",
        "symptoms": "Chronic Gastric Acidity & Reflux markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2749",
            "remedy": "Nux Vomica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-16",
    "mrn": "NK-1546",
    "fullName": "Usman Ghani",
    "relationType": "s/o",
    "relativeName": "Abdul Shakoor",
    "age": 37,
    "gender": "Male",
    "phone": "0323-9988776",
    "locality": "Faisal Hills",
    "totalVisits": 12,
    "lastVisitDate": "24 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-p-16-1",
        "name": "Throbbing Headache & Photophobia",
        "severity": "Severe",
        "trend": "Improving",
        "duration": "6 mos"
      }
    ],
    "severityTrend": {
      "complaintName": "Throbbing Headache & Photophobia",
      "overallRelief": "-65% relief",
      "history": [
        {
          "label": "15 Nov",
          "date": "15 Nov 2026",
          "score": 80
        },
        {
          "label": "20 Nov",
          "date": "20 Nov 2026",
          "score": 60
        },
        {
          "label": "21 Nov",
          "date": "21 Nov 2026",
          "score": 40
        },
        {
          "label": "24 Nov",
          "date": "24 Nov 2026",
          "score": 20
        }
      ]
    },
    "pastVisits": [
      {
        "id": "v-1012",
        "patientId": "p-16",
        "date": "24 Nov 2026",
        "tokenNo": 12,
        "reaction": "No Change",
        "symptoms": "Persistent Throbbing Headache & Photophobia. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2016",
            "remedy": "Belladonna",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops SOS during acute throbbing attack",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1055",
        "patientId": "p-16",
        "date": "21 Nov 2026",
        "tokenNo": 8,
        "reaction": "Improved",
        "symptoms": "Throbbing Headache & Photophobia markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2073",
            "remedy": "Belladonna",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops SOS during acute throbbing attack",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1078",
        "patientId": "p-16",
        "date": "20 Nov 2026",
        "tokenNo": 14,
        "reaction": "Improved",
        "symptoms": "Throbbing Headache & Photophobia markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2105",
            "remedy": "Belladonna",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops SOS during acute throbbing attack",
            "isRepeat": true
          },
          {
            "id": "rx-2106",
            "remedy": "Calcarea Carbonica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1145",
        "patientId": "p-16",
        "date": "15 Nov 2026",
        "tokenNo": 10,
        "reaction": "No Change",
        "symptoms": "Persistent Throbbing Headache & Photophobia. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2198",
            "remedy": "Belladonna",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops SOS during acute throbbing attack",
            "isRepeat": false
          },
          {
            "id": "rx-2199",
            "remedy": "Calcarea Carbonica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1186",
        "patientId": "p-16",
        "date": "12 Nov 2026",
        "tokenNo": 11,
        "reaction": "No Change",
        "symptoms": "Persistent Throbbing Headache & Photophobia. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2255",
            "remedy": "Belladonna",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops SOS during acute throbbing attack",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1192",
        "patientId": "p-16",
        "date": "11 Nov 2026",
        "tokenNo": 2,
        "reaction": "No Change",
        "symptoms": "Persistent Throbbing Headache & Photophobia. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2263",
            "remedy": "Belladonna",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops SOS during acute throbbing attack",
            "isRepeat": false
          },
          {
            "id": "rx-2264",
            "remedy": "Calcarea Carbonica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 0,
        "feeStatus": "Free"
      },
      {
        "id": "v-1208",
        "patientId": "p-16",
        "date": "10 Nov 2026",
        "tokenNo": 6,
        "reaction": "Decline",
        "symptoms": "Aggravation of Throbbing Headache & Photophobia following cold exposure; acute recurrence.",
        "prescriptions": [
          {
            "id": "rx-2288",
            "remedy": "Belladonna",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops SOS during acute throbbing attack",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1252",
        "patientId": "p-16",
        "date": "07 Nov 2026",
        "tokenNo": 11,
        "reaction": "No Change",
        "symptoms": "Persistent Throbbing Headache & Photophobia. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2351",
            "remedy": "Belladonna",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops SOS during acute throbbing attack",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1312",
        "patientId": "p-16",
        "date": "02 Nov 2026",
        "tokenNo": 6,
        "reaction": "Improved",
        "symptoms": "Throbbing Headache & Photophobia markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2436",
            "remedy": "Belladonna",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops SOS during acute throbbing attack",
            "isRepeat": true
          },
          {
            "id": "rx-2437",
            "remedy": "Calcarea Carbonica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1364",
        "patientId": "p-16",
        "date": "02 Oct 2026",
        "tokenNo": 9,
        "reaction": "Decline",
        "symptoms": "Aggravation of Throbbing Headache & Photophobia following cold exposure; acute recurrence.",
        "prescriptions": [
          {
            "id": "rx-2511",
            "remedy": "Belladonna",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops SOS during acute throbbing attack",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1370",
        "patientId": "p-16",
        "date": "18 Sep 2026",
        "tokenNo": 3,
        "reaction": "Improved",
        "symptoms": "Throbbing Headache & Photophobia markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2520",
            "remedy": "Belladonna",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops SOS during acute throbbing attack",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1466",
        "patientId": "p-16",
        "date": "16 Jun 2026",
        "tokenNo": 13,
        "reaction": "Decline",
        "symptoms": "Aggravation of Throbbing Headache & Photophobia following cold exposure; acute recurrence.",
        "prescriptions": [
          {
            "id": "rx-2654",
            "remedy": "Belladonna",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops SOS during acute throbbing attack",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Due"
      }
    ]
  },
  {
    "id": "p-17",
    "mrn": "NK-1547",
    "fullName": "Hamza Shafiq",
    "relationType": "s/o",
    "relativeName": "Shafiq Ahmed",
    "age": 30,
    "gender": "Male",
    "phone": "0340-1122445",
    "locality": "Wah Cantt",
    "totalVisits": 3,
    "lastVisitDate": "14 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-p-17-1",
        "name": "Dry Eczema & Pruritus",
        "severity": "Moderate",
        "trend": "Stable",
        "duration": "18 mos"
      }
    ],
    "severityTrend": {
      "complaintName": "Dry Eczema & Pruritus",
      "overallRelief": "-65% relief",
      "history": [
        {
          "label": "14 Apr",
          "date": "14 Apr 2026",
          "score": 80
        },
        {
          "label": "18 Sep",
          "date": "18 Sep 2026",
          "score": 60
        },
        {
          "label": "14 Nov",
          "date": "14 Nov 2026",
          "score": 40
        }
      ]
    },
    "pastVisits": [
      {
        "id": "v-1152",
        "patientId": "p-17",
        "date": "14 Nov 2026",
        "tokenNo": 6,
        "reaction": "No Change",
        "symptoms": "Persistent Dry Eczema & Pruritus. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2208",
            "remedy": "Sulphur",
            "potency": "200C",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": false
          },
          {
            "id": "rx-2209",
            "remedy": "Allium Cepa",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops TDS for profuse lachrymation",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1374",
        "patientId": "p-17",
        "date": "18 Sep 2026",
        "tokenNo": 7,
        "reaction": "No Change",
        "symptoms": "Persistent Dry Eczema & Pruritus. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2526",
            "remedy": "Sulphur",
            "potency": "1M",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1488",
        "patientId": "p-17",
        "date": "14 Apr 2026",
        "tokenNo": 6,
        "reaction": "Improved",
        "symptoms": "Dry Eczema & Pruritus markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2681",
            "remedy": "Sulphur",
            "potency": "200C",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": true
          },
          {
            "id": "rx-2682",
            "remedy": "Allium Cepa",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops TDS for profuse lachrymation",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-18",
    "mrn": "NK-1521",
    "fullName": "Rashida Begum",
    "relationType": "w/o",
    "relativeName": "Muhammad Rafique",
    "age": 49,
    "gender": "Female",
    "phone": "0300-5544332",
    "locality": "Taxila Cantt",
    "totalVisits": 9,
    "lastVisitDate": "20 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-p-18-1",
        "name": "Knee Osteoarthritis",
        "severity": "Severe",
        "trend": "Improving",
        "duration": "5 yrs"
      }
    ],
    "severityTrend": {
      "complaintName": "Knee Osteoarthritis",
      "overallRelief": "-65% relief",
      "history": [
        {
          "label": "14 Nov",
          "date": "14 Nov 2026",
          "score": 80
        },
        {
          "label": "16 Nov",
          "date": "16 Nov 2026",
          "score": 60
        },
        {
          "label": "18 Nov",
          "date": "18 Nov 2026",
          "score": 40
        },
        {
          "label": "20 Nov",
          "date": "20 Nov 2026",
          "score": 20
        }
      ]
    },
    "pastVisits": [
      {
        "id": "v-1077",
        "patientId": "p-18",
        "date": "20 Nov 2026",
        "tokenNo": 13,
        "reaction": "No Change",
        "symptoms": "Persistent Knee Osteoarthritis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2104",
            "remedy": "Arnica Montana",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1109",
        "patientId": "p-18",
        "date": "18 Nov 2026",
        "tokenNo": 14,
        "reaction": "Improved",
        "symptoms": "Knee Osteoarthritis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2148",
            "remedy": "Arnica Montana",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": true
          },
          {
            "id": "rx-2149",
            "remedy": "Pulsatilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1132",
        "patientId": "p-18",
        "date": "16 Nov 2026",
        "tokenNo": 11,
        "reaction": "No Change",
        "symptoms": "Persistent Knee Osteoarthritis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2179",
            "remedy": "Arnica Montana",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1159",
        "patientId": "p-18",
        "date": "14 Nov 2026",
        "tokenNo": 13,
        "reaction": "Improved",
        "symptoms": "Knee Osteoarthritis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2216",
            "remedy": "Arnica Montana",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1214",
        "patientId": "p-18",
        "date": "10 Nov 2026",
        "tokenNo": 12,
        "reaction": "No Change",
        "symptoms": "Persistent Knee Osteoarthritis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2296",
            "remedy": "Arnica Montana",
            "potency": "1M",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1228",
        "patientId": "p-18",
        "date": "08 Nov 2026",
        "tokenNo": 2,
        "reaction": "Improved",
        "symptoms": "Knee Osteoarthritis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2316",
            "remedy": "Arnica Montana",
            "potency": "1M",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1254",
        "patientId": "p-18",
        "date": "06 Nov 2026",
        "tokenNo": 1,
        "reaction": "Improved",
        "symptoms": "Knee Osteoarthritis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2354",
            "remedy": "Arnica Montana",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1416",
        "patientId": "p-18",
        "date": "08 Aug 2026",
        "tokenNo": 4,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Knee Osteoarthritis since 5 yrs.",
        "prescriptions": [
          {
            "id": "rx-2584",
            "remedy": "Arnica Montana",
            "potency": "1M",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1476",
        "patientId": "p-18",
        "date": "20 May 2026",
        "tokenNo": 8,
        "reaction": "No Change",
        "symptoms": "Persistent Knee Osteoarthritis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2667",
            "remedy": "Arnica Montana",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-19",
    "mrn": "NK-1522",
    "fullName": "Kaneez Fatima",
    "relationType": "w/o",
    "relativeName": "Syed Abid Shah",
    "age": 54,
    "gender": "Female",
    "phone": "0313-9988776",
    "locality": "Wah Model Town",
    "totalVisits": 12,
    "lastVisitDate": "15 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-p-19-1",
        "name": "Throbbing Headache & Photophobia",
        "severity": "Severe",
        "trend": "Improving",
        "duration": "6 mos"
      }
    ],
    "severityTrend": {
      "complaintName": "Throbbing Headache & Photophobia",
      "overallRelief": "-65% relief",
      "history": [
        {
          "label": "11 Nov",
          "date": "11 Nov 2026",
          "score": 80
        },
        {
          "label": "12 Nov",
          "date": "12 Nov 2026",
          "score": 60
        },
        {
          "label": "14 Nov",
          "date": "14 Nov 2026",
          "score": 40
        },
        {
          "label": "15 Nov",
          "date": "15 Nov 2026",
          "score": 20
        }
      ]
    },
    "pastVisits": [
      {
        "id": "v-1142",
        "patientId": "p-19",
        "date": "15 Nov 2026",
        "tokenNo": 7,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Throbbing Headache & Photophobia since 6 mos.",
        "prescriptions": [
          {
            "id": "rx-2192",
            "remedy": "Belladonna",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops SOS during acute throbbing attack",
            "isRepeat": false
          },
          {
            "id": "rx-2193",
            "remedy": "Calcarea Carbonica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1153",
        "patientId": "p-19",
        "date": "14 Nov 2026",
        "tokenNo": 7,
        "reaction": "Improved",
        "symptoms": "Throbbing Headache & Photophobia markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2210",
            "remedy": "Belladonna",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops SOS during acute throbbing attack",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1181",
        "patientId": "p-19",
        "date": "12 Nov 2026",
        "tokenNo": 6,
        "reaction": "No Change",
        "symptoms": "Persistent Throbbing Headache & Photophobia. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2249",
            "remedy": "Belladonna",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops SOS during acute throbbing attack",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1191",
        "patientId": "p-19",
        "date": "11 Nov 2026",
        "tokenNo": 1,
        "reaction": "No Change",
        "symptoms": "Persistent Throbbing Headache & Photophobia. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2261",
            "remedy": "Belladonna",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops SOS during acute throbbing attack",
            "isRepeat": false
          },
          {
            "id": "rx-2262",
            "remedy": "Calcarea Carbonica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1234",
        "patientId": "p-19",
        "date": "08 Nov 2026",
        "tokenNo": 8,
        "reaction": "Improved",
        "symptoms": "Throbbing Headache & Photophobia markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2324",
            "remedy": "Belladonna",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops SOS during acute throbbing attack",
            "isRepeat": true
          },
          {
            "id": "rx-2325",
            "remedy": "Calcarea Carbonica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1295",
        "patientId": "p-19",
        "date": "03 Nov 2026",
        "tokenNo": 4,
        "reaction": "Decline",
        "symptoms": "Aggravation of Throbbing Headache & Photophobia following cold exposure; acute recurrence.",
        "prescriptions": [
          {
            "id": "rx-2413",
            "remedy": "Belladonna",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops SOS during acute throbbing attack",
            "isRepeat": false
          },
          {
            "id": "rx-2414",
            "remedy": "Calcarea Carbonica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1346",
        "patientId": "p-19",
        "date": "15 Oct 2026",
        "tokenNo": 6,
        "reaction": "Improved",
        "symptoms": "Throbbing Headache & Photophobia markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2486",
            "remedy": "Belladonna",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops SOS during acute throbbing attack",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1441",
        "patientId": "p-19",
        "date": "19 Jul 2026",
        "tokenNo": 16,
        "reaction": "No Change",
        "symptoms": "Persistent Throbbing Headache & Photophobia. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2618",
            "remedy": "Belladonna",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops SOS during acute throbbing attack",
            "isRepeat": false
          },
          {
            "id": "rx-2619",
            "remedy": "Calcarea Carbonica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1454",
        "patientId": "p-19",
        "date": "16 Jun 2026",
        "tokenNo": 1,
        "reaction": "Improved",
        "symptoms": "Throbbing Headache & Photophobia markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2637",
            "remedy": "Belladonna",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops SOS during acute throbbing attack",
            "isRepeat": true
          },
          {
            "id": "rx-2638",
            "remedy": "Calcarea Carbonica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1496",
        "patientId": "p-19",
        "date": "14 Apr 2026",
        "tokenNo": 14,
        "reaction": "Decline",
        "symptoms": "Aggravation of Throbbing Headache & Photophobia following cold exposure; acute recurrence.",
        "prescriptions": [
          {
            "id": "rx-2692",
            "remedy": "Belladonna",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops SOS during acute throbbing attack",
            "isRepeat": false
          },
          {
            "id": "rx-2693",
            "remedy": "Calcarea Carbonica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1508",
        "patientId": "p-19",
        "date": "18 Mar 2026",
        "tokenNo": 10,
        "reaction": "No Change",
        "symptoms": "Persistent Throbbing Headache & Photophobia. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2711",
            "remedy": "Belladonna",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops SOS during acute throbbing attack",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1527",
        "patientId": "p-19",
        "date": "22 Feb 2026",
        "tokenNo": 14,
        "reaction": "Improved",
        "symptoms": "Throbbing Headache & Photophobia markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2738",
            "remedy": "Belladonna",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops SOS during acute throbbing attack",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-20",
    "mrn": "NK-1523",
    "fullName": "Rabia Basri",
    "relationType": "d/o",
    "relativeName": "Abdul Ghaffar",
    "age": 22,
    "gender": "Female",
    "phone": "0344-1234567",
    "locality": "Lala Rukh",
    "totalVisits": 15,
    "lastVisitDate": "23 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-p-20-1",
        "name": "Dry Eczema & Pruritus",
        "severity": "Moderate",
        "trend": "Stable",
        "duration": "18 mos"
      }
    ],
    "severityTrend": {
      "complaintName": "Dry Eczema & Pruritus",
      "overallRelief": "-65% relief",
      "history": [
        {
          "label": "20 Nov",
          "date": "20 Nov 2026",
          "score": 80
        },
        {
          "label": "21 Nov",
          "date": "21 Nov 2026",
          "score": 60
        },
        {
          "label": "22 Nov",
          "date": "22 Nov 2026",
          "score": 40
        },
        {
          "label": "23 Nov",
          "date": "23 Nov 2026",
          "score": 20
        }
      ]
    },
    "pastVisits": [
      {
        "id": "v-1021",
        "patientId": "p-20",
        "date": "23 Nov 2026",
        "tokenNo": 3,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Dry Eczema & Pruritus since 18 mos.",
        "prescriptions": [
          {
            "id": "rx-2028",
            "remedy": "Sulphur",
            "potency": "1M",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1030",
        "patientId": "p-20",
        "date": "22 Nov 2026",
        "tokenNo": 3,
        "reaction": "Improved",
        "symptoms": "Dry Eczema & Pruritus markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2039",
            "remedy": "Sulphur",
            "potency": "1M",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1058",
        "patientId": "p-20",
        "date": "21 Nov 2026",
        "tokenNo": 11,
        "reaction": "Improved",
        "symptoms": "Dry Eczema & Pruritus markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2077",
            "remedy": "Sulphur",
            "potency": "200C",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": true
          },
          {
            "id": "rx-2078",
            "remedy": "Allium Cepa",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops TDS for profuse lachrymation",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1076",
        "patientId": "p-20",
        "date": "20 Nov 2026",
        "tokenNo": 12,
        "reaction": "Improved",
        "symptoms": "Dry Eczema & Pruritus markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2103",
            "remedy": "Sulphur",
            "potency": "1M",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1129",
        "patientId": "p-20",
        "date": "16 Nov 2026",
        "tokenNo": 8,
        "reaction": "Improved",
        "symptoms": "Dry Eczema & Pruritus markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2176",
            "remedy": "Sulphur",
            "potency": "200C",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1216",
        "patientId": "p-20",
        "date": "10 Nov 2026",
        "tokenNo": 14,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Dry Eczema & Pruritus since 18 mos.",
        "prescriptions": [
          {
            "id": "rx-2298",
            "remedy": "Sulphur",
            "potency": "1M",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": false
          },
          {
            "id": "rx-2299",
            "remedy": "Allium Cepa",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops TDS for profuse lachrymation",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1261",
        "patientId": "p-20",
        "date": "06 Nov 2026",
        "tokenNo": 8,
        "reaction": "Decline",
        "symptoms": "Aggravation of Dry Eczema & Pruritus following cold exposure; acute recurrence.",
        "prescriptions": [
          {
            "id": "rx-2365",
            "remedy": "Sulphur",
            "potency": "200C",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1305",
        "patientId": "p-20",
        "date": "03 Nov 2026",
        "tokenNo": 14,
        "reaction": "Improved",
        "symptoms": "Dry Eczema & Pruritus markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2426",
            "remedy": "Sulphur",
            "potency": "200C",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": true
          },
          {
            "id": "rx-2427",
            "remedy": "Allium Cepa",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops TDS for profuse lachrymation",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1343",
        "patientId": "p-20",
        "date": "15 Oct 2026",
        "tokenNo": 3,
        "reaction": "Improved",
        "symptoms": "Dry Eczema & Pruritus markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2481",
            "remedy": "Sulphur",
            "potency": "200C",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": true
          },
          {
            "id": "rx-2482",
            "remedy": "Allium Cepa",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops TDS for profuse lachrymation",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1422",
        "patientId": "p-20",
        "date": "08 Aug 2026",
        "tokenNo": 10,
        "reaction": "Improved",
        "symptoms": "Dry Eczema & Pruritus markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2593",
            "remedy": "Sulphur",
            "potency": "200C",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 0,
        "feeStatus": "Free"
      },
      {
        "id": "v-1468",
        "patientId": "p-20",
        "date": "16 Jun 2026",
        "tokenNo": 15,
        "reaction": "No Change",
        "symptoms": "Persistent Dry Eczema & Pruritus. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2657",
            "remedy": "Sulphur",
            "potency": "200C",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1481",
        "patientId": "p-20",
        "date": "20 May 2026",
        "tokenNo": 13,
        "reaction": "Improved",
        "symptoms": "Dry Eczema & Pruritus markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2672",
            "remedy": "Sulphur",
            "potency": "200C",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1513",
        "patientId": "p-20",
        "date": "18 Mar 2026",
        "tokenNo": 15,
        "reaction": "No Change",
        "symptoms": "Persistent Dry Eczema & Pruritus. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2717",
            "remedy": "Sulphur",
            "potency": "200C",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 0,
        "feeStatus": "Free"
      },
      {
        "id": "v-1520",
        "patientId": "p-20",
        "date": "22 Feb 2026",
        "tokenNo": 7,
        "reaction": "Improved",
        "symptoms": "Dry Eczema & Pruritus markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2728",
            "remedy": "Sulphur",
            "potency": "200C",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1528",
        "patientId": "p-20",
        "date": "15 Jan 2026",
        "tokenNo": 1,
        "reaction": "Improved",
        "symptoms": "Dry Eczema & Pruritus markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2739",
            "remedy": "Sulphur",
            "potency": "1M",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Due"
      }
    ]
  },
  {
    "id": "p-21",
    "mrn": "NK-1524",
    "fullName": "Rukhsana Bibi",
    "relationType": "w/o",
    "relativeName": "Muhammad Anwar",
    "age": 40,
    "gender": "Female",
    "phone": "0306-7890123",
    "locality": "Sarai Kala",
    "totalVisits": 13,
    "lastVisitDate": "15 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-p-21-1",
        "name": "Right-Sided Migraine",
        "severity": "Moderate",
        "trend": "Improving",
        "duration": "4 yrs"
      }
    ],
    "severityTrend": {
      "complaintName": "Right-Sided Migraine",
      "overallRelief": "-65% relief",
      "history": [
        {
          "label": "02 Nov",
          "date": "02 Nov 2026",
          "score": 80
        },
        {
          "label": "10 Nov",
          "date": "10 Nov 2026",
          "score": 60
        },
        {
          "label": "14 Nov",
          "date": "14 Nov 2026",
          "score": 40
        },
        {
          "label": "15 Nov",
          "date": "15 Nov 2026",
          "score": 20
        }
      ]
    },
    "pastVisits": [
      {
        "id": "v-1146",
        "patientId": "p-21",
        "date": "15 Nov 2026",
        "tokenNo": 11,
        "reaction": "Improved",
        "symptoms": "Right-Sided Migraine markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2200",
            "remedy": "Bryonia Alba",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops BD in half cup water",
            "isRepeat": true
          },
          {
            "id": "rx-2201",
            "remedy": "Arnica Montana",
            "potency": "1M",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1154",
        "patientId": "p-21",
        "date": "14 Nov 2026",
        "tokenNo": 8,
        "reaction": "Improved",
        "symptoms": "Right-Sided Migraine markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2211",
            "remedy": "Bryonia Alba",
            "potency": "1M",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops BD in half cup water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1212",
        "patientId": "p-21",
        "date": "10 Nov 2026",
        "tokenNo": 10,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Right-Sided Migraine since 4 yrs.",
        "prescriptions": [
          {
            "id": "rx-2293",
            "remedy": "Bryonia Alba",
            "potency": "1M",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops BD in half cup water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1317",
        "patientId": "p-21",
        "date": "02 Nov 2026",
        "tokenNo": 11,
        "reaction": "No Change",
        "symptoms": "Persistent Right-Sided Migraine. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2444",
            "remedy": "Bryonia Alba",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops BD in half cup water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1329",
        "patientId": "p-21",
        "date": "28 Oct 2026",
        "tokenNo": 3,
        "reaction": "No Change",
        "symptoms": "Persistent Right-Sided Migraine. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2463",
            "remedy": "Bryonia Alba",
            "potency": "1M",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops BD in half cup water",
            "isRepeat": false
          },
          {
            "id": "rx-2464",
            "remedy": "Arnica Montana",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1359",
        "patientId": "p-21",
        "date": "02 Oct 2026",
        "tokenNo": 4,
        "reaction": "Improved",
        "symptoms": "Right-Sided Migraine markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2506",
            "remedy": "Bryonia Alba",
            "potency": "1M",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops BD in half cup water",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1379",
        "patientId": "p-21",
        "date": "18 Sep 2026",
        "tokenNo": 12,
        "reaction": "Improved",
        "symptoms": "Right-Sided Migraine markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2534",
            "remedy": "Bryonia Alba",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops BD in half cup water",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1394",
        "patientId": "p-21",
        "date": "05 Sep 2026",
        "tokenNo": 11,
        "reaction": "Improved",
        "symptoms": "Right-Sided Migraine markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2556",
            "remedy": "Bryonia Alba",
            "potency": "1M",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops BD in half cup water",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1400",
        "patientId": "p-21",
        "date": "22 Aug 2026",
        "tokenNo": 3,
        "reaction": "Improved",
        "symptoms": "Right-Sided Migraine markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2563",
            "remedy": "Bryonia Alba",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops BD in half cup water",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1420",
        "patientId": "p-21",
        "date": "08 Aug 2026",
        "tokenNo": 8,
        "reaction": "No Change",
        "symptoms": "Persistent Right-Sided Migraine. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2591",
            "remedy": "Bryonia Alba",
            "potency": "1M",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops BD in half cup water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1480",
        "patientId": "p-21",
        "date": "20 May 2026",
        "tokenNo": 12,
        "reaction": "Decline",
        "symptoms": "Aggravation of Right-Sided Migraine following cold exposure; acute recurrence.",
        "prescriptions": [
          {
            "id": "rx-2671",
            "remedy": "Bryonia Alba",
            "potency": "1M",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops BD in half cup water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1501",
        "patientId": "p-21",
        "date": "18 Mar 2026",
        "tokenNo": 3,
        "reaction": "Improved",
        "symptoms": "Right-Sided Migraine markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2700",
            "remedy": "Bryonia Alba",
            "potency": "1M",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops BD in half cup water",
            "isRepeat": false
          },
          {
            "id": "rx-2701",
            "remedy": "Arnica Montana",
            "potency": "1M",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1542",
        "patientId": "p-21",
        "date": "15 Jan 2026",
        "tokenNo": 15,
        "reaction": "No Change",
        "symptoms": "Persistent Right-Sided Migraine. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2758",
            "remedy": "Bryonia Alba",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops BD in half cup water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 0,
        "feeStatus": "Free"
      }
    ]
  },
  {
    "id": "p-22",
    "mrn": "NK-1525",
    "fullName": "Asma Riaz",
    "relationType": "w/o",
    "relativeName": "Riaz Mehmood",
    "age": 36,
    "gender": "Female",
    "phone": "0334-9081726",
    "locality": "Museum Road",
    "totalVisits": 12,
    "lastVisitDate": "24 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-p-22-1",
        "name": "Allergic Rhinitis & Sinusitis",
        "severity": "Mild",
        "trend": "Improving",
        "duration": "2 yrs"
      }
    ],
    "severityTrend": {
      "complaintName": "Allergic Rhinitis & Sinusitis",
      "overallRelief": "-65% relief",
      "history": [
        {
          "label": "15 Nov",
          "date": "15 Nov 2026",
          "score": 80
        },
        {
          "label": "21 Nov",
          "date": "21 Nov 2026",
          "score": 60
        },
        {
          "label": "22 Nov",
          "date": "22 Nov 2026",
          "score": 40
        },
        {
          "label": "24 Nov",
          "date": "24 Nov 2026",
          "score": 20
        }
      ]
    },
    "pastVisits": [
      {
        "id": "v-1011",
        "patientId": "p-22",
        "date": "24 Nov 2026",
        "tokenNo": 11,
        "reaction": "No Change",
        "symptoms": "Persistent Allergic Rhinitis & Sinusitis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2015",
            "remedy": "Pulsatilla",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1040",
        "patientId": "p-22",
        "date": "22 Nov 2026",
        "tokenNo": 13,
        "reaction": "Improved",
        "symptoms": "Allergic Rhinitis & Sinusitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2051",
            "remedy": "Pulsatilla",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1054",
        "patientId": "p-22",
        "date": "21 Nov 2026",
        "tokenNo": 7,
        "reaction": "Improved",
        "symptoms": "Allergic Rhinitis & Sinusitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2072",
            "remedy": "Pulsatilla",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1138",
        "patientId": "p-22",
        "date": "15 Nov 2026",
        "tokenNo": 3,
        "reaction": "Decline",
        "symptoms": "Aggravation of Allergic Rhinitis & Sinusitis following cold exposure; acute recurrence.",
        "prescriptions": [
          {
            "id": "rx-2187",
            "remedy": "Pulsatilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1275",
        "patientId": "p-22",
        "date": "05 Nov 2026",
        "tokenNo": 9,
        "reaction": "No Change",
        "symptoms": "Persistent Allergic Rhinitis & Sinusitis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2383",
            "remedy": "Pulsatilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          },
          {
            "id": "rx-2384",
            "remedy": "Lycopodium",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops 4 PM in water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1282",
        "patientId": "p-22",
        "date": "04 Nov 2026",
        "tokenNo": 2,
        "reaction": "Improved",
        "symptoms": "Allergic Rhinitis & Sinusitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2393",
            "remedy": "Pulsatilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": true
          },
          {
            "id": "rx-2394",
            "remedy": "Lycopodium",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops 4 PM in water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1331",
        "patientId": "p-22",
        "date": "28 Oct 2026",
        "tokenNo": 5,
        "reaction": "Improved",
        "symptoms": "Allergic Rhinitis & Sinusitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2466",
            "remedy": "Pulsatilla",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": true
          },
          {
            "id": "rx-2467",
            "remedy": "Lycopodium",
            "potency": "1M",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops 4 PM in water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1341",
        "patientId": "p-22",
        "date": "15 Oct 2026",
        "tokenNo": 1,
        "reaction": "No Change",
        "symptoms": "Persistent Allergic Rhinitis & Sinusitis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2479",
            "remedy": "Pulsatilla",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1398",
        "patientId": "p-22",
        "date": "22 Aug 2026",
        "tokenNo": 1,
        "reaction": "Improved",
        "symptoms": "Allergic Rhinitis & Sinusitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2561",
            "remedy": "Pulsatilla",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 0,
        "feeStatus": "Free"
      },
      {
        "id": "v-1435",
        "patientId": "p-22",
        "date": "19 Jul 2026",
        "tokenNo": 10,
        "reaction": "No Change",
        "symptoms": "Persistent Allergic Rhinitis & Sinusitis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2610",
            "remedy": "Pulsatilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          },
          {
            "id": "rx-2611",
            "remedy": "Lycopodium",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops 4 PM in water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1463",
        "patientId": "p-22",
        "date": "16 Jun 2026",
        "tokenNo": 10,
        "reaction": "No Change",
        "symptoms": "Persistent Allergic Rhinitis & Sinusitis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2651",
            "remedy": "Pulsatilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1537",
        "patientId": "p-22",
        "date": "15 Jan 2026",
        "tokenNo": 10,
        "reaction": "Improved",
        "symptoms": "Allergic Rhinitis & Sinusitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2750",
            "remedy": "Pulsatilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-23",
    "mrn": "NK-1526",
    "fullName": "Nusrat Jahan",
    "relationType": "w/o",
    "relativeName": "Jahangir Khan",
    "age": 47,
    "gender": "Female",
    "phone": "0311-6655443",
    "locality": "Faisal Hills",
    "totalVisits": 12,
    "lastVisitDate": "24 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-p-23-1",
        "name": "Chronic Gastric Acidity & Reflux",
        "severity": "Severe",
        "trend": "Improving",
        "duration": "2 yrs"
      }
    ],
    "severityTrend": {
      "complaintName": "Chronic Gastric Acidity & Reflux",
      "overallRelief": "-65% relief",
      "history": [
        {
          "label": "09 Nov",
          "date": "09 Nov 2026",
          "score": 80
        },
        {
          "label": "14 Nov",
          "date": "14 Nov 2026",
          "score": 60
        },
        {
          "label": "20 Nov",
          "date": "20 Nov 2026",
          "score": 40
        },
        {
          "label": "24 Nov",
          "date": "24 Nov 2026",
          "score": 20
        }
      ]
    },
    "pastVisits": [
      {
        "id": "v-1013",
        "patientId": "p-23",
        "date": "24 Nov 2026",
        "tokenNo": 13,
        "reaction": "Improved",
        "symptoms": "Chronic Gastric Acidity & Reflux markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2017",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": true
          },
          {
            "id": "rx-2018",
            "remedy": "Rhus Toxicodendron",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1080",
        "patientId": "p-23",
        "date": "20 Nov 2026",
        "tokenNo": 16,
        "reaction": "No Change",
        "symptoms": "Persistent Chronic Gastric Acidity & Reflux. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2108",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          },
          {
            "id": "rx-2109",
            "remedy": "Rhus Toxicodendron",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1162",
        "patientId": "p-23",
        "date": "14 Nov 2026",
        "tokenNo": 16,
        "reaction": "Decline",
        "symptoms": "Aggravation of Chronic Gastric Acidity & Reflux following cold exposure; acute recurrence.",
        "prescriptions": [
          {
            "id": "rx-2221",
            "remedy": "Nux Vomica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          },
          {
            "id": "rx-2222",
            "remedy": "Rhus Toxicodendron",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1220",
        "patientId": "p-23",
        "date": "09 Nov 2026",
        "tokenNo": 4,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Chronic Gastric Acidity & Reflux since 2 yrs.",
        "prescriptions": [
          {
            "id": "rx-2303",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          },
          {
            "id": "rx-2304",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1302",
        "patientId": "p-23",
        "date": "03 Nov 2026",
        "tokenNo": 11,
        "reaction": "Improved",
        "symptoms": "Chronic Gastric Acidity & Reflux markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2423",
            "remedy": "Nux Vomica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1324",
        "patientId": "p-23",
        "date": "01 Nov 2026",
        "tokenNo": 6,
        "reaction": "No Change",
        "symptoms": "Persistent Chronic Gastric Acidity & Reflux. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2456",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          },
          {
            "id": "rx-2457",
            "remedy": "Rhus Toxicodendron",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1347",
        "patientId": "p-23",
        "date": "15 Oct 2026",
        "tokenNo": 7,
        "reaction": "Improved",
        "symptoms": "Chronic Gastric Acidity & Reflux markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2487",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": true
          },
          {
            "id": "rx-2488",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1377",
        "patientId": "p-23",
        "date": "18 Sep 2026",
        "tokenNo": 10,
        "reaction": "No Change",
        "symptoms": "Persistent Chronic Gastric Acidity & Reflux. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2531",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          },
          {
            "id": "rx-2532",
            "remedy": "Rhus Toxicodendron",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1390",
        "patientId": "p-23",
        "date": "05 Sep 2026",
        "tokenNo": 7,
        "reaction": "Improved",
        "symptoms": "Chronic Gastric Acidity & Reflux markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2549",
            "remedy": "Nux Vomica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1415",
        "patientId": "p-23",
        "date": "08 Aug 2026",
        "tokenNo": 3,
        "reaction": "Improved",
        "symptoms": "Chronic Gastric Acidity & Reflux markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2583",
            "remedy": "Nux Vomica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1455",
        "patientId": "p-23",
        "date": "16 Jun 2026",
        "tokenNo": 2,
        "reaction": "Decline",
        "symptoms": "Aggravation of Chronic Gastric Acidity & Reflux following cold exposure; acute recurrence.",
        "prescriptions": [
          {
            "id": "rx-2639",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1492",
        "patientId": "p-23",
        "date": "14 Apr 2026",
        "tokenNo": 10,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Chronic Gastric Acidity & Reflux since 2 yrs.",
        "prescriptions": [
          {
            "id": "rx-2687",
            "remedy": "Nux Vomica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          },
          {
            "id": "rx-2688",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-24",
    "mrn": "NK-1527",
    "fullName": "Haleema Sadia",
    "relationType": "d/o",
    "relativeName": "Muhammad Qasim",
    "age": 25,
    "gender": "Female",
    "phone": "0324-4433221",
    "locality": "Taxila Cantt",
    "totalVisits": 7,
    "lastVisitDate": "24 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-p-24-1",
        "name": "Allergic Asthma & Wheezing",
        "severity": "Moderate",
        "trend": "Stable",
        "duration": "3 yrs"
      }
    ],
    "severityTrend": {
      "complaintName": "Allergic Asthma & Wheezing",
      "overallRelief": "-65% relief",
      "history": [
        {
          "label": "15 Oct",
          "date": "15 Oct 2026",
          "score": 80
        },
        {
          "label": "11 Nov",
          "date": "11 Nov 2026",
          "score": 60
        },
        {
          "label": "14 Nov",
          "date": "14 Nov 2026",
          "score": 40
        },
        {
          "label": "24 Nov",
          "date": "24 Nov 2026",
          "score": 20
        }
      ]
    },
    "pastVisits": [
      {
        "id": "v-1003",
        "patientId": "p-24",
        "date": "24 Nov 2026",
        "tokenNo": 3,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Allergic Asthma & Wheezing since 3 yrs.",
        "prescriptions": [
          {
            "id": "rx-2003",
            "remedy": "Arsenicum Album",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 0,
        "feeStatus": "Free"
      },
      {
        "id": "v-1156",
        "patientId": "p-24",
        "date": "14 Nov 2026",
        "tokenNo": 10,
        "reaction": "Improved",
        "symptoms": "Allergic Asthma & Wheezing markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2213",
            "remedy": "Arsenicum Album",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops TDS",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 0,
        "feeStatus": "Free"
      },
      {
        "id": "v-1194",
        "patientId": "p-24",
        "date": "11 Nov 2026",
        "tokenNo": 4,
        "reaction": "No Change",
        "symptoms": "Persistent Allergic Asthma & Wheezing. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2267",
            "remedy": "Arsenicum Album",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1348",
        "patientId": "p-24",
        "date": "15 Oct 2026",
        "tokenNo": 8,
        "reaction": "No Change",
        "symptoms": "Persistent Allergic Asthma & Wheezing. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2489",
            "remedy": "Arsenicum Album",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops TDS",
            "isRepeat": false
          },
          {
            "id": "rx-2490",
            "remedy": "Belladonna",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops SOS during acute throbbing attack",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1360",
        "patientId": "p-24",
        "date": "02 Oct 2026",
        "tokenNo": 5,
        "reaction": "Decline",
        "symptoms": "Aggravation of Allergic Asthma & Wheezing following cold exposure; acute recurrence.",
        "prescriptions": [
          {
            "id": "rx-2507",
            "remedy": "Arsenicum Album",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1484",
        "patientId": "p-24",
        "date": "14 Apr 2026",
        "tokenNo": 2,
        "reaction": "Decline",
        "symptoms": "Aggravation of Allergic Asthma & Wheezing following cold exposure; acute recurrence.",
        "prescriptions": [
          {
            "id": "rx-2676",
            "remedy": "Arsenicum Album",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops TDS",
            "isRepeat": false
          },
          {
            "id": "rx-2677",
            "remedy": "Belladonna",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops SOS during acute throbbing attack",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1535",
        "patientId": "p-24",
        "date": "15 Jan 2026",
        "tokenNo": 8,
        "reaction": "Improved",
        "symptoms": "Allergic Asthma & Wheezing markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2748",
            "remedy": "Arsenicum Album",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops TDS",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 0,
        "feeStatus": "Free"
      }
    ]
  },
  {
    "id": "p-25",
    "mrn": "NK-1528",
    "fullName": "Samina Kausar",
    "relationType": "w/o",
    "relativeName": "Tahir Mahmood",
    "age": 38,
    "gender": "Female",
    "phone": "0347-8899001",
    "locality": "Wah Cantt",
    "totalVisits": 10,
    "lastVisitDate": "22 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-p-25-1",
        "name": "Dry Eczema & Pruritus",
        "severity": "Moderate",
        "trend": "Stable",
        "duration": "18 mos"
      }
    ],
    "severityTrend": {
      "complaintName": "Dry Eczema & Pruritus",
      "overallRelief": "-65% relief",
      "history": [
        {
          "label": "04 Nov",
          "date": "04 Nov 2026",
          "score": 80
        },
        {
          "label": "18 Nov",
          "date": "18 Nov 2026",
          "score": 60
        },
        {
          "label": "21 Nov",
          "date": "21 Nov 2026",
          "score": 40
        },
        {
          "label": "22 Nov",
          "date": "22 Nov 2026",
          "score": 20
        }
      ]
    },
    "pastVisits": [
      {
        "id": "v-1034",
        "patientId": "p-25",
        "date": "22 Nov 2026",
        "tokenNo": 7,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Dry Eczema & Pruritus since 18 mos.",
        "prescriptions": [
          {
            "id": "rx-2043",
            "remedy": "Sulphur",
            "potency": "200C",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": false
          },
          {
            "id": "rx-2044",
            "remedy": "Allium Cepa",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops TDS for profuse lachrymation",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1051",
        "patientId": "p-25",
        "date": "21 Nov 2026",
        "tokenNo": 4,
        "reaction": "Decline",
        "symptoms": "Aggravation of Dry Eczema & Pruritus following cold exposure; acute recurrence.",
        "prescriptions": [
          {
            "id": "rx-2067",
            "remedy": "Sulphur",
            "potency": "200C",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1097",
        "patientId": "p-25",
        "date": "18 Nov 2026",
        "tokenNo": 2,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Dry Eczema & Pruritus since 18 mos.",
        "prescriptions": [
          {
            "id": "rx-2131",
            "remedy": "Sulphur",
            "potency": "200C",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1283",
        "patientId": "p-25",
        "date": "04 Nov 2026",
        "tokenNo": 3,
        "reaction": "Decline",
        "symptoms": "Aggravation of Dry Eczema & Pruritus following cold exposure; acute recurrence.",
        "prescriptions": [
          {
            "id": "rx-2395",
            "remedy": "Sulphur",
            "potency": "1M",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": false
          },
          {
            "id": "rx-2396",
            "remedy": "Allium Cepa",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops TDS for profuse lachrymation",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1339",
        "patientId": "p-25",
        "date": "28 Oct 2026",
        "tokenNo": 13,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Dry Eczema & Pruritus since 18 mos.",
        "prescriptions": [
          {
            "id": "rx-2477",
            "remedy": "Sulphur",
            "potency": "1M",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1396",
        "patientId": "p-25",
        "date": "05 Sep 2026",
        "tokenNo": 13,
        "reaction": "Improved",
        "symptoms": "Dry Eczema & Pruritus markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2558",
            "remedy": "Sulphur",
            "potency": "1M",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": false
          },
          {
            "id": "rx-2559",
            "remedy": "Allium Cepa",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops TDS for profuse lachrymation",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1406",
        "patientId": "p-25",
        "date": "22 Aug 2026",
        "tokenNo": 9,
        "reaction": "No Change",
        "symptoms": "Persistent Dry Eczema & Pruritus. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2570",
            "remedy": "Sulphur",
            "potency": "1M",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1413",
        "patientId": "p-25",
        "date": "08 Aug 2026",
        "tokenNo": 1,
        "reaction": "No Change",
        "symptoms": "Persistent Dry Eczema & Pruritus. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2579",
            "remedy": "Sulphur",
            "potency": "1M",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": false
          },
          {
            "id": "rx-2580",
            "remedy": "Allium Cepa",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops TDS for profuse lachrymation",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1427",
        "patientId": "p-25",
        "date": "19 Jul 2026",
        "tokenNo": 2,
        "reaction": "Improved",
        "symptoms": "Dry Eczema & Pruritus markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2599",
            "remedy": "Sulphur",
            "potency": "200C",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1473",
        "patientId": "p-25",
        "date": "20 May 2026",
        "tokenNo": 5,
        "reaction": "Improved",
        "symptoms": "Dry Eczema & Pruritus markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2664",
            "remedy": "Sulphur",
            "potency": "200C",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-26",
    "mrn": "NK-1529",
    "fullName": "Zubaida Khatoon",
    "relationType": "w/o",
    "relativeName": "Mushtaq Ahmed",
    "age": 53,
    "gender": "Female",
    "phone": "0303-3322114",
    "locality": "Mohallah Farooqia",
    "totalVisits": 11,
    "lastVisitDate": "24 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-p-26-1",
        "name": "Knee Osteoarthritis",
        "severity": "Severe",
        "trend": "Improving",
        "duration": "5 yrs"
      }
    ],
    "severityTrend": {
      "complaintName": "Knee Osteoarthritis",
      "overallRelief": "-65% relief",
      "history": [
        {
          "label": "13 Nov",
          "date": "13 Nov 2026",
          "score": 80
        },
        {
          "label": "19 Nov",
          "date": "19 Nov 2026",
          "score": 60
        },
        {
          "label": "22 Nov",
          "date": "22 Nov 2026",
          "score": 40
        },
        {
          "label": "24 Nov",
          "date": "24 Nov 2026",
          "score": 20
        }
      ]
    },
    "pastVisits": [
      {
        "id": "v-1017",
        "patientId": "p-26",
        "date": "24 Nov 2026",
        "tokenNo": 17,
        "reaction": "Improved",
        "symptoms": "Knee Osteoarthritis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2023",
            "remedy": "Arnica Montana",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          },
          {
            "id": "rx-2024",
            "remedy": "Pulsatilla",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1029",
        "patientId": "p-26",
        "date": "22 Nov 2026",
        "tokenNo": 2,
        "reaction": "No Change",
        "symptoms": "Persistent Knee Osteoarthritis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2038",
            "remedy": "Arnica Montana",
            "potency": "1M",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1087",
        "patientId": "p-26",
        "date": "19 Nov 2026",
        "tokenNo": 7,
        "reaction": "No Change",
        "symptoms": "Persistent Knee Osteoarthritis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2119",
            "remedy": "Arnica Montana",
            "potency": "1M",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1175",
        "patientId": "p-26",
        "date": "13 Nov 2026",
        "tokenNo": 13,
        "reaction": "No Change",
        "symptoms": "Persistent Knee Osteoarthritis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2241",
            "remedy": "Arnica Montana",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1256",
        "patientId": "p-26",
        "date": "06 Nov 2026",
        "tokenNo": 3,
        "reaction": "No Change",
        "symptoms": "Persistent Knee Osteoarthritis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2357",
            "remedy": "Arnica Montana",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          },
          {
            "id": "rx-2358",
            "remedy": "Pulsatilla",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1267",
        "patientId": "p-26",
        "date": "05 Nov 2026",
        "tokenNo": 1,
        "reaction": "Improved",
        "symptoms": "Knee Osteoarthritis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2373",
            "remedy": "Arnica Montana",
            "potency": "1M",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          },
          {
            "id": "rx-2374",
            "remedy": "Pulsatilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 0,
        "feeStatus": "Free"
      },
      {
        "id": "v-1285",
        "patientId": "p-26",
        "date": "04 Nov 2026",
        "tokenNo": 5,
        "reaction": "Improved",
        "symptoms": "Knee Osteoarthritis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2399",
            "remedy": "Arnica Montana",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1294",
        "patientId": "p-26",
        "date": "03 Nov 2026",
        "tokenNo": 3,
        "reaction": "Improved",
        "symptoms": "Knee Osteoarthritis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2411",
            "remedy": "Arnica Montana",
            "potency": "1M",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          },
          {
            "id": "rx-2412",
            "remedy": "Pulsatilla",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1356",
        "patientId": "p-26",
        "date": "02 Oct 2026",
        "tokenNo": 1,
        "reaction": "Improved",
        "symptoms": "Knee Osteoarthritis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2501",
            "remedy": "Arnica Montana",
            "potency": "1M",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1404",
        "patientId": "p-26",
        "date": "22 Aug 2026",
        "tokenNo": 7,
        "reaction": "No Change",
        "symptoms": "Persistent Knee Osteoarthritis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2567",
            "remedy": "Arnica Montana",
            "potency": "1M",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          },
          {
            "id": "rx-2568",
            "remedy": "Pulsatilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1541",
        "patientId": "p-26",
        "date": "15 Jan 2026",
        "tokenNo": 14,
        "reaction": "No Change",
        "symptoms": "Persistent Knee Osteoarthritis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2756",
            "remedy": "Arnica Montana",
            "potency": "1M",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          },
          {
            "id": "rx-2757",
            "remedy": "Pulsatilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-27",
    "mrn": "NK-1530",
    "fullName": "Farzana Naheed",
    "relationType": "w/o",
    "relativeName": "Muhammad Younas",
    "age": 43,
    "gender": "Female",
    "phone": "0318-7766554",
    "locality": "Lala Rukh",
    "totalVisits": 16,
    "lastVisitDate": "24 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-p-27-1",
        "name": "Allergic Sneezing & Coryza",
        "severity": "Mild",
        "trend": "Improving",
        "duration": "2 yrs"
      }
    ],
    "severityTrend": {
      "complaintName": "Allergic Sneezing & Coryza",
      "overallRelief": "-65% relief",
      "history": [
        {
          "label": "14 Nov",
          "date": "14 Nov 2026",
          "score": 80
        },
        {
          "label": "19 Nov",
          "date": "19 Nov 2026",
          "score": 60
        },
        {
          "label": "22 Nov",
          "date": "22 Nov 2026",
          "score": 40
        },
        {
          "label": "24 Nov",
          "date": "24 Nov 2026",
          "score": 20
        }
      ]
    },
    "pastVisits": [
      {
        "id": "v-1002",
        "patientId": "p-27",
        "date": "24 Nov 2026",
        "tokenNo": 2,
        "reaction": "No Change",
        "symptoms": "Persistent Allergic Sneezing & Coryza. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2002",
            "remedy": "Allium Cepa",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops TDS for profuse lachrymation",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1031",
        "patientId": "p-27",
        "date": "22 Nov 2026",
        "tokenNo": 4,
        "reaction": "Improved",
        "symptoms": "Allergic Sneezing & Coryza markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2040",
            "remedy": "Allium Cepa",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops TDS for profuse lachrymation",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1082",
        "patientId": "p-27",
        "date": "19 Nov 2026",
        "tokenNo": 2,
        "reaction": "Improved",
        "symptoms": "Allergic Sneezing & Coryza markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2112",
            "remedy": "Allium Cepa",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops TDS for profuse lachrymation",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1157",
        "patientId": "p-27",
        "date": "14 Nov 2026",
        "tokenNo": 11,
        "reaction": "No Change",
        "symptoms": "Persistent Allergic Sneezing & Coryza. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2214",
            "remedy": "Allium Cepa",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops TDS for profuse lachrymation",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1200",
        "patientId": "p-27",
        "date": "11 Nov 2026",
        "tokenNo": 10,
        "reaction": "Improved",
        "symptoms": "Allergic Sneezing & Coryza markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2277",
            "remedy": "Allium Cepa",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops TDS for profuse lachrymation",
            "isRepeat": false
          },
          {
            "id": "rx-2278",
            "remedy": "Chamomilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "3 globules TDS for dentition pain",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1235",
        "patientId": "p-27",
        "date": "08 Nov 2026",
        "tokenNo": 9,
        "reaction": "Improved",
        "symptoms": "Allergic Sneezing & Coryza markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2326",
            "remedy": "Allium Cepa",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops TDS for profuse lachrymation",
            "isRepeat": true
          },
          {
            "id": "rx-2327",
            "remedy": "Chamomilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "3 globules TDS for dentition pain",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1248",
        "patientId": "p-27",
        "date": "07 Nov 2026",
        "tokenNo": 7,
        "reaction": "No Change",
        "symptoms": "Persistent Allergic Sneezing & Coryza. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2347",
            "remedy": "Allium Cepa",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops TDS for profuse lachrymation",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1367",
        "patientId": "p-27",
        "date": "02 Oct 2026",
        "tokenNo": 12,
        "reaction": "Improved",
        "symptoms": "Allergic Sneezing & Coryza markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2515",
            "remedy": "Allium Cepa",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops TDS for profuse lachrymation",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1372",
        "patientId": "p-27",
        "date": "18 Sep 2026",
        "tokenNo": 5,
        "reaction": "Improved",
        "symptoms": "Allergic Sneezing & Coryza markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2523",
            "remedy": "Allium Cepa",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops TDS for profuse lachrymation",
            "isRepeat": false
          },
          {
            "id": "rx-2524",
            "remedy": "Chamomilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "3 globules TDS for dentition pain",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1389",
        "patientId": "p-27",
        "date": "05 Sep 2026",
        "tokenNo": 6,
        "reaction": "Improved",
        "symptoms": "Allergic Sneezing & Coryza markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2548",
            "remedy": "Allium Cepa",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops TDS for profuse lachrymation",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1414",
        "patientId": "p-27",
        "date": "08 Aug 2026",
        "tokenNo": 2,
        "reaction": "Improved",
        "symptoms": "Allergic Sneezing & Coryza markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2581",
            "remedy": "Allium Cepa",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops TDS for profuse lachrymation",
            "isRepeat": false
          },
          {
            "id": "rx-2582",
            "remedy": "Chamomilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "3 globules TDS for dentition pain",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1436",
        "patientId": "p-27",
        "date": "19 Jul 2026",
        "tokenNo": 11,
        "reaction": "Improved",
        "symptoms": "Allergic Sneezing & Coryza markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2612",
            "remedy": "Allium Cepa",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops TDS for profuse lachrymation",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1442",
        "patientId": "p-27",
        "date": "04 Jul 2026",
        "tokenNo": 1,
        "reaction": "Improved",
        "symptoms": "Allergic Sneezing & Coryza markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2620",
            "remedy": "Allium Cepa",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops TDS for profuse lachrymation",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 0,
        "feeStatus": "Free"
      },
      {
        "id": "v-1474",
        "patientId": "p-27",
        "date": "20 May 2026",
        "tokenNo": 6,
        "reaction": "No Change",
        "symptoms": "Persistent Allergic Sneezing & Coryza. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2665",
            "remedy": "Allium Cepa",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops TDS for profuse lachrymation",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1512",
        "patientId": "p-27",
        "date": "18 Mar 2026",
        "tokenNo": 14,
        "reaction": "No Change",
        "symptoms": "Persistent Allergic Sneezing & Coryza. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2716",
            "remedy": "Allium Cepa",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops TDS for profuse lachrymation",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1524",
        "patientId": "p-27",
        "date": "22 Feb 2026",
        "tokenNo": 11,
        "reaction": "Improved",
        "symptoms": "Allergic Sneezing & Coryza markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2733",
            "remedy": "Allium Cepa",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops TDS for profuse lachrymation",
            "isRepeat": false
          },
          {
            "id": "rx-2734",
            "remedy": "Chamomilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "3 globules TDS for dentition pain",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-28",
    "mrn": "NK-1531",
    "fullName": "Tahira Yasmeen",
    "relationType": "w/o",
    "relativeName": "Bashir Ahmed",
    "age": 39,
    "gender": "Female",
    "phone": "0335-1122339",
    "locality": "Wah Model Town",
    "totalVisits": 11,
    "lastVisitDate": "24 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-p-28-1",
        "name": "Right-Sided Migraine",
        "severity": "Moderate",
        "trend": "Improving",
        "duration": "4 yrs"
      }
    ],
    "severityTrend": {
      "complaintName": "Right-Sided Migraine",
      "overallRelief": "-65% relief",
      "history": [
        {
          "label": "08 Nov",
          "date": "08 Nov 2026",
          "score": 80
        },
        {
          "label": "12 Nov",
          "date": "12 Nov 2026",
          "score": 60
        },
        {
          "label": "20 Nov",
          "date": "20 Nov 2026",
          "score": 40
        },
        {
          "label": "24 Nov",
          "date": "24 Nov 2026",
          "score": 20
        }
      ]
    },
    "pastVisits": [
      {
        "id": "v-1006",
        "patientId": "p-28",
        "date": "24 Nov 2026",
        "tokenNo": 6,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Right-Sided Migraine since 4 yrs.",
        "prescriptions": [
          {
            "id": "rx-2008",
            "remedy": "Bryonia Alba",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops BD in half cup water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1068",
        "patientId": "p-28",
        "date": "20 Nov 2026",
        "tokenNo": 4,
        "reaction": "Improved",
        "symptoms": "Right-Sided Migraine markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2090",
            "remedy": "Bryonia Alba",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops BD in half cup water",
            "isRepeat": true
          },
          {
            "id": "rx-2091",
            "remedy": "Arnica Montana",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1183",
        "patientId": "p-28",
        "date": "12 Nov 2026",
        "tokenNo": 8,
        "reaction": "Decline",
        "symptoms": "Aggravation of Right-Sided Migraine following cold exposure; acute recurrence.",
        "prescriptions": [
          {
            "id": "rx-2251",
            "remedy": "Bryonia Alba",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops BD in half cup water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1240",
        "patientId": "p-28",
        "date": "08 Nov 2026",
        "tokenNo": 14,
        "reaction": "Improved",
        "symptoms": "Right-Sided Migraine markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2336",
            "remedy": "Bryonia Alba",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops BD in half cup water",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1325",
        "patientId": "p-28",
        "date": "01 Nov 2026",
        "tokenNo": 7,
        "reaction": "Improved",
        "symptoms": "Right-Sided Migraine markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2458",
            "remedy": "Bryonia Alba",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops BD in half cup water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1392",
        "patientId": "p-28",
        "date": "05 Sep 2026",
        "tokenNo": 9,
        "reaction": "No Change",
        "symptoms": "Persistent Right-Sided Migraine. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2552",
            "remedy": "Bryonia Alba",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops BD in half cup water",
            "isRepeat": false
          },
          {
            "id": "rx-2553",
            "remedy": "Arnica Montana",
            "potency": "1M",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1433",
        "patientId": "p-28",
        "date": "19 Jul 2026",
        "tokenNo": 8,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Right-Sided Migraine since 4 yrs.",
        "prescriptions": [
          {
            "id": "rx-2606",
            "remedy": "Bryonia Alba",
            "potency": "1M",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops BD in half cup water",
            "isRepeat": false
          },
          {
            "id": "rx-2607",
            "remedy": "Arnica Montana",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1445",
        "patientId": "p-28",
        "date": "04 Jul 2026",
        "tokenNo": 4,
        "reaction": "Improved",
        "symptoms": "Right-Sided Migraine markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2625",
            "remedy": "Bryonia Alba",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops BD in half cup water",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1505",
        "patientId": "p-28",
        "date": "18 Mar 2026",
        "tokenNo": 7,
        "reaction": "Improved",
        "symptoms": "Right-Sided Migraine markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2706",
            "remedy": "Bryonia Alba",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops BD in half cup water",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1514",
        "patientId": "p-28",
        "date": "22 Feb 2026",
        "tokenNo": 1,
        "reaction": "No Change",
        "symptoms": "Persistent Right-Sided Migraine. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2718",
            "remedy": "Bryonia Alba",
            "potency": "1M",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops BD in half cup water",
            "isRepeat": false
          },
          {
            "id": "rx-2719",
            "remedy": "Arnica Montana",
            "potency": "1M",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1540",
        "patientId": "p-28",
        "date": "15 Jan 2026",
        "tokenNo": 13,
        "reaction": "Improved",
        "symptoms": "Right-Sided Migraine markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2754",
            "remedy": "Bryonia Alba",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops BD in half cup water",
            "isRepeat": false
          },
          {
            "id": "rx-2755",
            "remedy": "Arnica Montana",
            "potency": "1M",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-29",
    "mrn": "NK-1532",
    "fullName": "Shazia Parveen",
    "relationType": "w/o",
    "relativeName": "Nadeem Akhtar",
    "age": 34,
    "gender": "Female",
    "phone": "0320-9988771",
    "locality": "Sarai Kala",
    "totalVisits": 12,
    "lastVisitDate": "20 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-p-29-1",
        "name": "Dyspepsia & Flatulence",
        "severity": "Mild",
        "trend": "Improving",
        "duration": "8 mos"
      }
    ],
    "severityTrend": {
      "complaintName": "Dyspepsia & Flatulence",
      "overallRelief": "-65% relief",
      "history": [
        {
          "label": "13 Nov",
          "date": "13 Nov 2026",
          "score": 80
        },
        {
          "label": "16 Nov",
          "date": "16 Nov 2026",
          "score": 60
        },
        {
          "label": "19 Nov",
          "date": "19 Nov 2026",
          "score": 40
        },
        {
          "label": "20 Nov",
          "date": "20 Nov 2026",
          "score": 20
        }
      ]
    },
    "pastVisits": [
      {
        "id": "v-1072",
        "patientId": "p-29",
        "date": "20 Nov 2026",
        "tokenNo": 8,
        "reaction": "No Change",
        "symptoms": "Persistent Dyspepsia & Flatulence. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2097",
            "remedy": "Lycopodium",
            "potency": "1M",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops 4 PM in water",
            "isRepeat": false
          },
          {
            "id": "rx-2098",
            "remedy": "Hepar Sulphuris",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS for painful sensitivity",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1092",
        "patientId": "p-29",
        "date": "19 Nov 2026",
        "tokenNo": 12,
        "reaction": "Improved",
        "symptoms": "Dyspepsia & Flatulence markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2124",
            "remedy": "Lycopodium",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops 4 PM in water",
            "isRepeat": false
          },
          {
            "id": "rx-2125",
            "remedy": "Hepar Sulphuris",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS for painful sensitivity",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1135",
        "patientId": "p-29",
        "date": "16 Nov 2026",
        "tokenNo": 14,
        "reaction": "No Change",
        "symptoms": "Persistent Dyspepsia & Flatulence. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2183",
            "remedy": "Lycopodium",
            "potency": "1M",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops 4 PM in water",
            "isRepeat": false
          },
          {
            "id": "rx-2184",
            "remedy": "Hepar Sulphuris",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS for painful sensitivity",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1165",
        "patientId": "p-29",
        "date": "13 Nov 2026",
        "tokenNo": 3,
        "reaction": "Improved",
        "symptoms": "Dyspepsia & Flatulence markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2225",
            "remedy": "Lycopodium",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops 4 PM in water",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1243",
        "patientId": "p-29",
        "date": "07 Nov 2026",
        "tokenNo": 2,
        "reaction": "No Change",
        "symptoms": "Persistent Dyspepsia & Flatulence. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2340",
            "remedy": "Lycopodium",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops 4 PM in water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1264",
        "patientId": "p-29",
        "date": "06 Nov 2026",
        "tokenNo": 11,
        "reaction": "Improved",
        "symptoms": "Dyspepsia & Flatulence markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2369",
            "remedy": "Lycopodium",
            "potency": "1M",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops 4 PM in water",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1278",
        "patientId": "p-29",
        "date": "05 Nov 2026",
        "tokenNo": 12,
        "reaction": "No Change",
        "symptoms": "Persistent Dyspepsia & Flatulence. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2387",
            "remedy": "Lycopodium",
            "potency": "1M",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops 4 PM in water",
            "isRepeat": false
          },
          {
            "id": "rx-2388",
            "remedy": "Hepar Sulphuris",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS for painful sensitivity",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1349",
        "patientId": "p-29",
        "date": "15 Oct 2026",
        "tokenNo": 9,
        "reaction": "Improved",
        "symptoms": "Dyspepsia & Flatulence markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2491",
            "remedy": "Lycopodium",
            "potency": "1M",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops 4 PM in water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1365",
        "patientId": "p-29",
        "date": "02 Oct 2026",
        "tokenNo": 10,
        "reaction": "No Change",
        "symptoms": "Persistent Dyspepsia & Flatulence. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2512",
            "remedy": "Lycopodium",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops 4 PM in water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 0,
        "feeStatus": "Free"
      },
      {
        "id": "v-1426",
        "patientId": "p-29",
        "date": "19 Jul 2026",
        "tokenNo": 1,
        "reaction": "Decline",
        "symptoms": "Aggravation of Dyspepsia & Flatulence following cold exposure; acute recurrence.",
        "prescriptions": [
          {
            "id": "rx-2598",
            "remedy": "Lycopodium",
            "potency": "1M",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops 4 PM in water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1497",
        "patientId": "p-29",
        "date": "14 Apr 2026",
        "tokenNo": 15,
        "reaction": "Improved",
        "symptoms": "Dyspepsia & Flatulence markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2694",
            "remedy": "Lycopodium",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops 4 PM in water",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1525",
        "patientId": "p-29",
        "date": "22 Feb 2026",
        "tokenNo": 12,
        "reaction": "Improved",
        "symptoms": "Dyspepsia & Flatulence markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2735",
            "remedy": "Lycopodium",
            "potency": "1M",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops 4 PM in water",
            "isRepeat": true
          },
          {
            "id": "rx-2736",
            "remedy": "Hepar Sulphuris",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS for painful sensitivity",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-30",
    "mrn": "NK-1548",
    "fullName": "Nasreen Akhtar",
    "relationType": "w/o",
    "relativeName": "Sohail Ahmed",
    "age": 46,
    "gender": "Female",
    "phone": "0301-8899223",
    "locality": "Taxila Cantt",
    "totalVisits": 9,
    "lastVisitDate": "20 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-p-30-1",
        "name": "Anxiety & Anticipatory Tremors",
        "severity": "Moderate",
        "trend": "Stable",
        "duration": "1 yr"
      }
    ],
    "severityTrend": {
      "complaintName": "Anxiety & Anticipatory Tremors",
      "overallRelief": "-65% relief",
      "history": [
        {
          "label": "09 Nov",
          "date": "09 Nov 2026",
          "score": 80
        },
        {
          "label": "12 Nov",
          "date": "12 Nov 2026",
          "score": 60
        },
        {
          "label": "13 Nov",
          "date": "13 Nov 2026",
          "score": 40
        },
        {
          "label": "20 Nov",
          "date": "20 Nov 2026",
          "score": 20
        }
      ]
    },
    "pastVisits": [
      {
        "id": "v-1074",
        "patientId": "p-30",
        "date": "20 Nov 2026",
        "tokenNo": 10,
        "reaction": "No Change",
        "symptoms": "Persistent Anxiety & Anticipatory Tremors. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2101",
            "remedy": "Gelsemium",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops BD for heaviness & fatigue",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1169",
        "patientId": "p-30",
        "date": "13 Nov 2026",
        "tokenNo": 7,
        "reaction": "Improved",
        "symptoms": "Anxiety & Anticipatory Tremors markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2231",
            "remedy": "Gelsemium",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops BD for heaviness & fatigue",
            "isRepeat": true
          },
          {
            "id": "rx-2232",
            "remedy": "Berberis Vulgaris",
            "potency": "30C",
            "vehicle": "Mother Tincture",
            "dosage": "10 drops BD in warm water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 0,
        "feeStatus": "Free"
      },
      {
        "id": "v-1182",
        "patientId": "p-30",
        "date": "12 Nov 2026",
        "tokenNo": 7,
        "reaction": "No Change",
        "symptoms": "Persistent Anxiety & Anticipatory Tremors. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2250",
            "remedy": "Gelsemium",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops BD for heaviness & fatigue",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1221",
        "patientId": "p-30",
        "date": "09 Nov 2026",
        "tokenNo": 5,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Anxiety & Anticipatory Tremors since 1 yr.",
        "prescriptions": [
          {
            "id": "rx-2305",
            "remedy": "Gelsemium",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops BD for heaviness & fatigue",
            "isRepeat": false
          },
          {
            "id": "rx-2306",
            "remedy": "Berberis Vulgaris",
            "potency": "Q (Mother Tincture)",
            "vehicle": "Mother Tincture",
            "dosage": "10 drops BD in warm water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1229",
        "patientId": "p-30",
        "date": "08 Nov 2026",
        "tokenNo": 3,
        "reaction": "Improved",
        "symptoms": "Anxiety & Anticipatory Tremors markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2317",
            "remedy": "Gelsemium",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops BD for heaviness & fatigue",
            "isRepeat": true
          },
          {
            "id": "rx-2318",
            "remedy": "Berberis Vulgaris",
            "potency": "30C",
            "vehicle": "Mother Tincture",
            "dosage": "10 drops BD in warm water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1271",
        "patientId": "p-30",
        "date": "05 Nov 2026",
        "tokenNo": 5,
        "reaction": "Improved",
        "symptoms": "Anxiety & Anticipatory Tremors markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2378",
            "remedy": "Gelsemium",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops BD for heaviness & fatigue",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1384",
        "patientId": "p-30",
        "date": "05 Sep 2026",
        "tokenNo": 1,
        "reaction": "Improved",
        "symptoms": "Anxiety & Anticipatory Tremors markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2541",
            "remedy": "Gelsemium",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops BD for heaviness & fatigue",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1439",
        "patientId": "p-30",
        "date": "19 Jul 2026",
        "tokenNo": 14,
        "reaction": "No Change",
        "symptoms": "Persistent Anxiety & Anticipatory Tremors. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2616",
            "remedy": "Gelsemium",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops BD for heaviness & fatigue",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1449",
        "patientId": "p-30",
        "date": "04 Jul 2026",
        "tokenNo": 8,
        "reaction": "No Change",
        "symptoms": "Persistent Anxiety & Anticipatory Tremors. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2629",
            "remedy": "Gelsemium",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops BD for heaviness & fatigue",
            "isRepeat": false
          },
          {
            "id": "rx-2630",
            "remedy": "Berberis Vulgaris",
            "potency": "Q (Mother Tincture)",
            "vehicle": "Mother Tincture",
            "dosage": "10 drops BD in warm water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Due"
      }
    ]
  },
  {
    "id": "p-31",
    "mrn": "NK-1549",
    "fullName": "Mehwish Tariq",
    "relationType": "d/o",
    "relativeName": "Tariq Mehmood",
    "age": 20,
    "gender": "Female",
    "phone": "0316-2233445",
    "locality": "Wah Cantt",
    "totalVisits": 19,
    "lastVisitDate": "23 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-p-31-1",
        "name": "Allergic Rhinitis & Sinusitis",
        "severity": "Mild",
        "trend": "Improving",
        "duration": "2 yrs"
      }
    ],
    "severityTrend": {
      "complaintName": "Allergic Rhinitis & Sinusitis",
      "overallRelief": "-65% relief",
      "history": [
        {
          "label": "20 Nov",
          "date": "20 Nov 2026",
          "score": 80
        },
        {
          "label": "21 Nov",
          "date": "21 Nov 2026",
          "score": 60
        },
        {
          "label": "22 Nov",
          "date": "22 Nov 2026",
          "score": 40
        },
        {
          "label": "23 Nov",
          "date": "23 Nov 2026",
          "score": 20
        }
      ]
    },
    "pastVisits": [
      {
        "id": "v-1019",
        "patientId": "p-31",
        "date": "23 Nov 2026",
        "tokenNo": 1,
        "reaction": "Decline",
        "symptoms": "Aggravation of Allergic Rhinitis & Sinusitis following cold exposure; acute recurrence.",
        "prescriptions": [
          {
            "id": "rx-2026",
            "remedy": "Pulsatilla",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1039",
        "patientId": "p-31",
        "date": "22 Nov 2026",
        "tokenNo": 12,
        "reaction": "No Change",
        "symptoms": "Persistent Allergic Rhinitis & Sinusitis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2050",
            "remedy": "Pulsatilla",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1052",
        "patientId": "p-31",
        "date": "21 Nov 2026",
        "tokenNo": 5,
        "reaction": "Improved",
        "symptoms": "Allergic Rhinitis & Sinusitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2068",
            "remedy": "Pulsatilla",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          },
          {
            "id": "rx-2069",
            "remedy": "Lycopodium",
            "potency": "1M",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops 4 PM in water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1075",
        "patientId": "p-31",
        "date": "20 Nov 2026",
        "tokenNo": 11,
        "reaction": "Improved",
        "symptoms": "Allergic Rhinitis & Sinusitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2102",
            "remedy": "Pulsatilla",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1170",
        "patientId": "p-31",
        "date": "13 Nov 2026",
        "tokenNo": 8,
        "reaction": "Improved",
        "symptoms": "Allergic Rhinitis & Sinusitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2233",
            "remedy": "Pulsatilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1190",
        "patientId": "p-31",
        "date": "12 Nov 2026",
        "tokenNo": 15,
        "reaction": "Decline",
        "symptoms": "Aggravation of Allergic Rhinitis & Sinusitis following cold exposure; acute recurrence.",
        "prescriptions": [
          {
            "id": "rx-2259",
            "remedy": "Pulsatilla",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          },
          {
            "id": "rx-2260",
            "remedy": "Lycopodium",
            "potency": "1M",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops 4 PM in water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1196",
        "patientId": "p-31",
        "date": "11 Nov 2026",
        "tokenNo": 6,
        "reaction": "Improved",
        "symptoms": "Allergic Rhinitis & Sinusitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2270",
            "remedy": "Pulsatilla",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": true
          },
          {
            "id": "rx-2271",
            "remedy": "Lycopodium",
            "potency": "1M",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops 4 PM in water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1213",
        "patientId": "p-31",
        "date": "10 Nov 2026",
        "tokenNo": 11,
        "reaction": "Improved",
        "symptoms": "Allergic Rhinitis & Sinusitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2294",
            "remedy": "Pulsatilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": true
          },
          {
            "id": "rx-2295",
            "remedy": "Lycopodium",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops 4 PM in water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1291",
        "patientId": "p-31",
        "date": "04 Nov 2026",
        "tokenNo": 11,
        "reaction": "No Change",
        "symptoms": "Persistent Allergic Rhinitis & Sinusitis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2406",
            "remedy": "Pulsatilla",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          },
          {
            "id": "rx-2407",
            "remedy": "Lycopodium",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops 4 PM in water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1298",
        "patientId": "p-31",
        "date": "03 Nov 2026",
        "tokenNo": 7,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Allergic Rhinitis & Sinusitis since 2 yrs.",
        "prescriptions": [
          {
            "id": "rx-2418",
            "remedy": "Pulsatilla",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1308",
        "patientId": "p-31",
        "date": "02 Nov 2026",
        "tokenNo": 2,
        "reaction": "Improved",
        "symptoms": "Allergic Rhinitis & Sinusitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2431",
            "remedy": "Pulsatilla",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          },
          {
            "id": "rx-2432",
            "remedy": "Lycopodium",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops 4 PM in water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1332",
        "patientId": "p-31",
        "date": "28 Oct 2026",
        "tokenNo": 6,
        "reaction": "No Change",
        "symptoms": "Persistent Allergic Rhinitis & Sinusitis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2468",
            "remedy": "Pulsatilla",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1373",
        "patientId": "p-31",
        "date": "18 Sep 2026",
        "tokenNo": 6,
        "reaction": "No Change",
        "symptoms": "Persistent Allergic Rhinitis & Sinusitis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2525",
            "remedy": "Pulsatilla",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1411",
        "patientId": "p-31",
        "date": "22 Aug 2026",
        "tokenNo": 14,
        "reaction": "Improved",
        "symptoms": "Allergic Rhinitis & Sinusitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2577",
            "remedy": "Pulsatilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1451",
        "patientId": "p-31",
        "date": "04 Jul 2026",
        "tokenNo": 10,
        "reaction": "Improved",
        "symptoms": "Allergic Rhinitis & Sinusitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2633",
            "remedy": "Pulsatilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": true
          },
          {
            "id": "rx-2634",
            "remedy": "Lycopodium",
            "potency": "1M",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops 4 PM in water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1498",
        "patientId": "p-31",
        "date": "14 Apr 2026",
        "tokenNo": 16,
        "reaction": "Improved",
        "symptoms": "Allergic Rhinitis & Sinusitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2695",
            "remedy": "Pulsatilla",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": true
          },
          {
            "id": "rx-2696",
            "remedy": "Lycopodium",
            "potency": "1M",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops 4 PM in water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 0,
        "feeStatus": "Free"
      },
      {
        "id": "v-1506",
        "patientId": "p-31",
        "date": "18 Mar 2026",
        "tokenNo": 8,
        "reaction": "No Change",
        "symptoms": "Persistent Allergic Rhinitis & Sinusitis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2707",
            "remedy": "Pulsatilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          },
          {
            "id": "rx-2708",
            "remedy": "Lycopodium",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops 4 PM in water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1519",
        "patientId": "p-31",
        "date": "22 Feb 2026",
        "tokenNo": 6,
        "reaction": "Improved",
        "symptoms": "Allergic Rhinitis & Sinusitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2726",
            "remedy": "Pulsatilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          },
          {
            "id": "rx-2727",
            "remedy": "Lycopodium",
            "potency": "1M",
            "vehicle": "Drops (Water)",
            "dosage": "3 drops 4 PM in water",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1529",
        "patientId": "p-31",
        "date": "15 Jan 2026",
        "tokenNo": 2,
        "reaction": "Improved",
        "symptoms": "Allergic Rhinitis & Sinusitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2740",
            "remedy": "Pulsatilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Due"
      }
    ]
  },
  {
    "id": "p-32",
    "mrn": "NK-1533",
    "fullName": "Ibrahim Tariq",
    "relationType": "s/o",
    "relativeName": "Tariq Mehmood",
    "age": 8,
    "gender": "Child",
    "phone": "0301-7350753",
    "locality": "Wah Cantt",
    "totalVisits": 15,
    "lastVisitDate": "24 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-p-32-1",
        "name": "Pediatric Recurrent Tonsillitis",
        "severity": "Moderate",
        "trend": "Improving",
        "duration": "1 yr"
      }
    ],
    "severityTrend": {
      "complaintName": "Pediatric Recurrent Tonsillitis",
      "overallRelief": "-65% relief",
      "history": [
        {
          "label": "16 Nov",
          "date": "16 Nov 2026",
          "score": 80
        },
        {
          "label": "19 Nov",
          "date": "19 Nov 2026",
          "score": 60
        },
        {
          "label": "22 Nov",
          "date": "22 Nov 2026",
          "score": 40
        },
        {
          "label": "24 Nov",
          "date": "24 Nov 2026",
          "score": 20
        }
      ]
    },
    "pastVisits": [
      {
        "id": "v-1009",
        "patientId": "p-32",
        "date": "24 Nov 2026",
        "tokenNo": 9,
        "reaction": "No Change",
        "symptoms": "Persistent Pediatric Recurrent Tonsillitis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2012",
            "remedy": "Calcarea Carbonica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1046",
        "patientId": "p-32",
        "date": "22 Nov 2026",
        "tokenNo": 19,
        "reaction": "Improved",
        "symptoms": "Pediatric Recurrent Tonsillitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2061",
            "remedy": "Calcarea Carbonica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 0,
        "feeStatus": "Free"
      },
      {
        "id": "v-1088",
        "patientId": "p-32",
        "date": "19 Nov 2026",
        "tokenNo": 8,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Pediatric Recurrent Tonsillitis since 1 yr.",
        "prescriptions": [
          {
            "id": "rx-2120",
            "remedy": "Calcarea Carbonica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1131",
        "patientId": "p-32",
        "date": "16 Nov 2026",
        "tokenNo": 10,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Pediatric Recurrent Tonsillitis since 1 yr.",
        "prescriptions": [
          {
            "id": "rx-2178",
            "remedy": "Calcarea Carbonica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1150",
        "patientId": "p-32",
        "date": "14 Nov 2026",
        "tokenNo": 4,
        "reaction": "Improved",
        "symptoms": "Pediatric Recurrent Tonsillitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2205",
            "remedy": "Calcarea Carbonica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": true
          },
          {
            "id": "rx-2206",
            "remedy": "Gelsemium",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops BD for heaviness & fatigue",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1177",
        "patientId": "p-32",
        "date": "12 Nov 2026",
        "tokenNo": 2,
        "reaction": "Improved",
        "symptoms": "Pediatric Recurrent Tonsillitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2244",
            "remedy": "Calcarea Carbonica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1238",
        "patientId": "p-32",
        "date": "08 Nov 2026",
        "tokenNo": 12,
        "reaction": "Improved",
        "symptoms": "Pediatric Recurrent Tonsillitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2332",
            "remedy": "Calcarea Carbonica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          },
          {
            "id": "rx-2333",
            "remedy": "Gelsemium",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops BD for heaviness & fatigue",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1245",
        "patientId": "p-32",
        "date": "07 Nov 2026",
        "tokenNo": 4,
        "reaction": "Improved",
        "symptoms": "Pediatric Recurrent Tonsillitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2343",
            "remedy": "Calcarea Carbonica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1297",
        "patientId": "p-32",
        "date": "03 Nov 2026",
        "tokenNo": 6,
        "reaction": "No Change",
        "symptoms": "Persistent Pediatric Recurrent Tonsillitis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2416",
            "remedy": "Calcarea Carbonica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          },
          {
            "id": "rx-2417",
            "remedy": "Gelsemium",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops BD for heaviness & fatigue",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1340",
        "patientId": "p-32",
        "date": "28 Oct 2026",
        "tokenNo": 14,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Pediatric Recurrent Tonsillitis since 1 yr.",
        "prescriptions": [
          {
            "id": "rx-2478",
            "remedy": "Calcarea Carbonica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1417",
        "patientId": "p-32",
        "date": "08 Aug 2026",
        "tokenNo": 5,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Pediatric Recurrent Tonsillitis since 1 yr.",
        "prescriptions": [
          {
            "id": "rx-2585",
            "remedy": "Calcarea Carbonica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          },
          {
            "id": "rx-2586",
            "remedy": "Gelsemium",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops BD for heaviness & fatigue",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1430",
        "patientId": "p-32",
        "date": "19 Jul 2026",
        "tokenNo": 5,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Pediatric Recurrent Tonsillitis since 1 yr.",
        "prescriptions": [
          {
            "id": "rx-2603",
            "remedy": "Calcarea Carbonica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1452",
        "patientId": "p-32",
        "date": "04 Jul 2026",
        "tokenNo": 11,
        "reaction": "No Change",
        "symptoms": "Persistent Pediatric Recurrent Tonsillitis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2635",
            "remedy": "Calcarea Carbonica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1494",
        "patientId": "p-32",
        "date": "14 Apr 2026",
        "tokenNo": 12,
        "reaction": "Improved",
        "symptoms": "Pediatric Recurrent Tonsillitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2690",
            "remedy": "Calcarea Carbonica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1530",
        "patientId": "p-32",
        "date": "15 Jan 2026",
        "tokenNo": 3,
        "reaction": "Improved",
        "symptoms": "Pediatric Recurrent Tonsillitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2741",
            "remedy": "Calcarea Carbonica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-33",
    "mrn": "NK-1534",
    "fullName": "Ayaan Khurram",
    "relationType": "s/o",
    "relativeName": "Khurram Shahzad",
    "age": 5,
    "gender": "Child",
    "phone": "0331-7788990",
    "locality": "Faisal Hills",
    "totalVisits": 14,
    "lastVisitDate": "22 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-p-33-1",
        "name": "Infant Dentition Colic & Fever",
        "severity": "Mild",
        "trend": "Improving",
        "duration": "2 wks"
      }
    ],
    "severityTrend": {
      "complaintName": "Infant Dentition Colic & Fever",
      "overallRelief": "-65% relief",
      "history": [
        {
          "label": "19 Nov",
          "date": "19 Nov 2026",
          "score": 80
        },
        {
          "label": "20 Nov",
          "date": "20 Nov 2026",
          "score": 60
        },
        {
          "label": "21 Nov",
          "date": "21 Nov 2026",
          "score": 40
        },
        {
          "label": "22 Nov",
          "date": "22 Nov 2026",
          "score": 20
        }
      ]
    },
    "pastVisits": [
      {
        "id": "v-1047",
        "patientId": "p-33",
        "date": "22 Nov 2026",
        "tokenNo": 20,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Infant Dentition Colic & Fever since 2 wks.",
        "prescriptions": [
          {
            "id": "rx-2062",
            "remedy": "Chamomilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "3 globules TDS for dentition pain",
            "isRepeat": false
          },
          {
            "id": "rx-2063",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1053",
        "patientId": "p-33",
        "date": "21 Nov 2026",
        "tokenNo": 6,
        "reaction": "Improved",
        "symptoms": "Infant Dentition Colic & Fever markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2070",
            "remedy": "Chamomilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "3 globules TDS for dentition pain",
            "isRepeat": true
          },
          {
            "id": "rx-2071",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1069",
        "patientId": "p-33",
        "date": "20 Nov 2026",
        "tokenNo": 5,
        "reaction": "Improved",
        "symptoms": "Infant Dentition Colic & Fever markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2092",
            "remedy": "Chamomilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "3 globules TDS for dentition pain",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1085",
        "patientId": "p-33",
        "date": "19 Nov 2026",
        "tokenNo": 5,
        "reaction": "Improved",
        "symptoms": "Infant Dentition Colic & Fever markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2116",
            "remedy": "Chamomilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "3 globules TDS for dentition pain",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1099",
        "patientId": "p-33",
        "date": "18 Nov 2026",
        "tokenNo": 4,
        "reaction": "Decline",
        "symptoms": "Aggravation of Infant Dentition Colic & Fever following cold exposure; acute recurrence.",
        "prescriptions": [
          {
            "id": "rx-2134",
            "remedy": "Chamomilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "3 globules TDS for dentition pain",
            "isRepeat": false
          },
          {
            "id": "rx-2135",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1128",
        "patientId": "p-33",
        "date": "16 Nov 2026",
        "tokenNo": 7,
        "reaction": "Improved",
        "symptoms": "Infant Dentition Colic & Fever markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2174",
            "remedy": "Chamomilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "3 globules TDS for dentition pain",
            "isRepeat": false
          },
          {
            "id": "rx-2175",
            "remedy": "Nux Vomica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1144",
        "patientId": "p-33",
        "date": "15 Nov 2026",
        "tokenNo": 9,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Infant Dentition Colic & Fever since 2 wks.",
        "prescriptions": [
          {
            "id": "rx-2196",
            "remedy": "Chamomilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "3 globules TDS for dentition pain",
            "isRepeat": false
          },
          {
            "id": "rx-2197",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1211",
        "patientId": "p-33",
        "date": "10 Nov 2026",
        "tokenNo": 9,
        "reaction": "Improved",
        "symptoms": "Infant Dentition Colic & Fever markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2291",
            "remedy": "Chamomilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "3 globules TDS for dentition pain",
            "isRepeat": true
          },
          {
            "id": "rx-2292",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1219",
        "patientId": "p-33",
        "date": "09 Nov 2026",
        "tokenNo": 3,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Infant Dentition Colic & Fever since 2 wks.",
        "prescriptions": [
          {
            "id": "rx-2302",
            "remedy": "Chamomilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "3 globules TDS for dentition pain",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1232",
        "patientId": "p-33",
        "date": "08 Nov 2026",
        "tokenNo": 6,
        "reaction": "Decline",
        "symptoms": "Aggravation of Infant Dentition Colic & Fever following cold exposure; acute recurrence.",
        "prescriptions": [
          {
            "id": "rx-2322",
            "remedy": "Chamomilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "3 globules TDS for dentition pain",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1273",
        "patientId": "p-33",
        "date": "05 Nov 2026",
        "tokenNo": 7,
        "reaction": "Improved",
        "symptoms": "Infant Dentition Colic & Fever markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2381",
            "remedy": "Chamomilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "3 globules TDS for dentition pain",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1345",
        "patientId": "p-33",
        "date": "15 Oct 2026",
        "tokenNo": 5,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Infant Dentition Colic & Fever since 2 wks.",
        "prescriptions": [
          {
            "id": "rx-2485",
            "remedy": "Chamomilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "3 globules TDS for dentition pain",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1479",
        "patientId": "p-33",
        "date": "20 May 2026",
        "tokenNo": 11,
        "reaction": "Improved",
        "symptoms": "Infant Dentition Colic & Fever markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2670",
            "remedy": "Chamomilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "3 globules TDS for dentition pain",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1486",
        "patientId": "p-33",
        "date": "14 Apr 2026",
        "tokenNo": 4,
        "reaction": "No Change",
        "symptoms": "Persistent Infant Dentition Colic & Fever. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2679",
            "remedy": "Chamomilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "3 globules TDS for dentition pain",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-34",
    "mrn": "NK-1535",
    "fullName": "Fatima Noor",
    "relationType": "d/o",
    "relativeName": "Farhan Ali",
    "age": 4,
    "gender": "Child",
    "phone": "0305-6677882",
    "locality": "Taxila Cantt",
    "totalVisits": 9,
    "lastVisitDate": "24 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-p-34-1",
        "name": "Infant Dentition Colic & Fever",
        "severity": "Mild",
        "trend": "Improving",
        "duration": "2 wks"
      }
    ],
    "severityTrend": {
      "complaintName": "Infant Dentition Colic & Fever",
      "overallRelief": "-65% relief",
      "history": [
        {
          "label": "14 Nov",
          "date": "14 Nov 2026",
          "score": 80
        },
        {
          "label": "21 Nov",
          "date": "21 Nov 2026",
          "score": 60
        },
        {
          "label": "22 Nov",
          "date": "22 Nov 2026",
          "score": 40
        },
        {
          "label": "24 Nov",
          "date": "24 Nov 2026",
          "score": 20
        }
      ]
    },
    "pastVisits": [
      {
        "id": "v-1010",
        "patientId": "p-34",
        "date": "24 Nov 2026",
        "tokenNo": 10,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Infant Dentition Colic & Fever since 2 wks.",
        "prescriptions": [
          {
            "id": "rx-2013",
            "remedy": "Chamomilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "3 globules TDS for dentition pain",
            "isRepeat": false
          },
          {
            "id": "rx-2014",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1032",
        "patientId": "p-34",
        "date": "22 Nov 2026",
        "tokenNo": 5,
        "reaction": "Improved",
        "symptoms": "Infant Dentition Colic & Fever markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2041",
            "remedy": "Chamomilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "3 globules TDS for dentition pain",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1056",
        "patientId": "p-34",
        "date": "21 Nov 2026",
        "tokenNo": 9,
        "reaction": "No Change",
        "symptoms": "Persistent Infant Dentition Colic & Fever. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2074",
            "remedy": "Chamomilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "3 globules TDS for dentition pain",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1151",
        "patientId": "p-34",
        "date": "14 Nov 2026",
        "tokenNo": 5,
        "reaction": "Improved",
        "symptoms": "Infant Dentition Colic & Fever markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2207",
            "remedy": "Chamomilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "3 globules TDS for dentition pain",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1253",
        "patientId": "p-34",
        "date": "07 Nov 2026",
        "tokenNo": 12,
        "reaction": "Improved",
        "symptoms": "Infant Dentition Colic & Fever markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2352",
            "remedy": "Chamomilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "3 globules TDS for dentition pain",
            "isRepeat": true
          },
          {
            "id": "rx-2353",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1314",
        "patientId": "p-34",
        "date": "02 Nov 2026",
        "tokenNo": 8,
        "reaction": "No Change",
        "symptoms": "Persistent Infant Dentition Colic & Fever. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2439",
            "remedy": "Chamomilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "3 globules TDS for dentition pain",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1322",
        "patientId": "p-34",
        "date": "01 Nov 2026",
        "tokenNo": 4,
        "reaction": "Improved",
        "symptoms": "Infant Dentition Colic & Fever markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2453",
            "remedy": "Chamomilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "3 globules TDS for dentition pain",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1376",
        "patientId": "p-34",
        "date": "18 Sep 2026",
        "tokenNo": 9,
        "reaction": "Improved",
        "symptoms": "Infant Dentition Colic & Fever markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2529",
            "remedy": "Chamomilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "3 globules TDS for dentition pain",
            "isRepeat": false
          },
          {
            "id": "rx-2530",
            "remedy": "Nux Vomica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1440",
        "patientId": "p-34",
        "date": "19 Jul 2026",
        "tokenNo": 15,
        "reaction": "Improved",
        "symptoms": "Infant Dentition Colic & Fever markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2617",
            "remedy": "Chamomilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "3 globules TDS for dentition pain",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Due"
      }
    ]
  },
  {
    "id": "p-35",
    "mrn": "NK-1536",
    "fullName": "Muhammad Rayyan",
    "relationType": "s/o",
    "relativeName": "Naveed Akhtar",
    "age": 10,
    "gender": "Child",
    "phone": "0314-5566771",
    "locality": "Mohallah Farooqia",
    "totalVisits": 10,
    "lastVisitDate": "23 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-p-35-1",
        "name": "Pediatric Recurrent Tonsillitis",
        "severity": "Moderate",
        "trend": "Improving",
        "duration": "1 yr"
      }
    ],
    "severityTrend": {
      "complaintName": "Pediatric Recurrent Tonsillitis",
      "overallRelief": "-65% relief",
      "history": [
        {
          "label": "16 Nov",
          "date": "16 Nov 2026",
          "score": 80
        },
        {
          "label": "18 Nov",
          "date": "18 Nov 2026",
          "score": 60
        },
        {
          "label": "21 Nov",
          "date": "21 Nov 2026",
          "score": 40
        },
        {
          "label": "23 Nov",
          "date": "23 Nov 2026",
          "score": 20
        }
      ]
    },
    "pastVisits": [
      {
        "id": "v-1023",
        "patientId": "p-35",
        "date": "23 Nov 2026",
        "tokenNo": 5,
        "reaction": "Improved",
        "symptoms": "Pediatric Recurrent Tonsillitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2030",
            "remedy": "Calcarea Carbonica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          },
          {
            "id": "rx-2031",
            "remedy": "Gelsemium",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops BD for heaviness & fatigue",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1064",
        "patientId": "p-35",
        "date": "21 Nov 2026",
        "tokenNo": 17,
        "reaction": "Improved",
        "symptoms": "Pediatric Recurrent Tonsillitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2085",
            "remedy": "Calcarea Carbonica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1107",
        "patientId": "p-35",
        "date": "18 Nov 2026",
        "tokenNo": 12,
        "reaction": "Improved",
        "symptoms": "Pediatric Recurrent Tonsillitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2145",
            "remedy": "Calcarea Carbonica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1133",
        "patientId": "p-35",
        "date": "16 Nov 2026",
        "tokenNo": 12,
        "reaction": "Improved",
        "symptoms": "Pediatric Recurrent Tonsillitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2180",
            "remedy": "Calcarea Carbonica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1195",
        "patientId": "p-35",
        "date": "11 Nov 2026",
        "tokenNo": 5,
        "reaction": "Improved",
        "symptoms": "Pediatric Recurrent Tonsillitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2268",
            "remedy": "Calcarea Carbonica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          },
          {
            "id": "rx-2269",
            "remedy": "Gelsemium",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops BD for heaviness & fatigue",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1203",
        "patientId": "p-35",
        "date": "10 Nov 2026",
        "tokenNo": 1,
        "reaction": "Improved",
        "symptoms": "Pediatric Recurrent Tonsillitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2282",
            "remedy": "Calcarea Carbonica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1352",
        "patientId": "p-35",
        "date": "15 Oct 2026",
        "tokenNo": 12,
        "reaction": "Improved",
        "symptoms": "Pediatric Recurrent Tonsillitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2495",
            "remedy": "Calcarea Carbonica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1380",
        "patientId": "p-35",
        "date": "18 Sep 2026",
        "tokenNo": 13,
        "reaction": "Improved",
        "symptoms": "Pediatric Recurrent Tonsillitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2535",
            "remedy": "Calcarea Carbonica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": true
          },
          {
            "id": "rx-2536",
            "remedy": "Gelsemium",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops BD for heaviness & fatigue",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1405",
        "patientId": "p-35",
        "date": "22 Aug 2026",
        "tokenNo": 8,
        "reaction": "Improved",
        "symptoms": "Pediatric Recurrent Tonsillitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2569",
            "remedy": "Calcarea Carbonica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 0,
        "feeStatus": "Free"
      },
      {
        "id": "v-1526",
        "patientId": "p-35",
        "date": "22 Feb 2026",
        "tokenNo": 13,
        "reaction": "No Change",
        "symptoms": "Persistent Pediatric Recurrent Tonsillitis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2737",
            "remedy": "Calcarea Carbonica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-36",
    "mrn": "NK-1537",
    "fullName": "Zoya Malik",
    "relationType": "d/o",
    "relativeName": "Malik Farooq",
    "age": 7,
    "gender": "Child",
    "phone": "0315-9944112",
    "locality": "Lala Rukh",
    "totalVisits": 5,
    "lastVisitDate": "22 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-p-36-1",
        "name": "Allergic Sneezing & Coryza",
        "severity": "Mild",
        "trend": "Improving",
        "duration": "2 yrs"
      }
    ],
    "severityTrend": {
      "complaintName": "Allergic Sneezing & Coryza",
      "overallRelief": "-65% relief",
      "history": [
        {
          "label": "14 Nov",
          "date": "14 Nov 2026",
          "score": 80
        },
        {
          "label": "17 Nov",
          "date": "17 Nov 2026",
          "score": 60
        },
        {
          "label": "18 Nov",
          "date": "18 Nov 2026",
          "score": 40
        },
        {
          "label": "22 Nov",
          "date": "22 Nov 2026",
          "score": 20
        }
      ]
    },
    "pastVisits": [
      {
        "id": "v-1036",
        "patientId": "p-36",
        "date": "22 Nov 2026",
        "tokenNo": 9,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Allergic Sneezing & Coryza since 2 yrs.",
        "prescriptions": [
          {
            "id": "rx-2046",
            "remedy": "Allium Cepa",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops TDS for profuse lachrymation",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1102",
        "patientId": "p-36",
        "date": "18 Nov 2026",
        "tokenNo": 7,
        "reaction": "Decline",
        "symptoms": "Aggravation of Allergic Sneezing & Coryza following cold exposure; acute recurrence.",
        "prescriptions": [
          {
            "id": "rx-2138",
            "remedy": "Allium Cepa",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops TDS for profuse lachrymation",
            "isRepeat": false
          },
          {
            "id": "rx-2139",
            "remedy": "Chamomilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "3 globules TDS for dentition pain",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1114",
        "patientId": "p-36",
        "date": "17 Nov 2026",
        "tokenNo": 5,
        "reaction": "Improved",
        "symptoms": "Allergic Sneezing & Coryza markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2154",
            "remedy": "Allium Cepa",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops TDS for profuse lachrymation",
            "isRepeat": true
          },
          {
            "id": "rx-2155",
            "remedy": "Chamomilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "3 globules TDS for dentition pain",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1148",
        "patientId": "p-36",
        "date": "14 Nov 2026",
        "tokenNo": 2,
        "reaction": "Improved",
        "symptoms": "Allergic Sneezing & Coryza markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2203",
            "remedy": "Allium Cepa",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops TDS for profuse lachrymation",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1381",
        "patientId": "p-36",
        "date": "18 Sep 2026",
        "tokenNo": 14,
        "reaction": "No Change",
        "symptoms": "Persistent Allergic Sneezing & Coryza. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2537",
            "remedy": "Allium Cepa",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops TDS for profuse lachrymation",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-37",
    "mrn": "NK-1538",
    "fullName": "Hashir Bilal",
    "relationType": "s/o",
    "relativeName": "Bilal Zubair",
    "age": 3,
    "gender": "Child",
    "phone": "0308-4455661",
    "locality": "Museum Road",
    "totalVisits": 6,
    "lastVisitDate": "24 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-p-37-1",
        "name": "Infant Dentition Colic & Fever",
        "severity": "Mild",
        "trend": "Improving",
        "duration": "2 wks"
      }
    ],
    "severityTrend": {
      "complaintName": "Infant Dentition Colic & Fever",
      "overallRelief": "-65% relief",
      "history": [
        {
          "label": "05 Nov",
          "date": "05 Nov 2026",
          "score": 80
        },
        {
          "label": "06 Nov",
          "date": "06 Nov 2026",
          "score": 60
        },
        {
          "label": "17 Nov",
          "date": "17 Nov 2026",
          "score": 40
        },
        {
          "label": "24 Nov",
          "date": "24 Nov 2026",
          "score": 20
        }
      ]
    },
    "pastVisits": [
      {
        "id": "v-1004",
        "patientId": "p-37",
        "date": "24 Nov 2026",
        "tokenNo": 4,
        "reaction": "Decline",
        "symptoms": "Aggravation of Infant Dentition Colic & Fever following cold exposure; acute recurrence.",
        "prescriptions": [
          {
            "id": "rx-2004",
            "remedy": "Chamomilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "3 globules TDS for dentition pain",
            "isRepeat": false
          },
          {
            "id": "rx-2005",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1121",
        "patientId": "p-37",
        "date": "17 Nov 2026",
        "tokenNo": 12,
        "reaction": "Improved",
        "symptoms": "Infant Dentition Colic & Fever markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2165",
            "remedy": "Chamomilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "3 globules TDS for dentition pain",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1266",
        "patientId": "p-37",
        "date": "06 Nov 2026",
        "tokenNo": 13,
        "reaction": "Improved",
        "symptoms": "Infant Dentition Colic & Fever markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2371",
            "remedy": "Chamomilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "3 globules TDS for dentition pain",
            "isRepeat": false
          },
          {
            "id": "rx-2372",
            "remedy": "Nux Vomica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1268",
        "patientId": "p-37",
        "date": "05 Nov 2026",
        "tokenNo": 2,
        "reaction": "No Change",
        "symptoms": "Persistent Infant Dentition Colic & Fever. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2375",
            "remedy": "Chamomilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "3 globules TDS for dentition pain",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1397",
        "patientId": "p-37",
        "date": "05 Sep 2026",
        "tokenNo": 14,
        "reaction": "Improved",
        "symptoms": "Infant Dentition Colic & Fever markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2560",
            "remedy": "Chamomilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "3 globules TDS for dentition pain",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1419",
        "patientId": "p-37",
        "date": "08 Aug 2026",
        "tokenNo": 7,
        "reaction": "Improved",
        "symptoms": "Infant Dentition Colic & Fever markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2589",
            "remedy": "Chamomilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "3 globules TDS for dentition pain",
            "isRepeat": false
          },
          {
            "id": "rx-2590",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-38",
    "mrn": "NK-1539",
    "fullName": "Anaya Tahir",
    "relationType": "d/o",
    "relativeName": "Tahir Mahmood",
    "age": 11,
    "gender": "Child",
    "phone": "0347-8899001",
    "locality": "Wah Cantt",
    "totalVisits": 9,
    "lastVisitDate": "20 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-p-38-1",
        "name": "Pediatric Recurrent Tonsillitis",
        "severity": "Moderate",
        "trend": "Improving",
        "duration": "1 yr"
      }
    ],
    "severityTrend": {
      "complaintName": "Pediatric Recurrent Tonsillitis",
      "overallRelief": "-65% relief",
      "history": [
        {
          "label": "15 Nov",
          "date": "15 Nov 2026",
          "score": 80
        },
        {
          "label": "16 Nov",
          "date": "16 Nov 2026",
          "score": 60
        },
        {
          "label": "19 Nov",
          "date": "19 Nov 2026",
          "score": 40
        },
        {
          "label": "20 Nov",
          "date": "20 Nov 2026",
          "score": 20
        }
      ]
    },
    "pastVisits": [
      {
        "id": "v-1071",
        "patientId": "p-38",
        "date": "20 Nov 2026",
        "tokenNo": 7,
        "reaction": "Improved",
        "symptoms": "Pediatric Recurrent Tonsillitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2095",
            "remedy": "Calcarea Carbonica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": true
          },
          {
            "id": "rx-2096",
            "remedy": "Gelsemium",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops BD for heaviness & fatigue",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1093",
        "patientId": "p-38",
        "date": "19 Nov 2026",
        "tokenNo": 13,
        "reaction": "Improved",
        "symptoms": "Pediatric Recurrent Tonsillitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2126",
            "remedy": "Calcarea Carbonica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1124",
        "patientId": "p-38",
        "date": "16 Nov 2026",
        "tokenNo": 3,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Pediatric Recurrent Tonsillitis since 1 yr.",
        "prescriptions": [
          {
            "id": "rx-2169",
            "remedy": "Calcarea Carbonica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1140",
        "patientId": "p-38",
        "date": "15 Nov 2026",
        "tokenNo": 5,
        "reaction": "Improved",
        "symptoms": "Pediatric Recurrent Tonsillitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2189",
            "remedy": "Calcarea Carbonica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 0,
        "feeStatus": "Free"
      },
      {
        "id": "v-1204",
        "patientId": "p-38",
        "date": "10 Nov 2026",
        "tokenNo": 2,
        "reaction": "Improved",
        "symptoms": "Pediatric Recurrent Tonsillitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2283",
            "remedy": "Calcarea Carbonica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1231",
        "patientId": "p-38",
        "date": "08 Nov 2026",
        "tokenNo": 5,
        "reaction": "Improved",
        "symptoms": "Pediatric Recurrent Tonsillitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2320",
            "remedy": "Calcarea Carbonica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          },
          {
            "id": "rx-2321",
            "remedy": "Gelsemium",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops BD for heaviness & fatigue",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1249",
        "patientId": "p-38",
        "date": "07 Nov 2026",
        "tokenNo": 8,
        "reaction": "Improved",
        "symptoms": "Pediatric Recurrent Tonsillitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2348",
            "remedy": "Calcarea Carbonica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1270",
        "patientId": "p-38",
        "date": "05 Nov 2026",
        "tokenNo": 4,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Pediatric Recurrent Tonsillitis since 1 yr.",
        "prescriptions": [
          {
            "id": "rx-2377",
            "remedy": "Calcarea Carbonica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1310",
        "patientId": "p-38",
        "date": "02 Nov 2026",
        "tokenNo": 4,
        "reaction": "Improved",
        "symptoms": "Pediatric Recurrent Tonsillitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2434",
            "remedy": "Calcarea Carbonica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Due"
      }
    ]
  },
  {
    "id": "p-39",
    "mrn": "NK-1550",
    "fullName": "Rohaan Hamza",
    "relationType": "s/o",
    "relativeName": "Hamza Shafiq",
    "age": 6,
    "gender": "Child",
    "phone": "0340-1122445",
    "locality": "Wah Cantt",
    "totalVisits": 14,
    "lastVisitDate": "22 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-p-39-1",
        "name": "Pediatric Recurrent Tonsillitis",
        "severity": "Moderate",
        "trend": "Improving",
        "duration": "1 yr"
      }
    ],
    "severityTrend": {
      "complaintName": "Pediatric Recurrent Tonsillitis",
      "overallRelief": "-65% relief",
      "history": [
        {
          "label": "14 Nov",
          "date": "14 Nov 2026",
          "score": 80
        },
        {
          "label": "16 Nov",
          "date": "16 Nov 2026",
          "score": 60
        },
        {
          "label": "19 Nov",
          "date": "19 Nov 2026",
          "score": 40
        },
        {
          "label": "22 Nov",
          "date": "22 Nov 2026",
          "score": 20
        }
      ]
    },
    "pastVisits": [
      {
        "id": "v-1043",
        "patientId": "p-39",
        "date": "22 Nov 2026",
        "tokenNo": 16,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Pediatric Recurrent Tonsillitis since 1 yr.",
        "prescriptions": [
          {
            "id": "rx-2056",
            "remedy": "Calcarea Carbonica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1081",
        "patientId": "p-39",
        "date": "19 Nov 2026",
        "tokenNo": 1,
        "reaction": "Improved",
        "symptoms": "Pediatric Recurrent Tonsillitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2110",
            "remedy": "Calcarea Carbonica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          },
          {
            "id": "rx-2111",
            "remedy": "Gelsemium",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops BD for heaviness & fatigue",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1134",
        "patientId": "p-39",
        "date": "16 Nov 2026",
        "tokenNo": 13,
        "reaction": "No Change",
        "symptoms": "Persistent Pediatric Recurrent Tonsillitis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2181",
            "remedy": "Calcarea Carbonica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          },
          {
            "id": "rx-2182",
            "remedy": "Gelsemium",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops BD for heaviness & fatigue",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1160",
        "patientId": "p-39",
        "date": "14 Nov 2026",
        "tokenNo": 14,
        "reaction": "Decline",
        "symptoms": "Aggravation of Pediatric Recurrent Tonsillitis following cold exposure; acute recurrence.",
        "prescriptions": [
          {
            "id": "rx-2217",
            "remedy": "Calcarea Carbonica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          },
          {
            "id": "rx-2218",
            "remedy": "Gelsemium",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops BD for heaviness & fatigue",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1187",
        "patientId": "p-39",
        "date": "12 Nov 2026",
        "tokenNo": 12,
        "reaction": "Decline",
        "symptoms": "Aggravation of Pediatric Recurrent Tonsillitis following cold exposure; acute recurrence.",
        "prescriptions": [
          {
            "id": "rx-2256",
            "remedy": "Calcarea Carbonica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1237",
        "patientId": "p-39",
        "date": "08 Nov 2026",
        "tokenNo": 11,
        "reaction": "Improved",
        "symptoms": "Pediatric Recurrent Tonsillitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2330",
            "remedy": "Calcarea Carbonica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          },
          {
            "id": "rx-2331",
            "remedy": "Gelsemium",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops BD for heaviness & fatigue",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1259",
        "patientId": "p-39",
        "date": "06 Nov 2026",
        "tokenNo": 6,
        "reaction": "Improved",
        "symptoms": "Pediatric Recurrent Tonsillitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2361",
            "remedy": "Calcarea Carbonica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": true
          },
          {
            "id": "rx-2362",
            "remedy": "Gelsemium",
            "potency": "30C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops BD for heaviness & fatigue",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1306",
        "patientId": "p-39",
        "date": "03 Nov 2026",
        "tokenNo": 15,
        "reaction": "Improved",
        "symptoms": "Pediatric Recurrent Tonsillitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2428",
            "remedy": "Calcarea Carbonica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1355",
        "patientId": "p-39",
        "date": "15 Oct 2026",
        "tokenNo": 15,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Pediatric Recurrent Tonsillitis since 1 yr.",
        "prescriptions": [
          {
            "id": "rx-2500",
            "remedy": "Calcarea Carbonica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1362",
        "patientId": "p-39",
        "date": "02 Oct 2026",
        "tokenNo": 7,
        "reaction": "No Change",
        "symptoms": "Persistent Pediatric Recurrent Tonsillitis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2509",
            "remedy": "Calcarea Carbonica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1424",
        "patientId": "p-39",
        "date": "08 Aug 2026",
        "tokenNo": 12,
        "reaction": "Improved",
        "symptoms": "Pediatric Recurrent Tonsillitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2595",
            "remedy": "Calcarea Carbonica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1448",
        "patientId": "p-39",
        "date": "04 Jul 2026",
        "tokenNo": 7,
        "reaction": "Improved",
        "symptoms": "Pediatric Recurrent Tonsillitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2628",
            "remedy": "Calcarea Carbonica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1458",
        "patientId": "p-39",
        "date": "16 Jun 2026",
        "tokenNo": 5,
        "reaction": "Improved",
        "symptoms": "Pediatric Recurrent Tonsillitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2643",
            "remedy": "Calcarea Carbonica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": true
          },
          {
            "id": "rx-2644",
            "remedy": "Gelsemium",
            "potency": "200C",
            "vehicle": "Drops (Water)",
            "dosage": "4 drops BD for heaviness & fatigue",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1477",
        "patientId": "p-39",
        "date": "20 May 2026",
        "tokenNo": 9,
        "reaction": "Improved",
        "symptoms": "Pediatric Recurrent Tonsillitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2668",
            "remedy": "Calcarea Carbonica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-40",
    "mrn": "NK-1540",
    "fullName": "Ghulam Murtaza",
    "relationType": "s/o",
    "relativeName": "Allah Ditta",
    "age": 71,
    "gender": "Male",
    "phone": "0300-4499112",
    "locality": "Mohallah Farooqia",
    "totalVisits": 11,
    "lastVisitDate": "23 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-p-40-1",
        "name": "Knee Osteoarthritis",
        "severity": "Severe",
        "trend": "Improving",
        "duration": "5 yrs"
      }
    ],
    "severityTrend": {
      "complaintName": "Knee Osteoarthritis",
      "overallRelief": "-65% relief",
      "history": [
        {
          "label": "19 Nov",
          "date": "19 Nov 2026",
          "score": 80
        },
        {
          "label": "20 Nov",
          "date": "20 Nov 2026",
          "score": 60
        },
        {
          "label": "21 Nov",
          "date": "21 Nov 2026",
          "score": 40
        },
        {
          "label": "23 Nov",
          "date": "23 Nov 2026",
          "score": 20
        }
      ]
    },
    "pastVisits": [
      {
        "id": "v-1025",
        "patientId": "p-40",
        "date": "23 Nov 2026",
        "tokenNo": 7,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Knee Osteoarthritis since 5 yrs.",
        "prescriptions": [
          {
            "id": "rx-2033",
            "remedy": "Arnica Montana",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1057",
        "patientId": "p-40",
        "date": "21 Nov 2026",
        "tokenNo": 10,
        "reaction": "No Change",
        "symptoms": "Persistent Knee Osteoarthritis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2075",
            "remedy": "Arnica Montana",
            "potency": "1M",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          },
          {
            "id": "rx-2076",
            "remedy": "Pulsatilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1073",
        "patientId": "p-40",
        "date": "20 Nov 2026",
        "tokenNo": 9,
        "reaction": "Improved",
        "symptoms": "Knee Osteoarthritis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2099",
            "remedy": "Arnica Montana",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": true
          },
          {
            "id": "rx-2100",
            "remedy": "Pulsatilla",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1083",
        "patientId": "p-40",
        "date": "19 Nov 2026",
        "tokenNo": 3,
        "reaction": "No Change",
        "symptoms": "Persistent Knee Osteoarthritis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2113",
            "remedy": "Arnica Montana",
            "potency": "1M",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          },
          {
            "id": "rx-2114",
            "remedy": "Pulsatilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1100",
        "patientId": "p-40",
        "date": "18 Nov 2026",
        "tokenNo": 5,
        "reaction": "Improved",
        "symptoms": "Knee Osteoarthritis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2136",
            "remedy": "Arnica Montana",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1116",
        "patientId": "p-40",
        "date": "17 Nov 2026",
        "tokenNo": 7,
        "reaction": "Improved",
        "symptoms": "Knee Osteoarthritis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2157",
            "remedy": "Arnica Montana",
            "potency": "1M",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": true
          },
          {
            "id": "rx-2158",
            "remedy": "Pulsatilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1274",
        "patientId": "p-40",
        "date": "05 Nov 2026",
        "tokenNo": 8,
        "reaction": "Improved",
        "symptoms": "Knee Osteoarthritis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2382",
            "remedy": "Arnica Montana",
            "potency": "1M",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1289",
        "patientId": "p-40",
        "date": "04 Nov 2026",
        "tokenNo": 9,
        "reaction": "No Change",
        "symptoms": "Persistent Knee Osteoarthritis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2403",
            "remedy": "Arnica Montana",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1296",
        "patientId": "p-40",
        "date": "03 Nov 2026",
        "tokenNo": 5,
        "reaction": "Improved",
        "symptoms": "Knee Osteoarthritis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2415",
            "remedy": "Arnica Montana",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1363",
        "patientId": "p-40",
        "date": "02 Oct 2026",
        "tokenNo": 8,
        "reaction": "Improved",
        "symptoms": "Knee Osteoarthritis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2510",
            "remedy": "Arnica Montana",
            "potency": "1M",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1456",
        "patientId": "p-40",
        "date": "16 Jun 2026",
        "tokenNo": 3,
        "reaction": "No Change",
        "symptoms": "Persistent Knee Osteoarthritis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2640",
            "remedy": "Arnica Montana",
            "potency": "1M",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          },
          {
            "id": "rx-2641",
            "remedy": "Pulsatilla",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 0,
        "feeStatus": "Free"
      }
    ]
  },
  {
    "id": "p-41",
    "mrn": "NK-1541",
    "fullName": "Haji Abdul Rehman",
    "relationType": "s/o",
    "relativeName": "Fazal Din",
    "age": 76,
    "gender": "Male",
    "phone": "0302-3344119",
    "locality": "Taxila Cantt",
    "totalVisits": 10,
    "lastVisitDate": "21 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-p-41-1",
        "name": "Sciatica & Lumbar Spondylosis",
        "severity": "Moderate",
        "trend": "Declining",
        "duration": "1 yr"
      }
    ],
    "severityTrend": {
      "complaintName": "Sciatica & Lumbar Spondylosis",
      "overallRelief": "-65% relief",
      "history": [
        {
          "label": "08 Nov",
          "date": "08 Nov 2026",
          "score": 80
        },
        {
          "label": "17 Nov",
          "date": "17 Nov 2026",
          "score": 60
        },
        {
          "label": "19 Nov",
          "date": "19 Nov 2026",
          "score": 40
        },
        {
          "label": "21 Nov",
          "date": "21 Nov 2026",
          "score": 20
        }
      ]
    },
    "pastVisits": [
      {
        "id": "v-1050",
        "patientId": "p-41",
        "date": "21 Nov 2026",
        "tokenNo": 3,
        "reaction": "Improved",
        "symptoms": "Sciatica & Lumbar Spondylosis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2066",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1091",
        "patientId": "p-41",
        "date": "19 Nov 2026",
        "tokenNo": 11,
        "reaction": "No Change",
        "symptoms": "Persistent Sciatica & Lumbar Spondylosis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2123",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1115",
        "patientId": "p-41",
        "date": "17 Nov 2026",
        "tokenNo": 6,
        "reaction": "Improved",
        "symptoms": "Sciatica & Lumbar Spondylosis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2156",
            "remedy": "Rhus Toxicodendron",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1230",
        "patientId": "p-41",
        "date": "08 Nov 2026",
        "tokenNo": 4,
        "reaction": "Improved",
        "symptoms": "Sciatica & Lumbar Spondylosis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2319",
            "remedy": "Rhus Toxicodendron",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1276",
        "patientId": "p-41",
        "date": "05 Nov 2026",
        "tokenNo": 10,
        "reaction": "Improved",
        "symptoms": "Sciatica & Lumbar Spondylosis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2385",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1326",
        "patientId": "p-41",
        "date": "01 Nov 2026",
        "tokenNo": 8,
        "reaction": "Improved",
        "symptoms": "Sciatica & Lumbar Spondylosis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2459",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": true
          },
          {
            "id": "rx-2460",
            "remedy": "Sulphur",
            "potency": "200C",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1383",
        "patientId": "p-41",
        "date": "18 Sep 2026",
        "tokenNo": 16,
        "reaction": "No Change",
        "symptoms": "Persistent Sciatica & Lumbar Spondylosis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2540",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1434",
        "patientId": "p-41",
        "date": "19 Jul 2026",
        "tokenNo": 9,
        "reaction": "Improved",
        "symptoms": "Sciatica & Lumbar Spondylosis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2608",
            "remedy": "Rhus Toxicodendron",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": true
          },
          {
            "id": "rx-2609",
            "remedy": "Sulphur",
            "potency": "1M",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1478",
        "patientId": "p-41",
        "date": "20 May 2026",
        "tokenNo": 10,
        "reaction": "Improved",
        "symptoms": "Sciatica & Lumbar Spondylosis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2669",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1532",
        "patientId": "p-41",
        "date": "15 Jan 2026",
        "tokenNo": 5,
        "reaction": "Improved",
        "symptoms": "Sciatica & Lumbar Spondylosis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2744",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Due"
      }
    ]
  },
  {
    "id": "p-42",
    "mrn": "NK-1542",
    "fullName": "Khadija Bibi",
    "relationType": "w/o",
    "relativeName": "Haji Abdul Rehman",
    "age": 69,
    "gender": "Female",
    "phone": "0302-3344119",
    "locality": "Taxila Cantt",
    "totalVisits": 7,
    "lastVisitDate": "23 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-p-42-1",
        "name": "Knee Osteoarthritis",
        "severity": "Severe",
        "trend": "Improving",
        "duration": "5 yrs"
      }
    ],
    "severityTrend": {
      "complaintName": "Knee Osteoarthritis",
      "overallRelief": "-65% relief",
      "history": [
        {
          "label": "09 Nov",
          "date": "09 Nov 2026",
          "score": 80
        },
        {
          "label": "15 Nov",
          "date": "15 Nov 2026",
          "score": 60
        },
        {
          "label": "17 Nov",
          "date": "17 Nov 2026",
          "score": 40
        },
        {
          "label": "23 Nov",
          "date": "23 Nov 2026",
          "score": 20
        }
      ]
    },
    "pastVisits": [
      {
        "id": "v-1022",
        "patientId": "p-42",
        "date": "23 Nov 2026",
        "tokenNo": 4,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Knee Osteoarthritis since 5 yrs.",
        "prescriptions": [
          {
            "id": "rx-2029",
            "remedy": "Arnica Montana",
            "potency": "1M",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1118",
        "patientId": "p-42",
        "date": "17 Nov 2026",
        "tokenNo": 9,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Knee Osteoarthritis since 5 yrs.",
        "prescriptions": [
          {
            "id": "rx-2161",
            "remedy": "Arnica Montana",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1137",
        "patientId": "p-42",
        "date": "15 Nov 2026",
        "tokenNo": 2,
        "reaction": "Improved",
        "symptoms": "Knee Osteoarthritis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2186",
            "remedy": "Arnica Montana",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1222",
        "patientId": "p-42",
        "date": "09 Nov 2026",
        "tokenNo": 6,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Knee Osteoarthritis since 5 yrs.",
        "prescriptions": [
          {
            "id": "rx-2307",
            "remedy": "Arnica Montana",
            "potency": "1M",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          },
          {
            "id": "rx-2308",
            "remedy": "Pulsatilla",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1236",
        "patientId": "p-42",
        "date": "08 Nov 2026",
        "tokenNo": 10,
        "reaction": "Improved",
        "symptoms": "Knee Osteoarthritis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2328",
            "remedy": "Arnica Montana",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": true
          },
          {
            "id": "rx-2329",
            "remedy": "Pulsatilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1409",
        "patientId": "p-42",
        "date": "22 Aug 2026",
        "tokenNo": 12,
        "reaction": "Improved",
        "symptoms": "Knee Osteoarthritis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2574",
            "remedy": "Arnica Montana",
            "potency": "1M",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          },
          {
            "id": "rx-2575",
            "remedy": "Pulsatilla",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1464",
        "patientId": "p-42",
        "date": "16 Jun 2026",
        "tokenNo": 11,
        "reaction": "Improved",
        "symptoms": "Knee Osteoarthritis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2652",
            "remedy": "Arnica Montana",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-43",
    "mrn": "NK-1543",
    "fullName": "Master Inayat Ullah",
    "relationType": "s/o",
    "relativeName": "Karam Elahi",
    "age": 64,
    "gender": "Male",
    "phone": "0333-8877665",
    "locality": "Wah Model Town",
    "totalVisits": 11,
    "lastVisitDate": "21 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-p-43-1",
        "name": "Chronic Gastric Acidity & Reflux",
        "severity": "Severe",
        "trend": "Improving",
        "duration": "2 yrs"
      }
    ],
    "severityTrend": {
      "complaintName": "Chronic Gastric Acidity & Reflux",
      "overallRelief": "-65% relief",
      "history": [
        {
          "label": "12 Nov",
          "date": "12 Nov 2026",
          "score": 80
        },
        {
          "label": "17 Nov",
          "date": "17 Nov 2026",
          "score": 60
        },
        {
          "label": "18 Nov",
          "date": "18 Nov 2026",
          "score": 40
        },
        {
          "label": "21 Nov",
          "date": "21 Nov 2026",
          "score": 20
        }
      ]
    },
    "pastVisits": [
      {
        "id": "v-1063",
        "patientId": "p-43",
        "date": "21 Nov 2026",
        "tokenNo": 16,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Chronic Gastric Acidity & Reflux since 2 yrs.",
        "prescriptions": [
          {
            "id": "rx-2084",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1103",
        "patientId": "p-43",
        "date": "18 Nov 2026",
        "tokenNo": 8,
        "reaction": "Improved",
        "symptoms": "Chronic Gastric Acidity & Reflux markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2140",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1112",
        "patientId": "p-43",
        "date": "17 Nov 2026",
        "tokenNo": 3,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Chronic Gastric Acidity & Reflux since 2 yrs.",
        "prescriptions": [
          {
            "id": "rx-2152",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1185",
        "patientId": "p-43",
        "date": "12 Nov 2026",
        "tokenNo": 10,
        "reaction": "No Change",
        "symptoms": "Persistent Chronic Gastric Acidity & Reflux. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2254",
            "remedy": "Nux Vomica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1255",
        "patientId": "p-43",
        "date": "06 Nov 2026",
        "tokenNo": 2,
        "reaction": "Improved",
        "symptoms": "Chronic Gastric Acidity & Reflux markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2355",
            "remedy": "Nux Vomica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": true
          },
          {
            "id": "rx-2356",
            "remedy": "Rhus Toxicodendron",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1327",
        "patientId": "p-43",
        "date": "28 Oct 2026",
        "tokenNo": 1,
        "reaction": "No Change",
        "symptoms": "Persistent Chronic Gastric Acidity & Reflux. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2461",
            "remedy": "Nux Vomica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1361",
        "patientId": "p-43",
        "date": "02 Oct 2026",
        "tokenNo": 6,
        "reaction": "Improved",
        "symptoms": "Chronic Gastric Acidity & Reflux markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2508",
            "remedy": "Nux Vomica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1378",
        "patientId": "p-43",
        "date": "18 Sep 2026",
        "tokenNo": 11,
        "reaction": "Improved",
        "symptoms": "Chronic Gastric Acidity & Reflux markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2533",
            "remedy": "Nux Vomica",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1407",
        "patientId": "p-43",
        "date": "22 Aug 2026",
        "tokenNo": 10,
        "reaction": "Decline",
        "symptoms": "Aggravation of Chronic Gastric Acidity & Reflux following cold exposure; acute recurrence.",
        "prescriptions": [
          {
            "id": "rx-2571",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1472",
        "patientId": "p-43",
        "date": "20 May 2026",
        "tokenNo": 4,
        "reaction": "No Change",
        "symptoms": "Persistent Chronic Gastric Acidity & Reflux. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2662",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          },
          {
            "id": "rx-2663",
            "remedy": "Rhus Toxicodendron",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1503",
        "patientId": "p-43",
        "date": "18 Mar 2026",
        "tokenNo": 5,
        "reaction": "No Change",
        "symptoms": "Persistent Chronic Gastric Acidity & Reflux. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2703",
            "remedy": "Nux Vomica",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills HS before bed",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-44",
    "mrn": "NK-1544",
    "fullName": "Mehr-un-Nisa",
    "relationType": "w/o",
    "relativeName": "Ghulam Murtaza",
    "age": 66,
    "gender": "Female",
    "phone": "0300-4499112",
    "locality": "Mohallah Farooqia",
    "totalVisits": 13,
    "lastVisitDate": "24 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-p-44-1",
        "name": "Knee Osteoarthritis",
        "severity": "Severe",
        "trend": "Improving",
        "duration": "5 yrs"
      }
    ],
    "severityTrend": {
      "complaintName": "Knee Osteoarthritis",
      "overallRelief": "-65% relief",
      "history": [
        {
          "label": "17 Nov",
          "date": "17 Nov 2026",
          "score": 80
        },
        {
          "label": "18 Nov",
          "date": "18 Nov 2026",
          "score": 60
        },
        {
          "label": "22 Nov",
          "date": "22 Nov 2026",
          "score": 40
        },
        {
          "label": "24 Nov",
          "date": "24 Nov 2026",
          "score": 20
        }
      ]
    },
    "pastVisits": [
      {
        "id": "v-1015",
        "patientId": "p-44",
        "date": "24 Nov 2026",
        "tokenNo": 15,
        "reaction": "No Change",
        "symptoms": "Persistent Knee Osteoarthritis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2020",
            "remedy": "Arnica Montana",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1042",
        "patientId": "p-44",
        "date": "22 Nov 2026",
        "tokenNo": 15,
        "reaction": "No Change",
        "symptoms": "Persistent Knee Osteoarthritis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2054",
            "remedy": "Arnica Montana",
            "potency": "1M",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          },
          {
            "id": "rx-2055",
            "remedy": "Pulsatilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1106",
        "patientId": "p-44",
        "date": "18 Nov 2026",
        "tokenNo": 11,
        "reaction": "Decline",
        "symptoms": "Aggravation of Knee Osteoarthritis following cold exposure; acute recurrence.",
        "prescriptions": [
          {
            "id": "rx-2144",
            "remedy": "Arnica Montana",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1113",
        "patientId": "p-44",
        "date": "17 Nov 2026",
        "tokenNo": 4,
        "reaction": "Improved",
        "symptoms": "Knee Osteoarthritis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2153",
            "remedy": "Arnica Montana",
            "potency": "1M",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1125",
        "patientId": "p-44",
        "date": "16 Nov 2026",
        "tokenNo": 4,
        "reaction": "Improved",
        "symptoms": "Knee Osteoarthritis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2170",
            "remedy": "Arnica Montana",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1224",
        "patientId": "p-44",
        "date": "09 Nov 2026",
        "tokenNo": 8,
        "reaction": "Decline",
        "symptoms": "Aggravation of Knee Osteoarthritis following cold exposure; acute recurrence.",
        "prescriptions": [
          {
            "id": "rx-2310",
            "remedy": "Arnica Montana",
            "potency": "1M",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          },
          {
            "id": "rx-2311",
            "remedy": "Pulsatilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1299",
        "patientId": "p-44",
        "date": "03 Nov 2026",
        "tokenNo": 8,
        "reaction": "Improved",
        "symptoms": "Knee Osteoarthritis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2419",
            "remedy": "Arnica Montana",
            "potency": "1M",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1350",
        "patientId": "p-44",
        "date": "15 Oct 2026",
        "tokenNo": 10,
        "reaction": "Improved",
        "symptoms": "Knee Osteoarthritis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2492",
            "remedy": "Arnica Montana",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1393",
        "patientId": "p-44",
        "date": "05 Sep 2026",
        "tokenNo": 10,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Knee Osteoarthritis since 5 yrs.",
        "prescriptions": [
          {
            "id": "rx-2554",
            "remedy": "Arnica Montana",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          },
          {
            "id": "rx-2555",
            "remedy": "Pulsatilla",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1467",
        "patientId": "p-44",
        "date": "16 Jun 2026",
        "tokenNo": 14,
        "reaction": "Improved",
        "symptoms": "Knee Osteoarthritis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2655",
            "remedy": "Arnica Montana",
            "potency": "1M",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          },
          {
            "id": "rx-2656",
            "remedy": "Pulsatilla",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1482",
        "patientId": "p-44",
        "date": "20 May 2026",
        "tokenNo": 14,
        "reaction": "Improved",
        "symptoms": "Knee Osteoarthritis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2673",
            "remedy": "Arnica Montana",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          },
          {
            "id": "rx-2674",
            "remedy": "Pulsatilla",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1491",
        "patientId": "p-44",
        "date": "14 Apr 2026",
        "tokenNo": 9,
        "reaction": "No Change",
        "symptoms": "Persistent Knee Osteoarthritis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2686",
            "remedy": "Arnica Montana",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1502",
        "patientId": "p-44",
        "date": "18 Mar 2026",
        "tokenNo": 4,
        "reaction": "Improved",
        "symptoms": "Knee Osteoarthritis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2702",
            "remedy": "Arnica Montana",
            "potency": "1M",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Due"
      }
    ]
  },
  {
    "id": "p-45",
    "mrn": "NK-1545",
    "fullName": "Chaudhry Rahmat Ali",
    "relationType": "s/o",
    "relativeName": "Chaudhry Barkat Ali",
    "age": 74,
    "gender": "Male",
    "phone": "0312-9900112",
    "locality": "Sarai Kala",
    "totalVisits": 9,
    "lastVisitDate": "20 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-p-45-1",
        "name": "Sciatica & Lumbar Spondylosis",
        "severity": "Moderate",
        "trend": "Declining",
        "duration": "1 yr"
      }
    ],
    "severityTrend": {
      "complaintName": "Sciatica & Lumbar Spondylosis",
      "overallRelief": "-65% relief",
      "history": [
        {
          "label": "10 Nov",
          "date": "10 Nov 2026",
          "score": 80
        },
        {
          "label": "14 Nov",
          "date": "14 Nov 2026",
          "score": 60
        },
        {
          "label": "19 Nov",
          "date": "19 Nov 2026",
          "score": 40
        },
        {
          "label": "20 Nov",
          "date": "20 Nov 2026",
          "score": 20
        }
      ]
    },
    "pastVisits": [
      {
        "id": "v-1070",
        "patientId": "p-45",
        "date": "20 Nov 2026",
        "tokenNo": 6,
        "reaction": "No Change",
        "symptoms": "Persistent Sciatica & Lumbar Spondylosis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2093",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          },
          {
            "id": "rx-2094",
            "remedy": "Sulphur",
            "potency": "200C",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1095",
        "patientId": "p-45",
        "date": "19 Nov 2026",
        "tokenNo": 15,
        "reaction": "Improved",
        "symptoms": "Sciatica & Lumbar Spondylosis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2129",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 14 days.",
        "durationDays": 14,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1155",
        "patientId": "p-45",
        "date": "14 Nov 2026",
        "tokenNo": 9,
        "reaction": "No Change",
        "symptoms": "Persistent Sciatica & Lumbar Spondylosis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2212",
            "remedy": "Rhus Toxicodendron",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1205",
        "patientId": "p-45",
        "date": "10 Nov 2026",
        "tokenNo": 3,
        "reaction": "No Change",
        "symptoms": "Persistent Sciatica & Lumbar Spondylosis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2284",
            "remedy": "Rhus Toxicodendron",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1218",
        "patientId": "p-45",
        "date": "09 Nov 2026",
        "tokenNo": 2,
        "reaction": "Improved",
        "symptoms": "Sciatica & Lumbar Spondylosis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2301",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1279",
        "patientId": "p-45",
        "date": "05 Nov 2026",
        "tokenNo": 13,
        "reaction": "Improved",
        "symptoms": "Sciatica & Lumbar Spondylosis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2389",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1284",
        "patientId": "p-45",
        "date": "04 Nov 2026",
        "tokenNo": 4,
        "reaction": "Improved",
        "symptoms": "Sciatica & Lumbar Spondylosis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2397",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": true
          },
          {
            "id": "rx-2398",
            "remedy": "Sulphur",
            "potency": "200C",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1323",
        "patientId": "p-45",
        "date": "01 Nov 2026",
        "tokenNo": 5,
        "reaction": "Improved",
        "symptoms": "Sciatica & Lumbar Spondylosis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2454",
            "remedy": "Rhus Toxicodendron",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": true
          },
          {
            "id": "rx-2455",
            "remedy": "Sulphur",
            "potency": "1M",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1495",
        "patientId": "p-45",
        "date": "14 Apr 2026",
        "tokenNo": 13,
        "reaction": "No Change",
        "symptoms": "Persistent Sciatica & Lumbar Spondylosis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2691",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Due"
      }
    ]
  },
  {
    "id": "p-46",
    "mrn": "NK-1551",
    "fullName": "Sultana Begum",
    "relationType": "w/o",
    "relativeName": "Chaudhry Rahmat Ali",
    "age": 70,
    "gender": "Female",
    "phone": "0312-9900112",
    "locality": "Sarai Kala",
    "totalVisits": 15,
    "lastVisitDate": "24 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-p-46-1",
        "name": "Knee Osteoarthritis",
        "severity": "Severe",
        "trend": "Improving",
        "duration": "5 yrs"
      }
    ],
    "severityTrend": {
      "complaintName": "Knee Osteoarthritis",
      "overallRelief": "-65% relief",
      "history": [
        {
          "label": "13 Nov",
          "date": "13 Nov 2026",
          "score": 80
        },
        {
          "label": "15 Nov",
          "date": "15 Nov 2026",
          "score": 60
        },
        {
          "label": "16 Nov",
          "date": "16 Nov 2026",
          "score": 40
        },
        {
          "label": "24 Nov",
          "date": "24 Nov 2026",
          "score": 20
        }
      ]
    },
    "pastVisits": [
      {
        "id": "v-1008",
        "patientId": "p-46",
        "date": "24 Nov 2026",
        "tokenNo": 8,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Knee Osteoarthritis since 5 yrs.",
        "prescriptions": [
          {
            "id": "rx-2010",
            "remedy": "Arnica Montana",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          },
          {
            "id": "rx-2011",
            "remedy": "Pulsatilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1127",
        "patientId": "p-46",
        "date": "16 Nov 2026",
        "tokenNo": 6,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Knee Osteoarthritis since 5 yrs.",
        "prescriptions": [
          {
            "id": "rx-2172",
            "remedy": "Arnica Montana",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          },
          {
            "id": "rx-2173",
            "remedy": "Pulsatilla",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1143",
        "patientId": "p-46",
        "date": "15 Nov 2026",
        "tokenNo": 8,
        "reaction": "Improved",
        "symptoms": "Knee Osteoarthritis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2194",
            "remedy": "Arnica Montana",
            "potency": "1M",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          },
          {
            "id": "rx-2195",
            "remedy": "Pulsatilla",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1173",
        "patientId": "p-46",
        "date": "13 Nov 2026",
        "tokenNo": 11,
        "reaction": "No Change",
        "symptoms": "Persistent Knee Osteoarthritis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2238",
            "remedy": "Arnica Montana",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1179",
        "patientId": "p-46",
        "date": "12 Nov 2026",
        "tokenNo": 4,
        "reaction": "Improved",
        "symptoms": "Knee Osteoarthritis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2246",
            "remedy": "Arnica Montana",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1202",
        "patientId": "p-46",
        "date": "11 Nov 2026",
        "tokenNo": 12,
        "reaction": "Improved",
        "symptoms": "Knee Osteoarthritis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2280",
            "remedy": "Arnica Montana",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          },
          {
            "id": "rx-2281",
            "remedy": "Pulsatilla",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1215",
        "patientId": "p-46",
        "date": "10 Nov 2026",
        "tokenNo": 13,
        "reaction": "No Change",
        "symptoms": "Persistent Knee Osteoarthritis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2297",
            "remedy": "Arnica Montana",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1226",
        "patientId": "p-46",
        "date": "09 Nov 2026",
        "tokenNo": 10,
        "reaction": "Improved",
        "symptoms": "Knee Osteoarthritis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2313",
            "remedy": "Arnica Montana",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          },
          {
            "id": "rx-2314",
            "remedy": "Pulsatilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1242",
        "patientId": "p-46",
        "date": "07 Nov 2026",
        "tokenNo": 1,
        "reaction": "Improved",
        "symptoms": "Knee Osteoarthritis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2338",
            "remedy": "Arnica Montana",
            "potency": "1M",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": true
          },
          {
            "id": "rx-2339",
            "remedy": "Pulsatilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1262",
        "patientId": "p-46",
        "date": "06 Nov 2026",
        "tokenNo": 9,
        "reaction": "Improved",
        "symptoms": "Knee Osteoarthritis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2366",
            "remedy": "Arnica Montana",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1316",
        "patientId": "p-46",
        "date": "02 Nov 2026",
        "tokenNo": 10,
        "reaction": "Improved",
        "symptoms": "Knee Osteoarthritis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2442",
            "remedy": "Arnica Montana",
            "potency": "1M",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          },
          {
            "id": "rx-2443",
            "remedy": "Pulsatilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 0,
        "feeStatus": "Free"
      },
      {
        "id": "v-1371",
        "patientId": "p-46",
        "date": "18 Sep 2026",
        "tokenNo": 4,
        "reaction": "No Change",
        "symptoms": "Persistent Knee Osteoarthritis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2521",
            "remedy": "Arnica Montana",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          },
          {
            "id": "rx-2522",
            "remedy": "Pulsatilla",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD in morning & evening",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1401",
        "patientId": "p-46",
        "date": "22 Aug 2026",
        "tokenNo": 4,
        "reaction": "No Change",
        "symptoms": "Persistent Knee Osteoarthritis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2564",
            "remedy": "Arnica Montana",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1465",
        "patientId": "p-46",
        "date": "16 Jun 2026",
        "tokenNo": 12,
        "reaction": "Improved",
        "symptoms": "Knee Osteoarthritis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2653",
            "remedy": "Arnica Montana",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1510",
        "patientId": "p-46",
        "date": "18 Mar 2026",
        "tokenNo": 12,
        "reaction": "Improved",
        "symptoms": "Knee Osteoarthritis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2713",
            "remedy": "Arnica Montana",
            "potency": "1M",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills BD after meals",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      }
    ]
  },
  {
    "id": "p-47",
    "mrn": "NK-1552",
    "fullName": "Sufi Muhammad Din",
    "relationType": "s/o",
    "relativeName": "Pir Bakhsh",
    "age": 80,
    "gender": "Male",
    "phone": "0300-9988771",
    "locality": "Faisal Hills",
    "totalVisits": 6,
    "lastVisitDate": "24 Nov 2026",
    "chiefComplaints": [
      {
        "id": "cc-p-47-1",
        "name": "Sciatica & Lumbar Spondylosis",
        "severity": "Moderate",
        "trend": "Declining",
        "duration": "1 yr"
      }
    ],
    "severityTrend": {
      "complaintName": "Sciatica & Lumbar Spondylosis",
      "overallRelief": "-65% relief",
      "history": [
        {
          "label": "13 Nov",
          "date": "13 Nov 2026",
          "score": 80
        },
        {
          "label": "16 Nov",
          "date": "16 Nov 2026",
          "score": 60
        },
        {
          "label": "23 Nov",
          "date": "23 Nov 2026",
          "score": 40
        },
        {
          "label": "24 Nov",
          "date": "24 Nov 2026",
          "score": 20
        }
      ]
    },
    "pastVisits": [
      {
        "id": "v-1001",
        "patientId": "p-47",
        "date": "24 Nov 2026",
        "tokenNo": 1,
        "reaction": "First Visit",
        "symptoms": "Primary consultation presenting with Sciatica & Lumbar Spondylosis since 1 yr.",
        "prescriptions": [
          {
            "id": "rx-2001",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 30 days.",
        "durationDays": 30,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1026",
        "patientId": "p-47",
        "date": "23 Nov 2026",
        "tokenNo": 8,
        "reaction": "Improved",
        "symptoms": "Sciatica & Lumbar Spondylosis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2034",
            "remedy": "Rhus Toxicodendron",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 0,
        "feeStatus": "Free"
      },
      {
        "id": "v-1130",
        "patientId": "p-47",
        "date": "16 Nov 2026",
        "tokenNo": 9,
        "reaction": "No Change",
        "symptoms": "Persistent Sciatica & Lumbar Spondylosis. Symptoms unaltered by previous dose, modalities unchanged.",
        "prescriptions": [
          {
            "id": "rx-2177",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1163",
        "patientId": "p-47",
        "date": "13 Nov 2026",
        "tokenNo": 1,
        "reaction": "Improved",
        "symptoms": "Sciatica & Lumbar Spondylosis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2223",
            "remedy": "Rhus Toxicodendron",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 7 days.",
        "durationDays": 7,
        "fee": 500,
        "feeStatus": "Paid"
      },
      {
        "id": "v-1193",
        "patientId": "p-47",
        "date": "11 Nov 2026",
        "tokenNo": 3,
        "reaction": "Improved",
        "symptoms": "Sciatica & Lumbar Spondylosis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2265",
            "remedy": "Rhus Toxicodendron",
            "potency": "30C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": true
          },
          {
            "id": "rx-2266",
            "remedy": "Sulphur",
            "potency": "200C",
            "vehicle": "Powder (Packets)",
            "dosage": "1 powder in morning empty stomach",
            "isRepeat": false
          }
        ],
        "doctorNotes": "Follow up scheduled in 15 days.",
        "durationDays": 15,
        "fee": 500,
        "feeStatus": "Due"
      },
      {
        "id": "v-1209",
        "patientId": "p-47",
        "date": "10 Nov 2026",
        "tokenNo": 7,
        "reaction": "Improved",
        "symptoms": "Sciatica & Lumbar Spondylosis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
        "prescriptions": [
          {
            "id": "rx-2289",
            "remedy": "Rhus Toxicodendron",
            "potency": "200C",
            "vehicle": "Pills (Globules)",
            "dosage": "4 pills TDS",
            "isRepeat": true
          }
        ],
        "doctorNotes": "Follow up scheduled in 21 days.",
        "durationDays": 21,
        "fee": 500,
        "feeStatus": "Paid"
      }
    ]
  }
];
