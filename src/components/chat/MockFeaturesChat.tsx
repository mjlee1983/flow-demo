import { XCircle } from "lucide-react"; // Assuming lucide-react is used

interface MockFeaturesChatProps {
  error: string | null;
}

export function MockFeaturesChat({ error }: MockFeaturesChatProps) {
  if (!error) {
    return null;
  }

  return (
    <div>
      <div className="flex justify-start border border-zinc-600 max-w-3xl mt-2 mx-auto group rounded">
        <table className="w-full">
          <thead className="bg-zinc-800 border-b-2 border-zinc-600">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-zinc-300">
                Features
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-zinc-300">
                Select
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-600">
            <tr className="">
              <td className="px-6 py-4 text-sm text-zinc-200 ">
                <div
                  className="font-medium cursor-help"
                  title="Manage user permissions and access levels"
                >
                  Role-Based Access Control
                </div>
              </td>
              <td className="px-6 py-4">
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="w-4 h-4 text-blue-600 rounded opacity-50 cursor-not-allowed"
                />
              </td>
            </tr>

            <tr className="">
              <td className="px-6 py-4 text-sm text-zinc-200 ">
                <div
                  className="font-medium cursor-help"
                  title="Monitor and log user actions and modifications"
                >
                  User Activity Tracking
                </div>
              </td>
              <td className="px-6 py-4">
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="w-4 h-4 text-blue-600 rounded opacity-50 cursor-not-allowed"
                />
              </td>
            </tr>

            <tr className="">
              <td className="px-6 py-4 text-sm text-zinc-200 ">
                <div
                  className="font-medium cursor-help"
                  title="Enhanced security for user login"
                >
                  Multi-Factor Authentication
                </div>
              </td>
              <td className="px-6 py-4">
                <input
                  type="checkbox"
                  disabled
                  className="w-4 h-4 text-blue-600 rounded opacity-50 cursor-not-allowed"
                />
              </td>
            </tr>

            <tr className="">
              <td className="px-6 py-4 text-sm text-zinc-200 ">
                <div
                  className="font-medium cursor-help"
                  title="Connect to manufacturing execution systems"
                >
                  Production Data Integration
                </div>
              </td>
              <td className="px-6 py-4">
                <select
                  disabled
                  className="border border-zinc-300 rounded px-3 py-1 text-sm opacity-50 cursor-not-allowed"
                >
                  <option>SAP</option>
                  <option>Oracle NetSuite</option>
                  <option>QuickBooks</option>
                </select>
              </td>
            </tr>

            <tr className="">
              <td className="px-6 py-4 text-sm text-zinc-200 ">
                <div
                  className="font-medium cursor-help"
                  title="Import and track supplier performance metrics"
                >
                  Supplier Quality Data
                </div>
              </td>
              <td className="px-6 py-4">
                <select
                  disabled
                  className="border border-zinc-300 rounded px-3 py-1 text-sm opacity-50 cursor-not-allowed"
                >
                  <option>API Integration</option>
                  <option>File Upload</option>
                  <option>Manual Entry</option>
                </select>
              </td>
            </tr>

            <tr className="">
              <td className="px-6 py-4 text-sm text-zinc-200 ">
                <div
                  className="font-medium cursor-help"
                  title="Integrate LIMS data for quality testing"
                >
                  Laboratory Test Results
                </div>
              </td>
              <td className="px-6 py-4">
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="w-4 h-4 text-blue-600 rounded opacity-50 cursor-not-allowed"
                />
              </td>
            </tr>

            <tr className="">
              <td className="px-6 py-4 text-sm text-zinc-200 ">
                <div
                  className="font-medium cursor-help"
                  title="Track calibration status and schedules"
                >
                  Equipment Calibration Records
                </div>
              </td>
              <td className="px-6 py-4">
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="w-4 h-4 text-blue-600 rounded opacity-50 cursor-not-allowed"
                />
              </td>
            </tr>

            <tr className="">
              <td className="px-6 py-4 text-sm text-zinc-200 ">
                <div
                  className="font-medium cursor-help"
                  title="Maintain complete audit history for compliance"
                >
                  Audit Trail Management
                </div>
              </td>
              <td className="px-6 py-4">
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="w-4 h-4 text-blue-600 rounded opacity-50 cursor-not-allowed"
                />
              </td>
            </tr>

            <tr className="">
              <td className="px-6 py-4 text-sm text-zinc-200 ">
                <div
                  className="font-medium cursor-help"
                  title="Select applicable compliance standards"
                >
                  Regulatory Standard Framework
                </div>
              </td>
              <td className="px-6 py-4">
                <select
                  disabled
                  className="border border-zinc-300 rounded px-3 py-1 text-sm opacity-50 cursor-not-allowed"
                >
                  <option>ISO 9001</option>
                  <option>FDA 21 CFR Part 11</option>
                  <option>ISO 13485</option>
                  <option>IATF 16949</option>
                </select>
              </td>
            </tr>

            <tr className="">
              <td className="px-6 py-4 text-sm text-zinc-200 ">
                <div
                  className="font-medium cursor-help"
                  title="Document and manage quality deviations"
                >
                  Non-Conformance Tracking
                </div>
              </td>
              <td className="px-6 py-4">
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="w-4 h-4 text-blue-600 rounded opacity-50 cursor-not-allowed"
                />
              </td>
            </tr>

            <tr className="">
              <td className="px-6 py-4 text-sm text-zinc-200 ">
                <div
                  className="font-medium cursor-help"
                  title="Corrective and Preventive Action workflows"
                >
                  CAPA Management
                </div>
              </td>
              <td className="px-6 py-4">
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="w-4 h-4 text-blue-600 rounded opacity-50 cursor-not-allowed"
                />
              </td>
            </tr>

            <tr className="">
              <td className="px-6 py-4 text-sm text-zinc-200 ">
                <div
                  className="font-medium cursor-help"
                  title="Version control for SOPs and quality documents"
                >
                  Document Control System
                </div>
              </td>
              <td className="px-6 py-4">
                <select
                  disabled
                  className="border border-zinc-300 rounded px-3 py-1 text-sm opacity-50 cursor-not-allowed"
                >
                  <option>Electronic</option>
                  <option>Hybrid</option>
                  <option>Paper-based</option>
                </select>
              </td>
            </tr>

            <tr className="">
              <td className="px-6 py-4 text-sm text-zinc-200 ">
                <div
                  className="font-medium cursor-help"
                  title="Track employee certifications and training"
                >
                  Training Records Management
                </div>
              </td>
              <td className="px-6 py-4">
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="w-4 h-4 text-blue-600 rounded opacity-50 cursor-not-allowed"
                />
              </td>
            </tr>

            <tr className="">
              <td className="px-6 py-4 text-sm text-zinc-200 ">
                <div
                  className="font-medium cursor-help"
                  title="FMEA and risk analysis tools"
                >
                  Risk Assessment Module
                </div>
              </td>
              <td className="px-6 py-4">
                <input
                  type="checkbox"
                  disabled
                  className="w-4 h-4 text-blue-600 rounded opacity-50 cursor-not-allowed"
                />
              </td>
            </tr>

            <tr className="">
              <td className="px-6 py-4 text-sm text-zinc-200 ">
                <div
                  className="font-medium cursor-help"
                  title="Track and resolve customer quality issues"
                >
                  Customer Complaint Management
                </div>
              </td>
              <td className="px-6 py-4">
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="w-4 h-4 text-blue-600 rounded opacity-50 cursor-not-allowed"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-end max-w-3xl mt-2 mx-auto group rounded">
        <button className="rounded bg-zinc-600 px-4 py-2 text-zinc-400" disabled>
          Approve
        </button>
      </div>
    </div>
  );
}
