//DON'T FORGET TO ADD THIS INSIDE THE HEADER OF INDEX.HTML!!!:
//<script src="https://js.stripe.com/v3/"></script>

import React from 'react';
import {CardElement, 
        CardNumberElement, 
        CardExpiryElement,
        CardCVCElement,
        PostalCodeElement,
        PaymentRequestButtonElement,
        StripeProvider,
        Elements,
        injectStripe,} from 'react-stripe-elements';
import './payment.css';

const handleBlur = () => {
  console.log('[blur]');
};
const handleChange = change => {
  console.log('[change]', change);
};
const handleClick = () => {
  console.log('[click]');
};
const handleFocus = () => {
  console.log('[focus]');
};
const handleReady = () => {
  console.log('[ready]');
};

const createOptions = (fontSize) => {
  return {
    style: {
      base: {
        fontSize,
        color: '#424770',
        letterSpacing: '0.025em',
        fontFamily: 'Source Code Pro, Menlo, monospace',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };
};

class _CardForm extends React.Component {
  handleSubmit = ev => {
    ev.preventDefault();
    this.props.stripe.createToken().then(payload => console.log(payload));
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Card details
          <CardElement
            className="card-field"
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onReady={handleReady}
            {...createOptions(this.props.fontSize)}
          />
        </label>
        <div className="pay-button-div"><button>Contribute</button></div>
      </form>
    );
  }
}
const CardForm = injectStripe(_CardForm);

export class Payment extends React.Component {
  constructor() {
    super();
    this.state = {
      elementFontSize: window.innerWidth < 450 ? '14px' : '18px',
    };
    window.addEventListener('resize', () => {
      if (window.innerWidth < 450 && this.state.elementFontSize !== '14px') {
        this.setState({elementFontSize: '14px'});
      } else if (
        window.innerWidth >= 450 &&
        this.state.elementFontSize !== '18px'
      ) {
        this.setState({elementFontSize: '18px'});
      }
    });
  }

  render() {
    const {elementFontSize} = this.state;
    return (
      <div className="Checkout">
        <h2>Ready to make your contribution?</h2>
        <Elements>
          <CardForm fontSize={elementFontSize} />
        </Elements>
      </div>
    );
  }
}
// const App = () => {
//   return (
//     <StripeProvider apiKey="pk_test_6pRNASCoBOKtIshFeQd4XMUh">
//       <Checkout />
//     </StripeProvider>
//   );
// };
// ReactDOM.render(<App />, document.querySelector('.App'));

//OLD CODE:
// import React from 'react';
// import {connect} from 'react-redux';

// export class Payment extends React.Component {

//     render() {
//         return (
//             <div>
//                 Hello
//                 <form action="your-server-side-code" method="POST">
//                   <script
//                     src="https://checkout.stripe.com/checkout.js" className="stripe-button"
//                     data-key="pk_test_6pRNASCoBOKtIshFeQd4XMUh"
//                     data-amount="999"
//                     data-name="Stripe.com"
//                     data-description="Example charge"
//                     data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
//                     data-locale="auto"
//                     data-zip-code="true">
//                   </script>
//                   <button type="submit">Pay with card</button>
//                 </form>
//             </div>
//         );
//     }
// }

// const mapStateToProps = state => ({

// });

// export default connect(mapStateToProps)(Payment);