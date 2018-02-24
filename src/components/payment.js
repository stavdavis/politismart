import React from 'react';
import {connect} from 'react-redux';

export class Payment extends React.Component {

    render() {
        return (
            <div>
                Hello
                <form action="your-server-side-code" method="POST">
                  <script
                    src="https://checkout.stripe.com/checkout.js" className="stripe-button"
                    data-key="pk_test_6pRNASCoBOKtIshFeQd4XMUh"
                    data-amount="999"
                    data-name="Stripe.com"
                    data-description="Example charge"
                    data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
                    data-locale="auto"
                    data-zip-code="true">
                  </script>
                  <button type="submit">Pay with card</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(Payment);