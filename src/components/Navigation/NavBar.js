import React  from 'react'
import { Link, Route,withRouter } from 'react-router-dom'
import Home from '../routeComponent/Home'
import Register from '../routeComponent/Register'
import Login from '../routeComponent/Login'
import Mynotes from '../routeComponent/Mynotes/Mynotes'
import Account from '../routeComponent/Account'


import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "right",
      color: theme.palette.text.secondary
    }
}));

const NavBar = (props) => {
    const classes = useStyles();
  
    const {isLoggedIn,handleAuth}=props

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
            <Grid item xs={12}>
                 <Paper className={classes.paper}>        
                    <div >
                        <Link to="/">Home</Link>
                        {isLoggedIn ?
                            <>
                            <Link to="/account" style={{margin:'20px'}}>Account</Link>
                            <Link to="/mynotes" style={{margin:'20px'}}>My notes</Link>
                            <Link to="#" onClick={()=>{
                                alert("sucessfully logged out")
                                localStorage.removeItem('token')   
                                props.history.push('/')
                                handleAuth()
                            }}>Logout</Link>
                            </>
                            :
                            <>
                                <Link to="/register" style={{margin:'20px'}}>register</Link>
                                <Link to='/login'>Login</Link>
                            </>
                        }
                    </div>
            </Paper>
            </Grid>
            </Grid>
            <Route path="/" component={Home} exact/>
            <Route path="/register" component={Register} />
            <Route path="/login" render={(props)=><Login {...props} handleAuth={handleAuth}/>} />
            <Route path="/account" component={Account}/>
            <Route path="/mynotes" component={Mynotes}/>

        </div>
    )
    
}

export default withRouter(NavBar) 
