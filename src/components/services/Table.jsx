
export default function Table() {
  return (
    <div className="overflow-x-auto p-4">
  <table className="min-w-full border-2 border-black border-collapse">
    <thead className="bg-gray-800 text-white">
      <tr>
        <th className="border border-black px-4 py-3 text-left">S.No.</th>
        <th className="border border-black px-4 py-3 text-left">Services</th>
        <th className="border border-black px-4 py-3 text-left">What We Are Offering?</th>
      </tr>
    </thead>
    <tbody className="bg-white">
      <tr>
        <td className="border border-black px-4 py-3">1</td>
        <td className="border border-black px-4 py-3 font-medium">Civil Construction</td>
        <td className="border border-black px-4 py-3">Reasonable Rates</td>
      </tr>
      <tr>
        <td className="border border-black px-4 py-3">2</td>
        <td className="border border-black px-4 py-3 font-medium">Interiors</td>
        <td className="border border-black px-4 py-3">Reasonable Rates</td>
      </tr>
      <tr>
        <td className="border border-black px-4 py-3">3</td>
        <td className="border border-black px-4 py-3 font-medium">Renovation</td>
        <td className="border border-black px-4 py-3">Reasonable Rates</td>
      </tr>
      <tr>
        <td className="border border-black px-4 py-3">5</td>
        <td className="border border-black px-4 py-3 font-medium">Architectural Layout</td>
        <td className="border border-black px-4 py-3 text-green-600 font-semibold">Complimentary</td>
      </tr>
      <tr>
        <td className="border border-black px-4 py-3">6</td>
        <td className="border border-black px-4 py-3 font-medium">3D Modelling</td>
        <td className="border border-black px-4 py-3 text-green-600 font-semibold">Complimentary</td>
      </tr>
      <tr>
        <td className="border border-black px-4 py-3">7</td>
        <td className="border border-black px-4 py-3 font-medium">Cost Estimation</td>
        <td className="border border-black px-4 py-3 text-green-600 font-semibold">Complimentary</td>
      </tr>
      <tr>
        <td className="border border-black px-4 py-3">8</td>
        <td className="border border-black px-4 py-3 font-medium">Structural Assistance</td>
        <td className="border border-black px-4 py-3 text-green-600 font-semibold">Complimentary</td>
      </tr>
      <tr>
        <td className="border border-black px-4 py-3">9</td>
        <td className="border border-black px-4 py-3 font-medium">Planning</td>
        <td className="border border-black px-4 py-3 text-green-600 font-semibold">Complimentary</td>
      </tr>
      <tr>
        <td className="border border-black px-4 py-3">10</td>
        <td className="border border-black px-4 py-3 font-medium">Vaastu Consultation</td>
        <td className="border border-black px-4 py-3 text-green-600 font-semibold">Complimentary</td>
      </tr>
    </tbody>
  </table>
</div>
  )
}
