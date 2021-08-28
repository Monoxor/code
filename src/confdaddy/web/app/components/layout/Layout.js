import Header from './Header';
import classes from './Layout.module.css';

function Layout(props) {
  return (
    <div>
      <main className={classes.main}>
        <Header />
        {props.children}
      </main>
    </div>
  );
}

export default Layout;