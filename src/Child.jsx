// import React from "react";

// function Child(props) {
//   return (
//     <div>
//       {/* <h2>Hello, {props.name}</h2> */}
//       <ul>
//         {props.products.map((product, index) => (
//           <li key={index}>
//             {product.name} - ₹{product.cost}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Child;
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Child(props) {
  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">Product List</h4>
        </div>
        <div className="card-body p-0">
          <table className="table table-striped mb-0">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Cost (₹)</th>
              </tr>
            </thead>
            <tbody>
              {props.products.map((product, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td>{product.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Child;
