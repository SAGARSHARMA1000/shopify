// import React, { useState } from "react";
// import { useApp } from "../../context/AppContext";
// import { PlusCircle, Edit, Trash2, X } from "lucide-react";

// export default function AdminProductsPage() {
//   const { products, deleteProduct, saveProduct } = useApp();

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingProduct, setEditingProduct] = useState(null);

//   const initialForm = {
//     title: "",
//     price: "",
//     discount: 0,
//     category: "Electronics",
//     description: "",
//     image: ""
//   };

//   const [formData, setFormData] = useState(initialForm);

//   const openModal = (product = null) => {
//     if (product) {
//       setEditingProduct(product);
//       setFormData(product);
//     } else {
//       setEditingProduct(null);
//       setFormData(initialForm);
//     }
//     setIsModalOpen(true);
//   };

//   const handleSave = (e) => {
//     e.preventDefault();
//     saveProduct({
//       ...formData,
//       price: Number(formData.price),
//       discount: Number(formData.discount)
//     });
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="animate-fade-in">

//       <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-10">
//         <div>
//           <h2 className="text-3xl font-black">Product Inventory</h2>
//           <p className="text-gray-500">Manage your store's items</p>
//         </div>

//         <button
//           onClick={() => openModal()}
//           className="bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-indigo-700 transition-all flex items-center gap-2 shadow-xl"
//         >
//           <PlusCircle className="w-5 h-5" /> Add New Product
//         </button>
//       </div>

//       {/* Table */}
//       <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-x-auto">
//         <table className="w-full text-left min-w-175">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500">Product</th>
//               <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500">Category</th>
//               <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500">Price</th>
//               <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500">Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {products.map(product => (
//               <tr key={product.id} className="hover:bg-gray-50">
//                 <td className="px-6 py-4 font-bold">{product.title}</td>
//                 <td className="px-6 py-4">{product.category}</td>
//                 <td className="px-6 py-4 font-black text-indigo-600">
//                   ${product.price}
//                 </td>
//                 <td className="px-6 py-4 flex gap-2">
//                   <button onClick={() => openModal(product)}>
//                     <Edit className="text-indigo-500" />
//                   </button>
//                   <button onClick={() => deleteProduct(product.id)}>
//                     <Trash2 className="text-red-500" />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
//           <div className="bg-white w-full max-w-xl rounded-3xl p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
//             <div className="flex justify-between mb-6">
//               <h3 className="text-2xl font-black">
//                 {editingProduct ? "Edit Product" : "Add Product"}
//               </h3>
//               <button onClick={() => setIsModalOpen(false)}>
//                 <X />
//               </button>
//             </div>

//             <form onSubmit={handleSave} className="space-y-4">
//               <input
//                 required
//                 placeholder="Title"
//                 className="w-full p-3 bg-gray-50 rounded-xl"
//                 value={formData.title}
//                 onChange={e => setFormData({ ...formData, title: e.target.value })}
//               />

//               <input
//                 required
//                 type="number"
//                 placeholder="Price"
//                 className="w-full p-3 bg-gray-50 rounded-xl"
//                 value={formData.price}
//                 onChange={e => setFormData({ ...formData, price: e.target.value })}
//               />

//               <textarea
//                 required
//                 rows="3"
//                 placeholder="Description"
//                 className="w-full p-3 bg-gray-50 rounded-xl"
//                 value={formData.description}
//                 onChange={e => setFormData({ ...formData, description: e.target.value })}
//               />

//               <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold">
//                 Save Product
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// import React, { useState } from "react";
// import { useApp } from "../../context/AppContext";
// import { PlusCircle, Edit, Trash2, X } from "lucide-react";

// export default function AdminProductsPage() {
//   const { products, deleteProduct, saveProduct } = useApp();

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingProduct, setEditingProduct] = useState(null);

//   const initialForm = {
//     title: "",
//     price: "",
//     discount: 0,
//     category: "Electronics",
//     description: "",
//     image: ""
//   };

//   const [formData, setFormData] = useState(initialForm);

//   const openModal = (product = null) => {
//     if (product) {
//       setEditingProduct(product);
//       setFormData(product);
//     } else {
//       setEditingProduct(null);
//       setFormData(initialForm);
//     }
//     setIsModalOpen(true);
//   };

//   const handleSave = (e) => {
//     e.preventDefault();
//     saveProduct({
//       ...formData,
//       price: Number(formData.price),
//       discount: Number(formData.discount)
//     });
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="animate-fade-in text-white">

//       {/* Header */}
//       <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-12">
//         <div>
//           <h2 className="text-3xl md:text-4xl font-black text-yellow-400">
//             Product Inventory
//           </h2>
//           <p className="text-gray-400 mt-2">
//             Manage your store's products and pricing
//           </p>
//         </div>

//         <button
//           onClick={() => openModal()}
//           className="bg-linear-to-r from-yellow-500 to-yellow-400 text-black px-6 py-3 rounded-2xl font-bold hover:scale-105 transition-all flex items-center gap-2 shadow-lg shadow-yellow-500/30"
//         >
//           <PlusCircle className="w-5 h-5" /> Add New Product
//         </button>
//       </div>

//       {/* Table */}
//       <div className="bg-gray-900 border border-gray-800 rounded-3xl shadow-xl overflow-x-auto">

//         <table className="w-full text-left min-w-175">

//           <thead className="bg-black border-b border-gray-800">
//             <tr>
//               <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">
//                 Product
//               </th>
//               <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">
//                 Category
//               </th>
//               <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">
//                 Price
//               </th>
//               <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">
//                 Actions
//               </th>
//             </tr>
//           </thead>

//           <tbody className="divide-y divide-gray-800">
//             {products.map((product) => (
//               <tr
//                 key={product.id}
//                 className="hover:bg-gray-800/60 transition"
//               >
//                 <td className="px-6 py-4 font-bold text-white">
//                   {product.title}
//                 </td>

//                 <td className="px-6 py-4 text-gray-300">
//                   {product.category}
//                 </td>

//                 <td className="px-6 py-4 font-black text-yellow-400">
//                   ${product.price}
//                 </td>

//                 <td className="px-6 py-4 flex gap-3">
//                   <button
//                     onClick={() => openModal(product)}
//                     className="text-yellow-400 hover:text-yellow-300 transition"
//                   >
//                     <Edit />
//                   </button>

//                   <button
//                     onClick={() => deleteProduct(product.id)}
//                     className="text-red-500 hover:text-red-400 transition"
//                   >
//                     <Trash2 />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>

//         </table>
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">

//           <div className="bg-gray-900 border border-gray-800 w-full max-w-xl rounded-3xl p-8 shadow-2xl max-h-[90vh] overflow-y-auto">

//             <div className="flex justify-between items-center mb-8">
//               <h3 className="text-2xl font-black text-yellow-400">
//                 {editingProduct ? "Edit Product" : "Add Product"}
//               </h3>
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="text-gray-400 hover:text-yellow-400 transition"
//               >
//                 <X />
//               </button>
//             </div>

//             <form onSubmit={handleSave} className="space-y-6">

//               <input
//                 required
//                 placeholder="Title"
//                 className="w-full p-4 bg-black text-white border border-gray-700 rounded-xl focus:border-yellow-500 focus:outline-none transition"
//                 value={formData.title}
//                 onChange={(e) =>
//                   setFormData({ ...formData, title: e.target.value })
//                 }
//               />

//               <input
//                 required
//                 type="number"
//                 placeholder="Price"
//                 className="w-full p-4 bg-black text-white border border-gray-700 rounded-xl focus:border-yellow-500 focus:outline-none transition"
//                 value={formData.price}
//                 onChange={(e) =>
//                   setFormData({ ...formData, price: e.target.value })
//                 }
//               />

//               <textarea
//                 required
//                 rows="3"
//                 placeholder="Description"
//                 className="w-full p-4 bg-black text-white border border-gray-700 rounded-xl focus:border-yellow-500 focus:outline-none transition"
//                 value={formData.description}
//                 onChange={(e) =>
//                   setFormData({ ...formData, description: e.target.value })
//                 }
//               />

//               <button className="w-full bg-linear-to-r from-yellow-500 to-yellow-400 text-black py-4 rounded-xl font-bold hover:scale-[1.02] transition shadow-lg shadow-yellow-500/30">
//                 Save Product
//               </button>

//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState } from "react";
import { useApp } from "../../context/AppContext";
import { PlusCircle, Edit, Trash2, X } from "lucide-react";

export default function AdminProductsPage() {

  const { products, deleteProduct, saveProduct ,setCurrentPage,currentPage,setProducts,showToast} = useApp();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  
  const [imageFiles, setImageFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [videoFile, setVideoFile] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const initialForm = {
    title: "",
    price: "",
    discount: "",
    category: "",
    description: "",
    image: "",
    hotdeal:false,
    isCombo: false,
    comboProducts: []
  };

  const [formData, setFormData] = useState(initialForm);

  // const openModal = (product = null) => {

  //   if (product) {
  //     setEditingProduct(product);
  //      setFormData({
  //     ...product,
  //     comboProducts: product.comboProducts || [],
  //   });
  //   } else {
  //     setEditingProduct(null);
  //     setFormData(initialForm);
  //   }
  //   setImageFiles([]); // reset image
  //   setIsModalOpen(true);
  // };
     const openModal = (product = null) => {

  // 🔥 CLEAN OLD PREVIEWS (important)
  if (imagePreviews?.length) {
    imagePreviews.forEach((url) => {
      if (url.startsWith("blob:")) URL.revokeObjectURL(url);
    });
  }

  if (videoPreview?.startsWith("blob:")) {
    URL.revokeObjectURL(videoPreview);
  }

  if (product) {
    setEditingProduct(product);

    setFormData({
      ...product,
      comboProducts: product.comboProducts || [],
    });

    // ✅ SHOW EXISTING IMAGES
    if (product.images && product.images.length > 0) {
      setImagePreviews(product.images); // already URLs
    } else if (product.image) {
      // fallback for old products
      setImagePreviews([product.image]);
    } else {
      setImagePreviews([]);
    }

    // ✅ SHOW EXISTING VIDEO
    if (product.video) {
      setVideoPreview(product.video);
    } else {
      setVideoPreview(null);
    }

  } else {
    setEditingProduct(null);
    setFormData(initialForm);

    // ✅ RESET EVERYTHING
    setImagePreviews([]);
    setVideoPreview(null);
  }

  // ✅ always reset files (important)
  setImageFiles([]);
  setVideoFile(null);

  setIsModalOpen(true);
};
  const handleSave = async (e) => {
    e.preventDefault();
     try{
  setIsLoading(true);   
  const form = new FormData();

  form.append("title", formData.title);
  form.append("price", formData.price);
  form.append("discount", formData.discount);
  form.append("category", formData.category);
  form.append("description", formData.description);
  form.append("hotdeal", formData.hotdeal);
  form.append("isCombo", formData.isCombo);

  form.append(
    "comboProducts",
    JSON.stringify(formData.comboProducts)
  );

    imageFiles.forEach((file) => {
  form.append("images", file);
});

if (videoFile) {
  form.append("video", videoFile);
}

  await saveProduct(form,editingProduct?._id);
  showToast(editingProduct ? "Product updated ✅" : "Product added successfully✅");
  setIsModalOpen(false);
  setEditingProduct(null);

  } catch (err) {
    console.log(err);
    showToast("Error saving product ❌");
  } finally {
    setIsLoading(false);
  }

  };

const handleDelete = async (id) => {
  const confirmDelete = window.confirm("Delete this product?");
  if (!confirmDelete) return;

  await deleteProduct(id);
};

  return (
    <div className="animate-fade-in text-white">

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-12">

        <div>
          <h2 className="text-3xl md:text-4xl font-black text-yellow-400">
            Product Inventory
          </h2>

          <p className="text-gray-400 mt-2">
            Manage your store's products and pricing
          </p>
        </div>
          <button
          onClick={() => openModal()}
          className="bg-linear-to-r from-yellow-500 to-yellow-400 text-black px-6 py-3 rounded-2xl font-bold hover:scale-105 transition-all flex items-center gap-2 shadow-lg shadow-yellow-500/30"
        >
          <PlusCircle className="w-5 h-5" />
          Add New Product
        </button>
         <div className="bg-gray-900 border border-yellow-500/20 p-1 rounded-xl flex flex-wrap gap-1">
          <button 
          onClick={() => setCurrentPage("admin-dashboard")}
         
             className={`px-4 py-2 rounded-lg font-bold transition ${
      currentPage === "admin-dashboard"
        ? "bg-yellow-500 text-black shadow-md"
        : "text-gray-400 hover:text-yellow-400"
    }`}
          >
            Overview
          </button>

          <button
            onClick={() => setCurrentPage("admin-products")}
       
              className={`px-4 py-2 rounded-lg font-bold transition ${
      currentPage === "admin-products"
        ? "bg-yellow-500 text-black shadow-md"
        : "text-gray-400 hover:text-yellow-400"
    }`}
          >
            Inventory
          </button>

          <button
            onClick={() => setCurrentPage("admin-orders")}
            
               className={`px-4 py-2 rounded-lg font-bold transition ${
      currentPage === "admin-orders"
        ? "bg-yellow-500 text-black shadow-md"
        : "text-gray-400 hover:text-yellow-400"
    }`}
          >
            Orders
          </button>

            <button
            onClick={() => setCurrentPage("edit-banner")}
          
               className={`px-4 py-2 rounded-lg font-bold transition ${
      currentPage === "edit-banner"
        ? "bg-yellow-500 text-black shadow-md"
        : "text-gray-400 hover:text-yellow-400"
    }`}
          >
            Edit Banner
          </button>
        </div>

      

      </div>


      <div className="bg-gray-900 border border-gray-800 rounded-3xl shadow-xl overflow-x-auto">

        <table className="w-full text-left min-w-175">

          <thead className="bg-black border-b border-gray-800">

            <tr>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">
                Product
              </th>

              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">
                Category
              </th>

              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">
                Price
              </th>

              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">
                Actions
              </th>
            </tr>

          </thead>

          <tbody className="divide-y divide-gray-800">

            {products.map((product) => (

              <tr
                key={product._id}
                className="hover:bg-gray-800/60 transition"
              >

                <td className="px-6 py-4 font-bold text-white">
                  {product.title}
                </td>

                <td className="px-6 py-4 text-gray-300">
                  {product.category}
                </td>

                <td className="px-6 py-4 font-black text-yellow-400">
                  ₹{product.price}
                </td>
                <td className="px-6 py-4 flex items-center gap-4">

<img
  src={product.image[0]}
  alt=""
  className="w-12 h-12 rounded-lg object-cover"
/>

<span className="font-bold text-white">
{product.title}
</span>

</td>

                <td className="px-6 py-4 flex gap-3">

                  <button
                    onClick={() => openModal(product)}
                    className="text-yellow-400 hover:text-yellow-300 transition"
                  >
                    <Edit />
                  </button>

                  <button
                    onClick={() => handleDelete(product._id)}
                    className="text-red-500 hover:text-red-400 transition"
                  >
                    <Trash2 />
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>


      {isModalOpen && (

        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">

          <div className="bg-gray-900 border border-gray-800 w-full max-w-xl rounded-3xl p-8 shadow-2xl max-h-[90vh] overflow-y-auto">

            <div className="flex justify-between items-center mb-8">

              <h3 className="text-2xl font-black text-yellow-400">
                {editingProduct ? "Edit Product" : "Add Product"}
              </h3>

              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-yellow-400 transition"
              >
                <X />
              </button>

            </div>


            <form onSubmit={handleSave} className="space-y-6">

              <input
                required
                placeholder="Title"
                className="w-full p-4 bg-black text-white border border-gray-700 rounded-xl"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />

              <input
                required
                type="number"
                placeholder="Price"
                className="w-full p-4 bg-black text-white border border-gray-700 rounded-xl"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
              />

              <input
                type="number"
                placeholder="Discount%"
                className="w-full p-4 bg-black text-white border border-gray-700 rounded-xl"
                value={formData.discount}
                onChange={(e) =>
                  setFormData({ ...formData, discount: e.target.value })
                }
              />

              <input
                required
                placeholder="Category"
                className="w-full p-4 bg-black text-white border border-gray-700 rounded-xl"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              />
              <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.isCombo}
                onChange={(e) =>
                setFormData({ ...formData, isCombo: e.target.checked })
    }
          />
                Combo Product
</label>
               <label className="flex items-center gap-2">
  <input
    type="checkbox"
    checked={formData.hotdeal}
    onChange={(e) =>
      setFormData({ ...formData, hotdeal: e.target.checked })
    }
  />
  Hot Deal
</label>
              {/* <input
                placeholder="Image URL"
                className="w-full p-4 bg-black text-white border border-gray-700 rounded-xl"
                value={formData.image}
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
              /> */}
              <div>

{/* <input
  type="file"
  multiple
  accept="image/*"
  className="w-full p-3 bg-black text-white border border-gray-700 rounded-xl"
  onChange={(e) => {

    const files = Array.from(e.target.files);
    setImageFiles(files);
    // generate previews
    const previews = files.map((file) =>
      URL.createObjectURL(file)
    );

    setImagePreviews(previews);

  }}
/> */}
 
{/* {imagePreviews.length > 0 && (
  <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 gap-3">
    {imagePreviews.map((src, index) => (
      <div key={index} className="relative group">
        <img
          src={src}
          alt="preview"
          className="w-full h-24 object-cover rounded-lg border border-gray-700"
        />

        {/* remove button */}
        {/* <button
          type="button"
          onClick={() => {
            const newFiles = imageFiles.filter((_, i) => i !== index);
            const newPreviews = imagePreviews.filter((_, i) => i !== index);

            setImageFiles(newFiles);
            setImagePreviews(newPreviews);
          }}
          className="absolute top-1 right-1 bg-black/70 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition"
        >
          ✕
        </button>
      </div>
    ))}
  </div>
)} */}
    {/* <input
  type="file"
  accept="video/*"
  onChange={(e) => {
  const file = e.target.files[0];
    setVideoFile(file);

    if (file) {
      setVideoPreview(URL.createObjectURL(file));
    }
  }} 
/>
{videoPreview && (
  <div className="mt-4">
    <video
      src={videoPreview}
      controls
      className="w-48 rounded-lg border border-gray-700"
    />
  </div>
)} */} 
           {/* ================= MEDIA UPLOAD ================= */}

<div className="space-y-4">

  {/* TITLE */}
  <p className="text-sm font-semibold text-yellow-400">
    Upload Images (Max 5)
  </p>

  {/* IMAGE INPUT */}
  <input
    type="file"
    multiple
    accept="image/*"
    className="w-full p-3 bg-black text-white border border-gray-700 rounded-xl"
    onChange={(e) => {
      const newFiles = Array.from(e.target.files);

       setImageFiles((prev) => [...prev, ...newFiles]);
      const newPreviews = newFiles.map((file) =>
        URL.createObjectURL(file)
      );
    setImagePreviews((prev) => [...prev, ...newPreviews]);
     e.target.value = null;
     // setImagePreviews(previews);
    }}
  />

  {/* IMAGE PREVIEW */}
  {imagePreviews.length > 0 && (
    <div className="flex gap-3 overflow-x-auto pb-2">

      {imagePreviews.map((src, index) => (
        <div
          key={index}
          className="relative min-w-20 sm:min-w-25 group"
        >
          <img
            src={src}
            alt="preview"
            className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg border border-gray-700"
          />

          {/* REMOVE */}
          <button
            type="button"
            onClick={() => {
              const newFiles = imageFiles.filter((_, i) => i !== index);
              const newPreviews = imagePreviews.filter((_, i) => i !== index);

              setImageFiles(newFiles);
              setImagePreviews(newPreviews);
            }}
            className="absolute top-1 right-1 bg-black/70 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  )}

  {/* ================= VIDEO ================= */}

  <p className="text-sm font-semibold text-yellow-400 mt-4">
    Upload Product Video
  </p>

  <input
    type="file"
    accept="video/*"
    className="w-full p-3 bg-black text-white border border-gray-700 rounded-xl"
    onChange={(e) => {
      const file = e.target.files[0];
      setVideoFile(file);

      if (file) {
        setVideoPreview(URL.createObjectURL(file));
      }
    }}
  />

  {/* VIDEO PREVIEW */}
  {videoPreview && (
    <div className="relative w-full max-w-xs mt-3 group">

      <video
        src={videoPreview}
        controls
        className="w-full rounded-lg border border-gray-700"
      />

      {/* REMOVE VIDEO */}
      <button
        type="button"
        onClick={() => {
          setVideoFile(null);
          setVideoPreview(null);
        }}
        className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100"
      >
        Remove
      </button>
    </div>
  )}

</div>
     
{formData.isCombo && (
  <div className="mt-4 border p-3 rounded">
    <p className="font-semibold mb-2">Select Products for Combo</p>

    {products.map((p) => (
      <label key={p._id} className="flex items-center gap-2 mb-1">
        <input
          type="checkbox"
          checked={formData.comboProducts.includes(p._id)}
          onChange={(e) => {
            if (e.target.checked) {
              setFormData({
                ...formData,
                comboProducts: [...formData.comboProducts, p._id]
              });
            } else {
              setFormData({
                ...formData,
                comboProducts: formData.comboProducts.filter(
                  (id) => id !== p._id
                )
              });
            }
          }}
        />
        {p.title}
      </label>
    ))}
  </div>
)}

</div>

              <textarea
                required
                rows="3"
                placeholder="Description"
                className="w-full p-4 bg-black text-white border border-gray-700 rounded-xl"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />

              <button className="w-full bg-linear-to-r from-yellow-500 to-yellow-400 text-black py-4 rounded-xl font-bold hover:scale-[1.02] transition">
                Add Product
              </button>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}