
const prefix = '';


export default function FacilitySlider() {
  const facilities = [
    { title: '헬스존', image: '/facility-gym.jpg' },
    { title: 'PT룸', image: '/facility-pt.jpg' },
    { title: '샤워실', image: '/facility-shower.jpg' },
    { title: '락커룸', image: '/facility-locker.jpg' },
  ]

  return (
    <section id="facility" className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="section-title">시설 소개</h2>
        <div className="grid md:grid-cols-4 gap-6 mt-10">
          {facilities.map((f, i) => (
            <div key={i} className="bg-white rounded-lg shadow hover:shadow-md transition">
              <img
                src={`${prefix}${f.image}`}
                alt={f.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-orangym">{f.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}