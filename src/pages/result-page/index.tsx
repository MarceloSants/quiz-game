import { Check, X } from "lucide-react"
import { useLocation } from "react-router-dom"



const handleReview = () => {

}

const handleFinish = () => {
    
}

const correctAnswerBackground = "flex w-8 h-8 items-center justify-center text-white bg-greenGradient rounded-full"
const wrongAnswerBackground = "flex w-8 h-8 items-center justify-center text-white bg-redGradient rounded-full"

// const answers = [true,false,true,true,true,true,true,false,true,true,true,true,true,true,true,true,true,true,false,true]

function ResultPage() {

  const state = useLocation().state
  const answers : boolean[] = state.answers

  return (
    <div className='w-full flex flex-col items-center justify-start relative'>
      <div className='flex text-white bg-blueGradient w-full h-28 justify-center'>
        <div className='flex w-2/4 h-full items-center justify-between'>
            <p>You finished</p>
            <p>00:00</p>
        </div>
      </div>
      <div className='bg-white w-2/4 h-max p-8 rounded-sm absolute top-20 shadow-cardShadow'>
        <div className='flex flex-col items-center gap-6 lg:gap-6 xl:gap-8 2xl:gap-12'>
          <div className='flex flex-col gap-2 items-center px-4'>
                <h1 className="text-gray-500 text-2xl leading-7">
                    Results
                    </h1>
                <p className="text-gray-400">
                    Check your results bellow
                </p>
          </div>

          <div className="w-1/2 flex items-center justify-center gap-2 flex-wrap">
            {answers.map((answer, index) => {
              return(
                <button key={index} className={answer ? correctAnswerBackground : wrongAnswerBackground}>
                    {answer ? 
                      <Check />
                      :
                      <X />
                    }
                </button>
              )
            })}
            
          </div>
          
          <div className='w-full flex gap-4 items-center justify-between'>
            <button 
                onClick={() => {handleReview()}} 
                className='flex-1 py-2 border-2 rounded-lg border-blue-400 text-blue-400 font-medium'
            >
                Review
            </button>
            <button 
                onClick={() => {handleFinish()}} 
                className='flex-1 py-2 border-2 rounded-lg border-blue-400 text-white bg-blue-400 font-medium'
            >
                Finish
            </button>
                
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultPage
