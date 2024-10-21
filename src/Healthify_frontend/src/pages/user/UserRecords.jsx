import AccessLog from "../../components/AccessLog";
import HealthRecord from "../../components/HealthRecord";
import Sidebar from "../../components/Sidebar";
import TopBar from "../../components/TopBar";
import { healthData } from "../../lib/data";

const UserRecords = () => {
	return (
		<div className="flex flex-row">
			<Sidebar />

			<div className="w-full text-white p-5">
				<TopBar />

				<div className="py-5 grid grid-cols-2 gap-5">
					<HealthRecord data={healthData} />
					<AccessLog/>
				</div>

				<div>
					<div
						style={{
							lineHeight: 1.6,
						}}
						className="bg-primary rounded-lg p-6 h-fit my-5"
					>
						<h2 className="text-xl font-semibold py-4">
							Doctor's Notes
						</h2>
						<p>
							<strong>Patient Name:</strong> John Doe
						</p>
						<p>
							<strong>DOB:</strong> 01/15/1985
						</p>
						<p>
							<strong>Visit Date:</strong> 10/15/2024
						</p>
						<p>
							<strong>Reason for Visit:</strong> Routine follow-up
							for hypertension
						</p>

						<hr />

						<h3>
							Subjective (Patient's account of their symptoms)
						</h3>
						<p>
							<strong>Chief Complaint:</strong> No new complaints,
							here for routine follow-up.
						</p>
						<p>
							<strong>History of Present Illness (HPI):</strong>
						</p>
						<ul>
							<li>
								Reports good compliance with prescribed
								antihypertensive medications (Lisinopril 10mg
								daily).
							</li>
							<li>
								Denies chest pain, palpitations, shortness of
								breath, or dizziness.
							</li>
							<li>
								Occasional headaches, relieved with
								acetaminophen.
							</li>
							<li>No changes in diet or exercise habits.</li>
						</ul>
						<p>
							<strong>Review of Systems (ROS):</strong>
						</p>
						<ul>
							<li>
								<strong>Cardiovascular:</strong> No chest pain
								or palpitations.
							</li>
							<li>
								<strong>Respiratory:</strong> No shortness of
								breath or cough.
							</li>
							<li>
								<strong>Neurological:</strong> No numbness,
								weakness, or dizziness.
							</li>
						</ul>

						<hr />

						<h3>Objective (Doctor's observations and findings)</h3>
						<p>
							<strong>Vitals:</strong>
						</p>
						<ul>
							<li>Blood Pressure: 135/85 mmHg</li>
							<li>Heart Rate: 75 bpm</li>
							<li>Respiratory Rate: 16 breaths/min</li>
							<li>Temperature: 98.6°F</li>
						</ul>
						<p>
							<strong>Physical Exam:</strong>
						</p>
						<ul>
							<li>
								<strong>General:</strong> Alert, oriented, in no
								acute distress.
							</li>
							<li>
								<strong>Cardiovascular:</strong> Normal heart
								sounds, no murmurs or gallops.
							</li>
							<li>
								<strong>Respiratory:</strong> Clear to
								auscultation bilaterally, no wheezes or
								crackles.
							</li>
							<li>
								<strong>Abdomen:</strong> Soft, non-tender, no
								masses.
							</li>
							<li>
								<strong>Extremities:</strong> No edema, pulses
								palpable bilaterally.
							</li>
						</ul>

						<hr />

						<h3>Assessment (Diagnosis or analysis)</h3>
						<ul>
							<li>
								<strong>Hypertension:</strong> Stable on current
								regimen, no evidence of complications.
							</li>
							<li>
								<strong>Headaches:</strong> Likely
								tension-related, self-limited.
							</li>
						</ul>

						<hr />

						<h3>Plan</h3>
						<ul>
							<li>
								Continue Lisinopril 10mg daily for hypertension.
							</li>
							<li>
								Educate on lifestyle modifications (diet and
								exercise).
							</li>
							<li>
								Recommend monitoring blood pressure at home and
								keeping a log.
							</li>
							<li>
								Follow-up in 3 months for reassessment of blood
								pressure control.
							</li>
							<li>PRN acetaminophen for headaches as needed.</li>
						</ul>

						<hr />

						<p>
							<strong>Doctor's Signature:</strong> Dr. Jane Smith
						</p>
						<p>
							<strong>Date:</strong> 10/15/2024
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserRecords;
