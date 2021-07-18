import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
import Card from '../Layout/UI/Card';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Pizza',
      description: 'Finest cheese with original italian taste',
      price: 1200.00,
    },
    {
      id: 'm2',
      name: 'Chicken Steak',
      description: 'Chicken fried steak, also known as country-fried steak or CFS!',
      price: 850.00,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 650.00,
    },
    {
      id: 'm4',
      name: 'lasagna',
      description: 'Healthy...the noodles, sauce and cheese...',
      price: 900.00,
    },
  ];

  const AvailableMeals = () =>{
      const MealsList = DUMMY_MEALS.map((meal) => (
      <MealItem 
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
      ));

    return(
        <section className={classes.meals}>
             <Card><ul>{MealsList}</ul></Card>  
        </section>
    );

  }
  export default AvailableMeals;