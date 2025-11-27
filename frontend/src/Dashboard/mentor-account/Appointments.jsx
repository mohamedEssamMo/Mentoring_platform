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
              Session Date
            </th>
            <th scope="col" className="px-6 py-3">
              Session Time
            </th>
            <th scope="col" className="px-6 py-3">
              Meeting link
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


              <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                {formateDate(item.sessionDate)}
              </td>

              <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                {item.sessionTime}
              </td>

              <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                <a
                  href={item.meetLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline bg-primaryColor px-3 py-2 rounded-md whitespace-nowrap"
                >
                  Join Meeting <span className="font-bold text-2xl">→</span>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Appointments;
