import { Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Dashboard from 'pages/Dashboard';
import Equbs from 'pages/Equb';
import Feedbacks from 'pages/Feedbacks';
import Advertisements from 'pages/Advertisements';
import Footer from 'components/Footer';
import Settings from 'pages/Settings';
import EqubRegulations from 'pages/EqubRegulations';
// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
import DateRange from 'components/DateRange';
function App() {
    return (
        <>
            <Sidebar />
            <div className="md:ml-64">
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/equbs" component={Equbs} />
                    <Route exact path="/advertisements" component={Advertisements} />
                    <Route exact path="/feedbacks" component={Feedbacks} />
                    <Route exact path="/settings" component={Settings} />
                    <Route exact path = "/equbRegulations" component={EqubRegulations}/>
                    <Route exact path="/dateRange" component={DateRange} />
                    <Redirect from="*" to="/" />
                </Switch>
                <Footer />
            </div>
        </>
    );
}

export default App;
