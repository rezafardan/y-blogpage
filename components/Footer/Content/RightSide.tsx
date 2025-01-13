const categoriesData = {
  data: [
    {
      id: "cm5lh99pu0001pcsznu3bdmul",
      name: "HUKUM",
      description: "Deskripsi dari hukum kategori",
      createdAt: "2025-01-06T20:11:37.457Z",
      updatedAt: "2025-01-07T07:19:32.061Z",
      isUserActive: true,
      user: {
        id: "cm5kzad2v0000v98lqdeo6b77",
        username: "administrator",
        role: "ADMINISTRATOR",
        deletedAt: null,
      },
    },
    {
      id: "cm5m5zfrr0001pce83yc7hnch",
      name: "PERISTIWA",
      description: "Deskripsi dari peristiwa kategori",
      createdAt: "2025-01-07T07:43:49.142Z",
      updatedAt: "2025-01-07T07:43:49.142Z",
      isUserActive: true,
      user: {
        id: "cm5kzad2v0000v98lqdeo6b77",
        username: "administrator",
        role: "ADMINISTRATOR",
        deletedAt: null,
      },
    },
    {
      id: "cm5m628uj0003pce810x8kxf1",
      name: "OLAHRAGA",
      description: "Deskripsi dari olahraga kategori",
      createdAt: "2025-01-07T07:46:00.139Z",
      updatedAt: "2025-01-07T07:46:00.139Z",
      isUserActive: true,
      user: {
        id: "cm5kzad2v0000v98lqdeo6b77",
        username: "administrator",
        role: "ADMINISTRATOR",
        deletedAt: null,
      },
    },
    {
      id: "cm5o7p08k0001l903o822v261",
      name: "POLITIK",
      description: "Deskripsi dari politik kategori",
      createdAt: "2025-01-08T18:07:14.037Z",
      updatedAt: "2025-01-08T18:07:14.037Z",
      isUserActive: true,
      user: {
        id: "cm5o7mvzq0000mb03tad9qfv8",
        username: "demo",
        role: "ADMINISTRATOR",
        deletedAt: null,
      },
    },
    {
      id: "cm5o7phku0003l903nko573a2",
      name: "PEMERINTAHAN",
      description: "Deskripsi dari pemerintahan kategori",
      createdAt: "2025-01-08T18:07:36.510Z",
      updatedAt: "2025-01-08T18:07:36.510Z",
      isUserActive: true,
      user: {
        id: "cm5o7mvzq0000mb03tad9qfv8",
        username: "demo",
        role: "ADMINISTRATOR",
        deletedAt: null,
      },
    },
    {
      id: "cm5o7pvvs0005l9030caekism",
      name: "EKONOMI",
      description: "Deskripsi dari ekonomi kategori",
      createdAt: "2025-01-08T18:07:55.049Z",
      updatedAt: "2025-01-08T18:07:55.049Z",
      isUserActive: true,
      user: {
        id: "cm5o7mvzq0000mb03tad9qfv8",
        username: "demo",
        role: "ADMINISTRATOR",
        deletedAt: null,
      },
    },
    {
      id: "cm5o7q3ki0007l903jik2bcxo",
      name: "BISNIS",
      description: "Deskripsi dari bisnis kategori",
      createdAt: "2025-01-08T18:08:05.011Z",
      updatedAt: "2025-01-08T18:08:05.011Z",
      isUserActive: true,
      user: {
        id: "cm5o7mvzq0000mb03tad9qfv8",
        username: "demo",
        role: "ADMINISTRATOR",
        deletedAt: null,
      },
    },
    {
      id: "cm5o7qipb0009l903mxnamqfh",
      name: "GAYA HIDUP",
      description: "Deskripsi dari gaya hidup kategori",
      createdAt: "2025-01-08T18:08:24.624Z",
      updatedAt: "2025-01-08T18:08:24.624Z",
      isUserActive: true,
      user: {
        id: "cm5o7mvzq0000mb03tad9qfv8",
        username: "demo",
        role: "ADMINISTRATOR",
        deletedAt: null,
      },
    },
  ],
  message: "Get all categories success!",
};

export default function RightSide() {
  return (
    <section className="flex justify-start items-start">
      <div className="flex flex-col">
        <p>Kategori</p>
        {categoriesData.data.map((category) => {
          return (
            <ul key={category.id} className="text-neutral-600 hover:text-white">
              <a href="">
                <li>{category.name}</li>
              </a>
            </ul>
          );
        })}
      </div>
    </section>
  );
}
