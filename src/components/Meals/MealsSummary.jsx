import classes from './MealsSummary.module.css'
const MealsSummary = () =>{
    return(
        <section className={classes.summary}>
            <h2>Delicious Food, Delivered To You</h2>
            <p> Choose your favorite meals from broad selection of available meals
                 and enjoy a delicious lunch or a dinner at home </p>
                 <p>
                     All our meals are cooked with High-Quality ingredients, just in time
                      and of course by our experienced chefs! 
                 </p>
        </section>
    );
};

export default MealsSummary;