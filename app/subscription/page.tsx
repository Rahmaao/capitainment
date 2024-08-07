// app/subscription-history/page.tsx
import Link from "next/link";

const subscriptions = [
  {
    id: 1,
    date: "March 23, 1997",
    description: "Monthly Subscription",
    amount: "₦3,000.00",
    status: "Successful",
  },
  {
    id: 2,
    date: "March 23, 1997",
    description: "Monthly Subscription",
    amount: "₦3,000.00",
    status: "Successful",
  },
  {
    id: 3,
    date: "March 23, 1997",
    description: "Monthly Subscription",
    amount: "₦3,000.00",
    status: "Successful",
  },
  {
    id: 4,
    date: "March 23, 1997",
    description: "Weekly Subscription",
    amount: "₦3,000.00",
    status: "Failed",
  },
];

export default function SubscriptionHistory() {
  return (
    <div className="container bg-[#FAFAFA] flex justify-center items-center pb-[84px] lg:pb-0 h-screen">
      <div className="h-[90%] w-[90%] flex flex-col">
        <div className="w-full h-[44px] pl-3 flex items-center">
          <h2 className="text-[20px] text-[#0A0A0A] font-bold text-left">
            Subscriptions History
          </h2>
        </div>

        <div className="overflow-x-auto flex-grow mt-5 rounded-md">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-[#F0F0F0] text-[#170304] text-[14px] font-medium">
                <th className="py-2 px-4 border-b text-left whitespace-nowrap">
                  Date Added
                </th>
                <th className="py-2 px-4 border-b text-left whitespace-nowrap">
                  Description
                </th>
                <th className="py-2 px-4 border-b text-left whitespace-nowrap">
                  Amount
                </th>
                <th className="py-2 px-4 border-b text-left whitespace-nowrap">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {subscriptions.map((sub) => (
                <tr
                  key={sub.id}
                  className="hover:bg-gray-100 text-[#777777] text-[14px] font-normal"
                >
                  <td className="py-2 px-4 border-b whitespace-nowrap">
                    <Link
                      href={`/subscription-history/${sub.id}`}
                      className="block w-full h-full"
                    >
                      {sub.date}
                    </Link>
                  </td>
                  <td className="py-2 px-4 border-b whitespace-nowrap">
                    <Link
                      href={`/subscription-history/${sub.id}`}
                      className="block w-full h-full"
                    >
                      {sub.description}
                    </Link>
                  </td>
                  <td className="py-2 px-4 border-b whitespace-nowrap">
                    <Link
                      href={`/subscription-history/${sub.id}`}
                      className="block w-full h-full"
                    >
                      {sub.amount}
                    </Link>
                  </td>
                  <td
                    className={`py-2 px-4 border-b text-[10px] whitespace-nowrap ${
                      sub.status === "Successful"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    <Link
                      href={`/subscription-history/${sub.id}`}
                      className={`flex justify-center items-center ${
                        sub.status === "Successful"
                          ? "bg-[#E0F9F0]"
                          : "bg-[#ffdbdb]"
                      }  w-[72px] h-[26px] rounded-full`}
                    >
                      {sub.status}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
