import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



class EditClient extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false, firstname:'', lastname:'', address:'', postcode:'', city:'', email:'', phone:''};
    }

    handleClickOpen = () => {
        this.setState({ open: true, 

        // Add here the props from the client rows

        firstname: this.props.client.firstname,
        lastname: this.props.client.lastname,
        address: this.props.client.address,
        postcode: this.props.client.postcode,
        city: this.props.client.city,
        email: this.props.client.email,
        phone: this.props.client.phone,
        });

        };
        
        handleClose = () => {
        this.setState({ open: false });
        };
        
        handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value });
        };

        editClient = () => {
            const updatedClient = {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                city: this.state.city,
                email: this.state.email,
                phone: this.state.phone
            }
             this.props.updateClient(this.props.link, updatedClient);
            this.handleClose();
        
        }
        
        // 
    render() {
        return (
            <div>
               <Dialog
         
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                    >
                    <DialogTitle id="form-dialog-title">Edit client</DialogTitle>
                    <DialogContent>
                        <TextField onChange={this.handleChange} autoFocus margin="dense" name="firstname" value={this.state.firstname} label="Firstname"  fullWidth/>
                        <TextField onChange={this.handleChange} margin="dense" name="lastname" value={this.state.lastname} label="Lastname"  fullWidth/>
                        <TextField onChange={this.handleChange} margin="dense" name="address" value={this.state.address} label="Address"  fullWidth/>
                        <TextField onChange={this.handleChange} margin="dense" name="postcode" value={this.state.postcode} label="Postcode"  fullWidth/>
                        <TextField onChange={this.handleChange} margin="dense" name="city" value={this.state.city} label="City"  fullWidth/>
                        <TextField onChange={this.handleChange} margin="dense" name="email" value={this.state.email} label="Email"  fullWidth/>
                        <TextField onChange={this.handleChange} margin="dense" name="phone" value={this.state.phone} label="Phone"  fullWidth/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                        Cancel
                        </Button>
                        <Button onClick={this.editClient} color="primary">
                        Edit
                        </Button>
                    </DialogActions>
                    </Dialog>
                        <Button color="primary" onClick={this.handleClickOpen}>EDIT</Button>
            
            </div>
        );
    }
}
export default EditClient;