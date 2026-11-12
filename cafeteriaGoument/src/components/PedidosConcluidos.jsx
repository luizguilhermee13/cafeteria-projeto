import { MdAccessTime, MdRefresh } from "react-icons/md";

function PedidosConcluidos() {
  const pedidosFicticios = [
    {
      id: "1001",
      data: "05 de junho de 2026 às 14:30",
      status: "Entregue",
      statusColor: "bg-emerald-100 text-emerald-800",
      itens: [
        {
          id: 1,
          nome: "Cappuccino Clássico",
          quantidade: 2,
          precoUnitario: 12.9,
          precoTotalItem: 25.8,
          imagem: "https://images.unsplash.com/photo-1497636577773-f1231844b336?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
        },
        {
          id: 5,
          nome: "Croissant Francês",
          quantidade: 1,
          precoUnitario: 9.9,
          precoTotalItem: 9.9,
          imagem: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: 7,
          nome: "Torta de Amêndoas",
          quantidade: 1,
          precoUnitario: 15.9,
          precoTotalItem: 15.9,
          imagem: "https://images.unsplash.com/photo-1519869325930-281384150729?w=500&auto=format&fit=crop&q=60",
        },
      ],
      totalGeral: 51.7,
    },
    {
      id: "1002",
      data: "02 de junho de 2026 às 09:15",
      status: "Entregue",
      statusColor: "bg-emerald-100 text-emerald-800",
      itens: [
        {
          id: 2,
          nome: "Latte Macchiato",
          quantidade: 1,
          precoUnitario: 13.9,
          precoTotalItem: 13.9,
          imagem: "https://images.unsplash.com/photo-1593443320739-77f74939d0da?w=500&auto=format&fit=crop&q=60",
        },
        {
          id: 8,
          nome: "Bolo de Chocolate",
          quantidade: 1,
          precoUnitario: 14.9,
          precoTotalItem: 14.9,
          imagem: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop&q=60",
        },
      ],
      totalGeral: 28.8,
    },
  ];

  return (
    <div className="w-full max-w-3xl flex flex-col gap-6 font-serif">
      {pedidosFicticios.map((pedido) => (
        <div key={pedido.id} className="card-padrao">
          <div className="flex justify-between items-start border-b border-stone-100 pb-4 mb-4">
            <div>
              <h3 className="text-xl font-bold text-[#2c2c2c]">Pedido #{pedido.id}</h3>
              <div className="flex items-center gap-1.5 text-stone-500 text-sm mt-1 font-sans">
                <MdAccessTime size={16} />
                <span>{pedido.data}</span>
              </div>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-sans font-medium ${pedido.statusColor}`}>{pedido.status}</span>
          </div>

          <div className="flex flex-col gap-4 divide-y divide-stone-100">
            {pedido.itens.map((item, index) => (
              <div key={index} className={`flex items-center justify-between ${index !== 0 ? "pt-4" : ""}`}>
                <div className="flex items-center gap-4">
                  <img src={item.imagem} alt={item.nome} className="w-16 h-16 rounded-xl object-cover shadow-sm" />
                  <div>
                    <h4 className="font-sans font-semibold text-[#2d1f1a]">{item.nome}</h4>
                    <p className="text-sm text-stone-500 font-sans mt-0.5">
                      {item.quantidade}x R$ {item.precoUnitario.toFixed(2).replace(".", ",")}
                    </p>
                  </div>
                </div>
                <span className="font-sans font-medium text-[#2d1f1a]">R$ {item.precoTotalItem.toFixed(2).replace(".", ",")}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center border-t border-stone-100 mt-6 pt-4 text-lg font-semibold text-[#2c2c2c]">
            <span>Total</span>
            <span className="text-[#6b4423]">R$ {pedido.totalGeral.toFixed(2).replace(".", ",")}</span>
          </div>

          <button className="w-full mt-5 bg-stone-50 hover:bg-stone-100 border border-stone-200 text-stone-700 rounded-xl py-3 text-sm font-sans font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer active:scale-[0.99]">
            <MdRefresh size={18} />
            Pedir Novamente
          </button>
        </div>
      ))}
    </div>
  );
}

export default PedidosConcluidos;
