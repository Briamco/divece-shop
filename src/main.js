const PRODUCTS = [
  {
    id: 1,
    thumbnail: 'resources/Gold.png',
    name: 'iPhone 12 Pro',
    color: 'Golden',
    quantity: 1,
    price: 999.00
  },
  {
    id: 1,
    thumbnail: 'resources/Apple-watch.png',
    name: 'Apple Watch',
    color: 'Blue',
    quantity: 1,
    price: 399.00
  },
  {
    id: 1,
    thumbnail: 'resources/iMac.png',
    name: 'iMac',
    color: 'Green',
    quantity: 1,
    price: 1199.00
  },
]

let total, subtotal, tax
const taxRate = 0.24

subtotal = PRODUCTS.reduce((acc, prod) => acc + prod.price, 0)
tax = subtotal * taxRate
total = subtotal + tax

const cartList = document.getElementById('cart')
  const subtotalText = document.getElementById('subTotal')
  const taxText = document.getElementById('tax')
  const totalText = document.getElementById('total')

  subtotalText.textContent = `$${subtotal.toFixed(2)}`
  taxText.textContent = `$${tax.toFixed(2)}`
  totalText.textContent = `$${total.toFixed(2)}`

  cartList.innerHTML = PRODUCTS.map(prod => `
    <li class="flex gap-5">
      <div class="bg-white aspect-square w-[100px] h-[100px] grid place-items-center rounded-[10px] border border-[#D2D5DA]">
        <img 
          src="${prod.thumbnail}" 
          alt="${prod.name} | ${prod.color}"
        >
      </div>
      <div class="w-full flex flex-col justify-between text-[#394150]">
        <div class="flex justify-between font-bold">
          <div>
            <h3 class="text-[#1D1D1F]">${prod.name}</h3>
            <p>${prod.color}</p>
          </div>
          <h4 class="text-[#1D1D1F]">$${prod.price.toFixed(2)}</h4>
        </div>
        <div class="flex justify-between">
          <p>x ${prod.quantity}</p>
          <button>X</button>
        </div>
      </div>
    </li>
    `).join('')

// document.addEventListener('DOMContentLoaded', () => {
//   const cartList = document.getElementById('cart')
//   const subtotalText = document.getElementById('subTotal')
//   const taxText = document.getElementById('tax')
//   const totalText = document.getElementById('total')

//   subtotalText.textContent = `$${subtotal.toFixed(2)}`
//   taxText.textContent = `$${tax.toFixed(2)}`
//   totalText.textContent = `$${total.toFixed(2)}`

//   cartList.innerHTML = PRODUCTS.map(prod => `
//     <li class="flex gap-5">
//       <div class="bg-white aspect-square w-[100px] h-[100px] grid place-items-center rounded-[10px] border border-[#D2D5DA]">
//         <img 
//           src="${prod.thumbnail}" 
//           alt="${prod.name} | ${prod.color}"
//         >
//       </div>
//       <div class="w-full flex flex-col justify-between text-[#394150]">
//         <div class="flex justify-between font-bold">
//           <div>
//             <h3 class="text-[#1D1D1F]">${prod.name}</h3>
//             <p>${prod.color}</p>
//           </div>
//           <h4 class="text-[#1D1D1F]">$${prod.price.toFixed(2)}</h4>
//         </div>
//         <div class="flex justify-between">
//           <p>x ${prod.quantity}</p>
//           <button>X</button>
//         </div>
//       </div>
//     </li>
//     `).join('')
// })

