import { useNavigate } from "react-router"

const CheckoutModal = () => {
    const nav = useNavigate()
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
        <div className="bg-white w-full max-w-md mx-4 p-8 flex flex-col items-center gap-5 shadow-xl">
          
     
          <div className="h-16 w-16 rounded-full bg-blue-50 flex items-center justify-center">
            <span className="text-3xl">🎓</span>
          </div>
  
        
          <div className="text-center flex flex-col gap-2">
            <p className="text-xl font-semibold text-blue-950">Study Project</p>
            <p className="text-gray-500 font-light text-sm leading-relaxed">
              This is a portfolio project built for learning purposes. 
              No real orders are processed and no payment information is collected.
            </p>
          </div>
  
          
          <div className="w-full border-t border-gray-100" />
  
         
          <button
            onClick={() => nav(-1)}
            className="h-11 w-full bg-blue-950 text-white font-semibold hover:bg-blue-900 active:translate-y-px transition-all cursor-pointer text-sm"
          >
            Go back
          </button>
        </div>
      </div>
    )
  }
  
  export default CheckoutModal