import styles from './app.module.css';
import { data } from '../../utils/data';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

function App() {
    return (
        <>
            <AppHeader/>
            <main className={styles.main}>
                <div className={styles.inner}>
                    <BurgerIngredients data={data}/>
                    <BurgerConstructor data={data}/>
                </div>
            </main>
        </>
    );
}

export default App;