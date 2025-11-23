import { formateDate } from "../../utils/formateDate.js";

const Appointments = ({ appointments }) => {
  return (
    <div className="overflow-x-auto rounded-2xl shadow-lg bg-white dark:bg-gray-900">
      <table className="min-w-full text-left text-sm text-gray-500 dark:text-gray-300">
        <thead className="bg-gray-50 dark:bg-gray-800 text-xs text-gray-700 dark:text-gray-400 uppercase tracking-wider">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Gender
            </th>
            <th scope="col" className="px-6 py-3">
              Payment
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Booked on
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {appointments?.map((item) => (
            <tr
              key={item.item_id}
              className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <th
                scope="row"
                className="flex items-center px-6 py-4 text-gray-900 dark:text-gray-100 whitespace-nowrap"
              >
                <img
                  src={item.user?.photo || "/default-avatar.png"}
                  className="w-10 h-10 rounded-full object-cover"
                  alt={item.user?.name}
                />
                <div className="pl-3">
                  <div className="text-base font-semibold">
                    {item.user?.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {item.user?.email}
                  </div>
                </div>
              </th>

              <td className="px-6 py-4 text-gray-700 dark:text-gray-300 capitalize">
                {item.user?.gender}
              </td>

              <td className="px-6 py-4">
                <div
                  className={`flex items-center gap-2 font-semibold ${
                    item.isPaid ? "text-green-600" : "text-red-600"
                  }`}
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      item.isPaid ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></span>
                  {item.isPaid ? "Paid" : "Unpaid"}
                </div>
              </td>

              <td className="px-6 py-4 font-medium text-gray-800 dark:text-gray-200">
                ${item.ticketPrice}
              </td>

              <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                {formateDate(item.createdAt)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Appointments;
