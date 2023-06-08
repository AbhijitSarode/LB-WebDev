import Card from './Card'
function Tours({tours, removeTour}) {
    return (
        <div className='container'>
            <div>
                <h2 className='title'> Plan Your Tours</h2>
            </div>

             {/* 
             1. This code displays a list of tours. 
             2. It uses the Card component to display each tour. 
             3. It also passes a removeTour prop to each Card component, so that the Card component can call the removeTour function if the user clicks the "Not Interested" button. 
             */}

            <div className='cards'>
                {
                    tours.map( (tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    } )
                }
            </div>
        </div>
    );
}

export default Tours;