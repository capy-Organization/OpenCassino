import GameCard from "../components/GameCard";


export const Slots = () => {
    const gameCards = Array.from({length:20}, (_,index)=> <GameCard key={index}/>)
    return (
        <div className="container-xl h-vdh bg-red-500">
            <div className="pt-10 flex justify-center align-center">
                <div style={{
                            height:"800px",
                            backgroundColor: '#f59e0b', 
                            borderRadius: '0.5rem',
                            boxShadow: 'inset 0px -29px 43px 10px rgba(239, 68, 68, 0.5)' 
                        }} >
                    <div className="pl-1  pt-5 grid grid-cols-4 gap-4">
                        {gameCards}
                    </div>           
                </div>
            </div>
        </div>
    );
}
