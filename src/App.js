import React, {useState} from 'react';
import data from './data';
function App() {
    const [people, setPeople] = useState(data);
    return (
       <main>
        <section className='container'>
<h3>birthdays today.</h3>
<button>Clear All</button>
        </section>
       </main>
    );
}

export default App;