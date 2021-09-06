import React  from 'react'
import { Link, Route,Switch,withRouter } from 'react-router-dom'
import Home from '../routeComponent/Home'
import Register from '../routeComponent/Register'
import Login from '../routeComponent/Login'
import Mynotes from '../routeComponent/Mynotes/Mynotes'
import Account from '../routeComponent/Account'

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PageNotFound from './PageNotFound'

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
    const localVar=localStorage.getItem('token') || false

    const {handleAuth}=props

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
            <Grid item xs={12}>
                 <Paper className={classes.paper}>        
                    <div >
                        <Link to="/" style={{textDecoration:'none',color:'black'}}>Home</Link>
                        {localVar ?
                            <>
                            <Link to="/account" style={{margin:'20px',textDecoration:'none',color:'black'}}>Account</Link>
                            <Link to="/mynotes" style={{margin:'20px',textDecoration:'none',color:'black'}}>My notes</Link>
                            <Link to="#" style={{textDecoration:'none',color:'black'}} onClick={()=>{
                                alert("sucessfully logged out")
                                localStorage.removeItem('token')   
                                props.history.push('/')
                                handleAuth()
                            }}>Logout</Link>
                            </>
                            :
                            <>
                                <Link to="/register" style={{margin:'20px',textDecoration:'none',color:'black'}}>register</Link>
                                <Link to='/login' style={{textDecoration:'none',color:'black'}}>Login</Link>
                            </>
                        }
                    </div>
            </Paper>
            </Grid>
            </Grid>
            <Switch>

                    <Route path="/" component={Home} exact/>
                {localVar
                   ?
                       <Switch>
                           <Route  exact path="/account" component={Account}/>
                            <Route path="/mynotes" component={Mynotes}/>
                            <Route component={PageNotFound}/>
                       </Switch>
                    :
                    <Switch>
                        <Route path="/register" component={Register} />
                        <Route path="/login" render={(props)=><Login {...props} handleAuth={handleAuth}/>} />
                        <Route component={PageNotFound}/>
                    </Switch>
                   }
            </Switch>
        </div>
    )
    
}

export default withRouter(NavBar) 
