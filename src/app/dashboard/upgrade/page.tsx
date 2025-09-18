"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import UpgradeDietPlanCard from "@/components/cards/UpgradeDietPlanCard";
import UpgradeWorkoutPlanCard from "@/components/cards/UpgradeWorkoutPlanCard";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

interface BillingRecord {
  id: string;
  plan: string;
  issueDate: string;
  expireDate: string;
  amount: number;
}

export default function UpgradePage() {
  const router = useRouter();

  const billingHistory: BillingRecord[] = [
    {
      id: "1",
      plan: "Upgrade Plan",
      issueDate: "12/06/2024",
      expireDate: "12/07/2024",
      amount: 5,
    },
    {
      id: "2",
      plan: "Upgrade Plan",
      issueDate: "12/06/2024",
      expireDate: "12/07/2024",
      amount: 5,
    },
    {
      id: "3",
      plan: "Upgrade Plan",
      issueDate: "12/06/2024",
      expireDate: "12/07/2024",
      amount: 7,
    },
    {
      id: "4",
      plan: "Upgrade Plan",
      issueDate: "12/04/2023",
      expireDate: "12/05/2024",
      amount: 5,
    },
  ];

  const handleDownloadPDF = (recordId: string) => {
    // Find the specific record
    const record = billingHistory.find((r) => r.id === recordId);
    if (!record) return;

    try {
      // Create new PDF document
      const doc = new jsPDF();

      // Add company header
      doc.setFontSize(20);
      doc.text("Invoice", 20, 30);

      // Add invoice details
      doc.setFontSize(12);
      doc.text(`Invoice ID: #${record.id}`, 20, 50);
      doc.text(`Issue Date: ${record.issueDate}`, 20, 60);
      doc.text(`Expire Date: ${record.expireDate}`, 20, 70);

      // Create table data
      const tableData = [
        [record.plan, record.issueDate, record.expireDate, `${record.amount}`],
      ];

      // Add table using autoTable
      autoTable(doc, {
        head: [["Plan", "Issue Date", "Expire Date", "Amount"]],
        body: tableData,
        startY: 90,
        theme: "grid",
        styles: {
          fontSize: 10,
          cellPadding: 5,
        },
        headStyles: {
          fillColor: [71, 85, 105],
          textColor: 255,
          fontStyle: "bold",
        },
        bodyStyles: {
          fillColor: [248, 250, 252],
          textColor: [51, 65, 85],
        },
      });

      // Add total section
      const finalY = (doc as any).lastAutoTable.finalY + 20;
      doc.setFontSize(14);
      doc.text(`Total Amount: ${record.amount}`, 20, finalY);

      // Add footer
      doc.setFontSize(10);
      doc.text("Thank you for your business!", 20, finalY + 20);
      doc.text(
        "Generated on: " + new Date().toLocaleDateString(),
        20,
        finalY + 30
      );

      // Download the PDF
      doc.save(`invoice-${record.id}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        {/* Pricing Cards */}
        <div className="flex items-center gap-6 mb-12">
          {/* Diet Plan Card */}
          <UpgradeDietPlanCard className={"bg-white shadow-lg py-4 min-w-md"} />

          {/* Workout Plan Card */}
          <UpgradeWorkoutPlanCard
            className={"bg-white shadow-lg py-4 min-w-md"}
          />
        </div>

        {/* Billing History */}
        <Card className="bg-white shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl font-semibold text-gray-900">
              Billing History
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left py-4 px-6 font-medium text-gray-700">
                      Plan
                    </th>
                    <th className="text-left py-4 px-6 font-medium text-gray-700">
                      Issue
                    </th>
                    <th className="text-left py-4 px-6 font-medium text-gray-700">
                      Expire
                    </th>
                    <th className="text-left py-4 px-6 font-medium text-gray-700">
                      Amount
                    </th>
                    <th className="text-left py-4 px-6 font-medium text-gray-700">
                      Download
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {billingHistory.map((record, index) => (
                    <tr key={record.id} className="border-b hover:bg-gray-50">
                      <td className="py-4 px-6 text-gray-900">{record.plan}</td>
                      <td className="py-4 px-6 text-gray-600">
                        {record.issueDate}
                      </td>
                      <td className="py-4 px-6 text-red-500">
                        {record.expireDate}
                      </td>
                      <td className="py-4 px-6 text-gray-900">
                        ${record.amount}
                      </td>
                      <td className="py-4 px-6">
                        <Button
                          variant="link"
                          className="text-blue-600 hover:text-blue-800 p-0 h-auto font-normal underline"
                          onClick={() => handleDownloadPDF(record.id)}
                        >
                          Download PDF
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
