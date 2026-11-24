import { Patient } from "@/types";
import { EXTENDED_PATIENTS } from "./mockPatients";

export const INITIAL_PATIENTS: Patient[] = [
	{
		"id": "p-1",
		"mrn": "NK-1492",
		"fullName": "Zainab Bibi",
		"relationType": "w/o",
		"relativeName": "Tariq Mehmood",
		"age": 42,
		"gender": "Female",
		"phone": "0300-8841290",
		"locality": "Taxila Cantt",
		"totalVisits": 10,
		"lastVisitDate": "24 Nov 2026",
		"chiefComplaints": [
				{
						"id": "cc-p-1-1",
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
								"label": "20 Nov",
								"date": "20 Nov 2026",
								"score": 80
						},
						{
								"label": "22 Nov",
								"date": "22 Nov 2026",
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
						"id": "v-1007",
						"patientId": "p-1",
						"date": "24 Nov 2026",
						"tokenNo": 7,
						"reaction": "First Visit",
						"symptoms": "Primary consultation presenting with Right-Sided Migraine since 4 yrs.",
						"prescriptions": [
								{
										"id": "rx-2009",
										"remedy": "Bryonia Alba",
										"potency": "30C",
										"vehicle": "Drops (Water)",
										"dosage": "3 drops BD in half cup water",
										"isRepeat": false
								}
						],
						"doctorNotes": "Follow up scheduled in 7 days.",
						"durationDays": 7,
						"fee": 0,
						"feeStatus": "Free"
				},
				{
						"id": "v-1027",
						"patientId": "p-1",
						"date": "23 Nov 2026",
						"tokenNo": 9,
						"reaction": "Improved",
						"symptoms": "Right-Sided Migraine markedly relieved by 60-70%. Energy levels restored, sleep normal.",
						"prescriptions": [
								{
										"id": "rx-2035",
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
						"id": "v-1028",
						"patientId": "p-1",
						"date": "22 Nov 2026",
						"tokenNo": 1,
						"reaction": "Improved",
						"symptoms": "Right-Sided Migraine markedly relieved by 60-70%. Energy levels restored, sleep normal.",
						"prescriptions": [
								{
										"id": "rx-2036",
										"remedy": "Bryonia Alba",
										"potency": "30C",
										"vehicle": "Drops (Water)",
										"dosage": "3 drops BD in half cup water",
										"isRepeat": false
								},
								{
										"id": "rx-2037",
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
						"id": "v-1067",
						"patientId": "p-1",
						"date": "20 Nov 2026",
						"tokenNo": 3,
						"reaction": "Improved",
						"symptoms": "Right-Sided Migraine markedly relieved by 60-70%. Energy levels restored, sleep normal.",
						"prescriptions": [
								{
										"id": "rx-2089",
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
						"id": "v-1180",
						"patientId": "p-1",
						"date": "12 Nov 2026",
						"tokenNo": 5,
						"reaction": "No Change",
						"symptoms": "Persistent Right-Sided Migraine. Symptoms unaltered by previous dose, modalities unchanged.",
						"prescriptions": [
								{
										"id": "rx-2247",
										"remedy": "Bryonia Alba",
										"potency": "30C",
										"vehicle": "Drops (Water)",
										"dosage": "3 drops BD in half cup water",
										"isRepeat": false
								},
								{
										"id": "rx-2248",
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
						"id": "v-1309",
						"patientId": "p-1",
						"date": "02 Nov 2026",
						"tokenNo": 3,
						"reaction": "No Change",
						"symptoms": "Persistent Right-Sided Migraine. Symptoms unaltered by previous dose, modalities unchanged.",
						"prescriptions": [
								{
										"id": "rx-2433",
										"remedy": "Bryonia Alba",
										"potency": "1M",
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
						"id": "v-1388",
						"patientId": "p-1",
						"date": "05 Sep 2026",
						"tokenNo": 5,
						"reaction": "Improved",
						"symptoms": "Right-Sided Migraine markedly relieved by 60-70%. Energy levels restored, sleep normal.",
						"prescriptions": [
								{
										"id": "rx-2546",
										"remedy": "Bryonia Alba",
										"potency": "30C",
										"vehicle": "Drops (Water)",
										"dosage": "3 drops BD in half cup water",
										"isRepeat": true
								},
								{
										"id": "rx-2547",
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
						"id": "v-1446",
						"patientId": "p-1",
						"date": "04 Jul 2026",
						"tokenNo": 5,
						"reaction": "First Visit",
						"symptoms": "Primary consultation presenting with Right-Sided Migraine since 4 yrs.",
						"prescriptions": [
								{
										"id": "rx-2626",
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
						"id": "v-1504",
						"patientId": "p-1",
						"date": "18 Mar 2026",
						"tokenNo": 6,
						"reaction": "Decline",
						"symptoms": "Aggravation of Right-Sided Migraine following cold exposure; acute recurrence.",
						"prescriptions": [
								{
										"id": "rx-2704",
										"remedy": "Bryonia Alba",
										"potency": "200C",
										"vehicle": "Drops (Water)",
										"dosage": "3 drops BD in half cup water",
										"isRepeat": false
								},
								{
										"id": "rx-2705",
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
						"id": "v-1517",
						"patientId": "p-1",
						"date": "22 Feb 2026",
						"tokenNo": 4,
						"reaction": "Improved",
						"symptoms": "Right-Sided Migraine markedly relieved by 60-70%. Energy levels restored, sleep normal.",
						"prescriptions": [
								{
										"id": "rx-2722",
										"remedy": "Bryonia Alba",
										"potency": "30C",
										"vehicle": "Drops (Water)",
										"dosage": "3 drops BD in half cup water",
										"isRepeat": false
								},
								{
										"id": "rx-2723",
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
				}
		]
},
	{
		"id": "p-2",
		"mrn": "NK-0819",
		"fullName": "Ayesha Siddiqua",
		"relationType": "d/o",
		"relativeName": "Haji Akbar",
		"age": 26,
		"gender": "Female",
		"phone": "0321-5512398",
		"locality": "Mohallah Farooqia",
		"totalVisits": 16,
		"lastVisitDate": "24 Nov 2026",
		"chiefComplaints": [
				{
						"id": "cc-p-2-1",
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
								"label": "18 Nov",
								"date": "18 Nov 2026",
								"score": 80
						},
						{
								"label": "22 Nov",
								"date": "22 Nov 2026",
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
						"id": "v-1005",
						"patientId": "p-2",
						"date": "24 Nov 2026",
						"tokenNo": 5,
						"reaction": "First Visit",
						"symptoms": "Primary consultation presenting with Allergic Rhinitis & Sinusitis since 2 yrs.",
						"prescriptions": [
								{
										"id": "rx-2006",
										"remedy": "Pulsatilla",
										"potency": "200C",
										"vehicle": "Pills (Globules)",
										"dosage": "4 pills BD in morning & evening",
										"isRepeat": false
								},
								{
										"id": "rx-2007",
										"remedy": "Lycopodium",
										"potency": "1M",
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
						"id": "v-1024",
						"patientId": "p-2",
						"date": "23 Nov 2026",
						"tokenNo": 6,
						"reaction": "Improved",
						"symptoms": "Allergic Rhinitis & Sinusitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
						"prescriptions": [
								{
										"id": "rx-2032",
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
						"id": "v-1041",
						"patientId": "p-2",
						"date": "22 Nov 2026",
						"tokenNo": 14,
						"reaction": "Improved",
						"symptoms": "Allergic Rhinitis & Sinusitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
						"prescriptions": [
								{
										"id": "rx-2052",
										"remedy": "Pulsatilla",
										"potency": "200C",
										"vehicle": "Pills (Globules)",
										"dosage": "4 pills BD in morning & evening",
										"isRepeat": true
								},
								{
										"id": "rx-2053",
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
						"id": "v-1098",
						"patientId": "p-2",
						"date": "18 Nov 2026",
						"tokenNo": 3,
						"reaction": "Improved",
						"symptoms": "Allergic Rhinitis & Sinusitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
						"prescriptions": [
								{
										"id": "rx-2132",
										"remedy": "Pulsatilla",
										"potency": "200C",
										"vehicle": "Pills (Globules)",
										"dosage": "4 pills BD in morning & evening",
										"isRepeat": false
								},
								{
										"id": "rx-2133",
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
						"id": "v-1147",
						"patientId": "p-2",
						"date": "14 Nov 2026",
						"tokenNo": 1,
						"reaction": "Improved",
						"symptoms": "Allergic Rhinitis & Sinusitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
						"prescriptions": [
								{
										"id": "rx-2202",
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
						"id": "v-1241",
						"patientId": "p-2",
						"date": "08 Nov 2026",
						"tokenNo": 15,
						"reaction": "Improved",
						"symptoms": "Allergic Rhinitis & Sinusitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
						"prescriptions": [
								{
										"id": "rx-2337",
										"remedy": "Pulsatilla",
										"potency": "30C",
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
						"id": "v-1263",
						"patientId": "p-2",
						"date": "06 Nov 2026",
						"tokenNo": 10,
						"reaction": "Improved",
						"symptoms": "Allergic Rhinitis & Sinusitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
						"prescriptions": [
								{
										"id": "rx-2367",
										"remedy": "Pulsatilla",
										"potency": "200C",
										"vehicle": "Pills (Globules)",
										"dosage": "4 pills BD in morning & evening",
										"isRepeat": true
								},
								{
										"id": "rx-2368",
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
						"feeStatus": "Due"
				},
				{
						"id": "v-1290",
						"patientId": "p-2",
						"date": "04 Nov 2026",
						"tokenNo": 10,
						"reaction": "Improved",
						"symptoms": "Allergic Rhinitis & Sinusitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
						"prescriptions": [
								{
										"id": "rx-2404",
										"remedy": "Pulsatilla",
										"potency": "30C",
										"vehicle": "Pills (Globules)",
										"dosage": "4 pills BD in morning & evening",
										"isRepeat": true
								},
								{
										"id": "rx-2405",
										"remedy": "Lycopodium",
										"potency": "200C",
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
						"id": "v-1336",
						"patientId": "p-2",
						"date": "28 Oct 2026",
						"tokenNo": 10,
						"reaction": "First Visit",
						"symptoms": "Primary consultation presenting with Allergic Rhinitis & Sinusitis since 2 yrs.",
						"prescriptions": [
								{
										"id": "rx-2473",
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
						"id": "v-1358",
						"patientId": "p-2",
						"date": "02 Oct 2026",
						"tokenNo": 3,
						"reaction": "Improved",
						"symptoms": "Allergic Rhinitis & Sinusitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
						"prescriptions": [
								{
										"id": "rx-2504",
										"remedy": "Pulsatilla",
										"potency": "200C",
										"vehicle": "Pills (Globules)",
										"dosage": "4 pills BD in morning & evening",
										"isRepeat": true
								},
								{
										"id": "rx-2505",
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
						"id": "v-1369",
						"patientId": "p-2",
						"date": "18 Sep 2026",
						"tokenNo": 2,
						"reaction": "Improved",
						"symptoms": "Allergic Rhinitis & Sinusitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
						"prescriptions": [
								{
										"id": "rx-2518",
										"remedy": "Pulsatilla",
										"potency": "200C",
										"vehicle": "Pills (Globules)",
										"dosage": "4 pills BD in morning & evening",
										"isRepeat": false
								},
								{
										"id": "rx-2519",
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
						"feeStatus": "Paid"
				},
				{
						"id": "v-1402",
						"patientId": "p-2",
						"date": "22 Aug 2026",
						"tokenNo": 5,
						"reaction": "Improved",
						"symptoms": "Allergic Rhinitis & Sinusitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
						"prescriptions": [
								{
										"id": "rx-2565",
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
						"id": "v-1429",
						"patientId": "p-2",
						"date": "19 Jul 2026",
						"tokenNo": 4,
						"reaction": "Improved",
						"symptoms": "Allergic Rhinitis & Sinusitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
						"prescriptions": [
								{
										"id": "rx-2602",
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
						"feeStatus": "Paid"
				},
				{
						"id": "v-1475",
						"patientId": "p-2",
						"date": "20 May 2026",
						"tokenNo": 7,
						"reaction": "Improved",
						"symptoms": "Allergic Rhinitis & Sinusitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
						"prescriptions": [
								{
										"id": "rx-2666",
										"remedy": "Pulsatilla",
										"potency": "200C",
										"vehicle": "Pills (Globules)",
										"dosage": "4 pills BD in morning & evening",
										"isRepeat": true
								}
						],
						"doctorNotes": "Follow up scheduled in 21 days.",
						"durationDays": 21,
						"fee": 500,
						"feeStatus": "Paid"
				},
				{
						"id": "v-1507",
						"patientId": "p-2",
						"date": "18 Mar 2026",
						"tokenNo": 9,
						"reaction": "First Visit",
						"symptoms": "Primary consultation presenting with Allergic Rhinitis & Sinusitis since 2 yrs.",
						"prescriptions": [
								{
										"id": "rx-2709",
										"remedy": "Pulsatilla",
										"potency": "200C",
										"vehicle": "Pills (Globules)",
										"dosage": "4 pills BD in morning & evening",
										"isRepeat": false
								},
								{
										"id": "rx-2710",
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
						"id": "v-1523",
						"patientId": "p-2",
						"date": "22 Feb 2026",
						"tokenNo": 10,
						"reaction": "Improved",
						"symptoms": "Allergic Rhinitis & Sinusitis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
						"prescriptions": [
								{
										"id": "rx-2731",
										"remedy": "Pulsatilla",
										"potency": "200C",
										"vehicle": "Pills (Globules)",
										"dosage": "4 pills BD in morning & evening",
										"isRepeat": true
								},
								{
										"id": "rx-2732",
										"remedy": "Lycopodium",
										"potency": "1M",
										"vehicle": "Drops (Water)",
										"dosage": "3 drops 4 PM in water",
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
		"id": "p-3",
		"mrn": "NK-1305",
		"fullName": "Sardar Muhammad",
		"relationType": "s/o",
		"relativeName": "Ghulam Rasool",
		"age": 68,
		"gender": "Male",
		"phone": "0345-9988112",
		"locality": "Wah Model Town",
		"totalVisits": 5,
		"lastVisitDate": "24 Nov 2026",
		"chiefComplaints": [
				{
						"id": "cc-p-3-1",
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
								"label": "18 Sep",
								"date": "18 Sep 2026",
								"score": 80
						},
						{
								"label": "03 Nov",
								"date": "03 Nov 2026",
								"score": 60
						},
						{
								"label": "05 Nov",
								"date": "05 Nov 2026",
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
						"id": "v-1018",
						"patientId": "p-3",
						"date": "24 Nov 2026",
						"tokenNo": 18,
						"reaction": "First Visit",
						"symptoms": "Primary consultation presenting with Knee Osteoarthritis since 5 yrs.",
						"prescriptions": [
								{
										"id": "rx-2025",
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
						"id": "v-1277",
						"patientId": "p-3",
						"date": "05 Nov 2026",
						"tokenNo": 11,
						"reaction": "Improved",
						"symptoms": "Knee Osteoarthritis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
						"prescriptions": [
								{
										"id": "rx-2386",
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
						"id": "v-1304",
						"patientId": "p-3",
						"date": "03 Nov 2026",
						"tokenNo": 13,
						"reaction": "Improved",
						"symptoms": "Knee Osteoarthritis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
						"prescriptions": [
								{
										"id": "rx-2425",
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
						"id": "v-1368",
						"patientId": "p-3",
						"date": "18 Sep 2026",
						"tokenNo": 1,
						"reaction": "No Change",
						"symptoms": "Persistent Knee Osteoarthritis. Symptoms unaltered by previous dose, modalities unchanged.",
						"prescriptions": [
								{
										"id": "rx-2516",
										"remedy": "Arnica Montana",
										"potency": "200C",
										"vehicle": "Pills (Globules)",
										"dosage": "4 pills BD after meals",
										"isRepeat": false
								},
								{
										"id": "rx-2517",
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
						"id": "v-1483",
						"patientId": "p-3",
						"date": "14 Apr 2026",
						"tokenNo": 1,
						"reaction": "Improved",
						"symptoms": "Knee Osteoarthritis markedly relieved by 60-70%. Energy levels restored, sleep normal.",
						"prescriptions": [
								{
										"id": "rx-2675",
										"remedy": "Arnica Montana",
										"potency": "200C",
										"vehicle": "Pills (Globules)",
										"dosage": "4 pills BD after meals",
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
		"id": "p-4",
		"mrn": "NK-1502",
		"fullName": "Muhammad Tariq",
		"relationType": "s/o",
		"relativeName": "Abdul Rehman",
		"age": 38,
		"gender": "Male",
		"phone": "0300-1122334",
		"locality": "Taxila Cantt",
		"totalVisits": 20,
		"lastVisitDate": "21 Nov 2026",
		"chiefComplaints": [
				{
						"id": "cc-p-4-1",
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
								"label": "12 Nov",
								"date": "12 Nov 2026",
								"score": 80
						},
						{
								"label": "15 Nov",
								"date": "15 Nov 2026",
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
						"id": "v-1059",
						"patientId": "p-4",
						"date": "21 Nov 2026",
						"tokenNo": 12,
						"reaction": "No Change",
						"symptoms": "Persistent Renal Calculi (Left Flank Pain). Symptoms unaltered by previous dose, modalities unchanged.",
						"prescriptions": [
								{
										"id": "rx-2079",
										"remedy": "Berberis Vulgaris",
										"potency": "30C",
										"vehicle": "Mother Tincture",
										"dosage": "10 drops BD in warm water",
										"isRepeat": false
								},
								{
										"id": "rx-2080",
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
						"id": "v-1089",
						"patientId": "p-4",
						"date": "19 Nov 2026",
						"tokenNo": 9,
						"reaction": "Improved",
						"symptoms": "Renal Calculi (Left Flank Pain) markedly relieved by 60-70%. Energy levels restored, sleep normal.",
						"prescriptions": [
								{
										"id": "rx-2121",
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
						"id": "v-1136",
						"patientId": "p-4",
						"date": "15 Nov 2026",
						"tokenNo": 1,
						"reaction": "First Visit",
						"symptoms": "Primary consultation presenting with Renal Calculi (Left Flank Pain) since 4 wks.",
						"prescriptions": [
								{
										"id": "rx-2185",
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
						"id": "v-1188",
						"patientId": "p-4",
						"date": "12 Nov 2026",
						"tokenNo": 13,
						"reaction": "No Change",
						"symptoms": "Persistent Renal Calculi (Left Flank Pain). Symptoms unaltered by previous dose, modalities unchanged.",
						"prescriptions": [
								{
										"id": "rx-2257",
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
						"id": "v-1198",
						"patientId": "p-4",
						"date": "11 Nov 2026",
						"tokenNo": 8,
						"reaction": "First Visit",
						"symptoms": "Primary consultation presenting with Renal Calculi (Left Flank Pain) since 4 wks.",
						"prescriptions": [
								{
										"id": "rx-2273",
										"remedy": "Berberis Vulgaris",
										"potency": "30C",
										"vehicle": "Mother Tincture",
										"dosage": "10 drops BD in warm water",
										"isRepeat": false
								},
								{
										"id": "rx-2274",
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
						"id": "v-1223",
						"patientId": "p-4",
						"date": "09 Nov 2026",
						"tokenNo": 7,
						"reaction": "First Visit",
						"symptoms": "Primary consultation presenting with Renal Calculi (Left Flank Pain) since 4 wks.",
						"prescriptions": [
								{
										"id": "rx-2309",
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
						"id": "v-1239",
						"patientId": "p-4",
						"date": "08 Nov 2026",
						"tokenNo": 13,
						"reaction": "Improved",
						"symptoms": "Renal Calculi (Left Flank Pain) markedly relieved by 60-70%. Energy levels restored, sleep normal.",
						"prescriptions": [
								{
										"id": "rx-2334",
										"remedy": "Berberis Vulgaris",
										"potency": "30C",
										"vehicle": "Mother Tincture",
										"dosage": "10 drops BD in warm water",
										"isRepeat": true
								},
								{
										"id": "rx-2335",
										"remedy": "Arsenicum Album",
										"potency": "30C",
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
						"id": "v-1272",
						"patientId": "p-4",
						"date": "05 Nov 2026",
						"tokenNo": 6,
						"reaction": "Improved",
						"symptoms": "Renal Calculi (Left Flank Pain) markedly relieved by 60-70%. Energy levels restored, sleep normal.",
						"prescriptions": [
								{
										"id": "rx-2379",
										"remedy": "Berberis Vulgaris",
										"potency": "Q (Mother Tincture)",
										"vehicle": "Mother Tincture",
										"dosage": "10 drops BD in warm water",
										"isRepeat": false
								},
								{
										"id": "rx-2380",
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
						"id": "v-1288",
						"patientId": "p-4",
						"date": "04 Nov 2026",
						"tokenNo": 8,
						"reaction": "Decline",
						"symptoms": "Aggravation of Renal Calculi (Left Flank Pain) following cold exposure; acute recurrence.",
						"prescriptions": [
								{
										"id": "rx-2402",
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
						"feeStatus": "Due"
				},
				{
						"id": "v-1307",
						"patientId": "p-4",
						"date": "02 Nov 2026",
						"tokenNo": 1,
						"reaction": "Improved",
						"symptoms": "Renal Calculi (Left Flank Pain) markedly relieved by 60-70%. Energy levels restored, sleep normal.",
						"prescriptions": [
								{
										"id": "rx-2429",
										"remedy": "Berberis Vulgaris",
										"potency": "30C",
										"vehicle": "Mother Tincture",
										"dosage": "10 drops BD in warm water",
										"isRepeat": true
								},
								{
										"id": "rx-2430",
										"remedy": "Arsenicum Album",
										"potency": "200C",
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
						"id": "v-1319",
						"patientId": "p-4",
						"date": "01 Nov 2026",
						"tokenNo": 1,
						"reaction": "No Change",
						"symptoms": "Persistent Renal Calculi (Left Flank Pain). Symptoms unaltered by previous dose, modalities unchanged.",
						"prescriptions": [
								{
										"id": "rx-2447",
										"remedy": "Berberis Vulgaris",
										"potency": "30C",
										"vehicle": "Mother Tincture",
										"dosage": "10 drops BD in warm water",
										"isRepeat": false
								},
								{
										"id": "rx-2448",
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
						"id": "v-1330",
						"patientId": "p-4",
						"date": "28 Oct 2026",
						"tokenNo": 4,
						"reaction": "Improved",
						"symptoms": "Renal Calculi (Left Flank Pain) markedly relieved by 60-70%. Energy levels restored, sleep normal.",
						"prescriptions": [
								{
										"id": "rx-2465",
										"remedy": "Berberis Vulgaris",
										"potency": "30C",
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
						"id": "v-1353",
						"patientId": "p-4",
						"date": "15 Oct 2026",
						"tokenNo": 13,
						"reaction": "First Visit",
						"symptoms": "Primary consultation presenting with Renal Calculi (Left Flank Pain) since 4 wks.",
						"prescriptions": [
								{
										"id": "rx-2496",
										"remedy": "Berberis Vulgaris",
										"potency": "30C",
										"vehicle": "Mother Tincture",
										"dosage": "10 drops BD in warm water",
										"isRepeat": false
								},
								{
										"id": "rx-2497",
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
						"id": "v-1357",
						"patientId": "p-4",
						"date": "02 Oct 2026",
						"tokenNo": 2,
						"reaction": "No Change",
						"symptoms": "Persistent Renal Calculi (Left Flank Pain). Symptoms unaltered by previous dose, modalities unchanged.",
						"prescriptions": [
								{
										"id": "rx-2502",
										"remedy": "Berberis Vulgaris",
										"potency": "Q (Mother Tincture)",
										"vehicle": "Mother Tincture",
										"dosage": "10 drops BD in warm water",
										"isRepeat": false
								},
								{
										"id": "rx-2503",
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
						"id": "v-1387",
						"patientId": "p-4",
						"date": "05 Sep 2026",
						"tokenNo": 4,
						"reaction": "Improved",
						"symptoms": "Renal Calculi (Left Flank Pain) markedly relieved by 60-70%. Energy levels restored, sleep normal.",
						"prescriptions": [
								{
										"id": "rx-2545",
										"remedy": "Berberis Vulgaris",
										"potency": "Q (Mother Tincture)",
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
						"id": "v-1438",
						"patientId": "p-4",
						"date": "19 Jul 2026",
						"tokenNo": 13,
						"reaction": "Improved",
						"symptoms": "Renal Calculi (Left Flank Pain) markedly relieved by 60-70%. Energy levels restored, sleep normal.",
						"prescriptions": [
								{
										"id": "rx-2614",
										"remedy": "Berberis Vulgaris",
										"potency": "Q (Mother Tincture)",
										"vehicle": "Mother Tincture",
										"dosage": "10 drops BD in warm water",
										"isRepeat": true
								},
								{
										"id": "rx-2615",
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
						"id": "v-1450",
						"patientId": "p-4",
						"date": "04 Jul 2026",
						"tokenNo": 9,
						"reaction": "Improved",
						"symptoms": "Renal Calculi (Left Flank Pain) markedly relieved by 60-70%. Energy levels restored, sleep normal.",
						"prescriptions": [
								{
										"id": "rx-2631",
										"remedy": "Berberis Vulgaris",
										"potency": "30C",
										"vehicle": "Mother Tincture",
										"dosage": "10 drops BD in warm water",
										"isRepeat": true
								},
								{
										"id": "rx-2632",
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
						"id": "v-1457",
						"patientId": "p-4",
						"date": "16 Jun 2026",
						"tokenNo": 4,
						"reaction": "Improved",
						"symptoms": "Renal Calculi (Left Flank Pain) markedly relieved by 60-70%. Energy levels restored, sleep normal.",
						"prescriptions": [
								{
										"id": "rx-2642",
										"remedy": "Berberis Vulgaris",
										"potency": "Q (Mother Tincture)",
										"vehicle": "Mother Tincture",
										"dosage": "10 drops BD in warm water",
										"isRepeat": true
								}
						],
						"doctorNotes": "Follow up scheduled in 30 days.",
						"durationDays": 30,
						"fee": 500,
						"feeStatus": "Due"
				},
				{
						"id": "v-1489",
						"patientId": "p-4",
						"date": "14 Apr 2026",
						"tokenNo": 7,
						"reaction": "Improved",
						"symptoms": "Renal Calculi (Left Flank Pain) markedly relieved by 60-70%. Energy levels restored, sleep normal.",
						"prescriptions": [
								{
										"id": "rx-2683",
										"remedy": "Berberis Vulgaris",
										"potency": "30C",
										"vehicle": "Mother Tincture",
										"dosage": "10 drops BD in warm water",
										"isRepeat": true
								},
								{
										"id": "rx-2684",
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
						"id": "v-1538",
						"patientId": "p-4",
						"date": "15 Jan 2026",
						"tokenNo": 11,
						"reaction": "Decline",
						"symptoms": "Aggravation of Renal Calculi (Left Flank Pain) following cold exposure; acute recurrence.",
						"prescriptions": [
								{
										"id": "rx-2751",
										"remedy": "Berberis Vulgaris",
										"potency": "30C",
										"vehicle": "Mother Tincture",
										"dosage": "10 drops BD in warm water",
										"isRepeat": false
								},
								{
										"id": "rx-2752",
										"remedy": "Arsenicum Album",
										"potency": "30C",
										"vehicle": "Drops (Water)",
										"dosage": "3 drops TDS",
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
		"id": "p-5",
		"mrn": "NK-1510",
		"fullName": "Sadia Parveen",
		"relationType": "w/o",
		"relativeName": "Kamran Khan",
		"age": 31,
		"gender": "Female",
		"phone": "0312-3344556",
		"locality": "Lala Rukh",
		"totalVisits": 9,
		"lastVisitDate": "16 Nov 2026",
		"chiefComplaints": [
				{
						"id": "cc-p-5-1",
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
								"label": "02 Nov",
								"date": "02 Nov 2026",
								"score": 80
						},
						{
								"label": "05 Nov",
								"date": "05 Nov 2026",
								"score": 60
						},
						{
								"label": "10 Nov",
								"date": "10 Nov 2026",
								"score": 40
						},
						{
								"label": "16 Nov",
								"date": "16 Nov 2026",
								"score": 20
						}
				]
		},
		"pastVisits": [
				{
						"id": "v-1122",
						"patientId": "p-5",
						"date": "16 Nov 2026",
						"tokenNo": 1,
						"reaction": "No Change",
						"symptoms": "Persistent Allergic Sneezing & Coryza. Symptoms unaltered by previous dose, modalities unchanged.",
						"prescriptions": [
								{
										"id": "rx-2166",
										"remedy": "Allium Cepa",
										"potency": "30C",
										"vehicle": "Drops (Water)",
										"dosage": "4 drops TDS for profuse lachrymation",
										"isRepeat": false
								},
								{
										"id": "rx-2167",
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
						"id": "v-1210",
						"patientId": "p-5",
						"date": "10 Nov 2026",
						"tokenNo": 8,
						"reaction": "Improved",
						"symptoms": "Allergic Sneezing & Coryza markedly relieved by 60-70%. Energy levels restored, sleep normal.",
						"prescriptions": [
								{
										"id": "rx-2290",
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
						"id": "v-1269",
						"patientId": "p-5",
						"date": "05 Nov 2026",
						"tokenNo": 3,
						"reaction": "No Change",
						"symptoms": "Persistent Allergic Sneezing & Coryza. Symptoms unaltered by previous dose, modalities unchanged.",
						"prescriptions": [
								{
										"id": "rx-2376",
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
						"id": "v-1315",
						"patientId": "p-5",
						"date": "02 Nov 2026",
						"tokenNo": 9,
						"reaction": "Decline",
						"symptoms": "Aggravation of Allergic Sneezing & Coryza following cold exposure; acute recurrence.",
						"prescriptions": [
								{
										"id": "rx-2440",
										"remedy": "Allium Cepa",
										"potency": "30C",
										"vehicle": "Drops (Water)",
										"dosage": "4 drops TDS for profuse lachrymation",
										"isRepeat": false
								},
								{
										"id": "rx-2441",
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
						"id": "v-1351",
						"patientId": "p-5",
						"date": "15 Oct 2026",
						"tokenNo": 11,
						"reaction": "Improved",
						"symptoms": "Allergic Sneezing & Coryza markedly relieved by 60-70%. Energy levels restored, sleep normal.",
						"prescriptions": [
								{
										"id": "rx-2493",
										"remedy": "Allium Cepa",
										"potency": "30C",
										"vehicle": "Drops (Water)",
										"dosage": "4 drops TDS for profuse lachrymation",
										"isRepeat": false
								},
								{
										"id": "rx-2494",
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
						"id": "v-1410",
						"patientId": "p-5",
						"date": "22 Aug 2026",
						"tokenNo": 13,
						"reaction": "Improved",
						"symptoms": "Allergic Sneezing & Coryza markedly relieved by 60-70%. Energy levels restored, sleep normal.",
						"prescriptions": [
								{
										"id": "rx-2576",
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
						"id": "v-1444",
						"patientId": "p-5",
						"date": "04 Jul 2026",
						"tokenNo": 3,
						"reaction": "No Change",
						"symptoms": "Persistent Allergic Sneezing & Coryza. Symptoms unaltered by previous dose, modalities unchanged.",
						"prescriptions": [
								{
										"id": "rx-2623",
										"remedy": "Allium Cepa",
										"potency": "30C",
										"vehicle": "Drops (Water)",
										"dosage": "4 drops TDS for profuse lachrymation",
										"isRepeat": false
								},
								{
										"id": "rx-2624",
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
						"id": "v-1485",
						"patientId": "p-5",
						"date": "14 Apr 2026",
						"tokenNo": 3,
						"reaction": "Improved",
						"symptoms": "Allergic Sneezing & Coryza markedly relieved by 60-70%. Energy levels restored, sleep normal.",
						"prescriptions": [
								{
										"id": "rx-2678",
										"remedy": "Allium Cepa",
										"potency": "30C",
										"vehicle": "Drops (Water)",
										"dosage": "4 drops TDS for profuse lachrymation",
										"isRepeat": true
								}
						],
						"doctorNotes": "Follow up scheduled in 7 days.",
						"durationDays": 7,
						"fee": 500,
						"feeStatus": "Due"
				},
				{
						"id": "v-1534",
						"patientId": "p-5",
						"date": "15 Jan 2026",
						"tokenNo": 7,
						"reaction": "Improved",
						"symptoms": "Allergic Sneezing & Coryza markedly relieved by 60-70%. Energy levels restored, sleep normal.",
						"prescriptions": [
								{
										"id": "rx-2746",
										"remedy": "Allium Cepa",
										"potency": "30C",
										"vehicle": "Drops (Water)",
										"dosage": "4 drops TDS for profuse lachrymation",
										"isRepeat": true
								},
								{
										"id": "rx-2747",
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
				}
		]
},
	...EXTENDED_PATIENTS,
];

export {
	COMMON_REMEDIES,
	COMMON_POTENCIES,
	DISPENSING_VEHICLES,
	DOSAGE_MACROS,
	LOCALITY_PRESETS,
} from "@/constants/clinical";
