import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EmailForm } from '../../utils/interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { config } from '../../config';
import { format } from '../../utils/formatter';
import { StoreService } from '../../plugins/datastore';
import { NgbModal, ModalDismissReasons, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SavePDFService } from '../../plugins/savepdf/savepdf.service';
import { PayementGatewayService } from '../../plugins/paymentGateway';
import { CommonService } from '../../theme/services';
import { TnCComponent } from './tn-c/tn-c.component';

@Component({
  selector: 'com-recharge-confirmation',
  templateUrl: './recharge-confirmation.component.html',
  styleUrls: ['./recharge-confirmation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RechargeConfirmationComponent implements OnInit {
  // @ViewChild(TnCComponent) readme: TnCComponent;
  modalReference: NgbModalRef = null;
  mobile_screen: any = false;
  public ASSETS_PATH: string = config.ASSETS;
  emailForm: FormGroup;
  payForm: FormGroup;
  closeResult: string;
  paygateURL: any;
  header_text = 'Confirm your recharge for ';
  public memberMSISDN = 0;
  public bundleID = '';
  public total = 0;
  public Total_Value = '0.00';
  public vat = '0.00';
  public VAT_Value = '(VAT incl. R' + this.vat + ' )';
  public Individual_Items = [
    // {Individual_ItemName: '1GB data (valid for 30 days) for 076 885 6789', Individual_Value: '149.00'},
    // {Individual_ItemName: 'Airtime for' + this.memberMSISDN, Individual_Value: '149.00'},
    // {Individual_ItemName: '1GB data (valid for 30 days) for 076 885 6789', Individual_Value: '149.00'},
    // {Individual_ItemName: '1GB data (valid for 30 days) for 076 885 6789', Individual_Value: '149.00'}
  ];

  public TnC = [
    {id: "A.", value: "The following Terms and Conditions contain assumptions of risk and/or liability by you and limit and exclude liabilities, obligations and legal responsibilities which MTN will have towards you and other persons. These Terms and Conditions also limit and exclude your rights and remedies against MTN and place various risks, liabilities, obligations and legal responsibilities on you. These Terms and Conditions may result in you being responsible for paying additional costs and amounts and MTN may also have claims and otherrights against you."},
    {id: "B.", value: "To the extent that the Terms or any goods or services provided under the Terms are governed by the Consumer Protection Act, 2008 (the 'Consumer Protection Act'), no provision of the Terms are intended to contravene the applicable provisions of the Consumer Protection Act, and therefore all provisions of the Terms must be treated as being qualified, to the extent necessary, to ensure that the applicable provisions of the Consumer Protection Act are complied with."},
    {id: "C.", value: "Please read these Terms and Conditions carefully. Use of this website will constitute your agreement to comply with these Terms and Conditions. If you do not agree with these Terms and Conditions, please do not use this website."},
    {id: "1.Interpretation", value: "1.1. Unless the context requires otherwise or it is expressly stated to the contrary, any words and phrases;<br>1.1.1. defined in the Terms of Use will bear the same meaning throughout these Terms and Conditions;<br>1.1.2. not defined in the Terms of Use or these Terms and Conditions but defined in the Electronic Communications and Transactions Act 25 of 2002, as amended from time to time ('ECTA') will bear the same meaning given to them in ECTA;<br>1.1.3.A copy of ECTA can be viewed and downloaded at http://www.polity.org.za/article/electronic-communications-and-transactions-act-no-25-of-2002-2002-01-01;<br>1.1.4.The headings used in these Terms and Conditions are for the purpose of convenience and reference only and shall not be used in the interpretation of or modification of or amplification of the whole or any part of these Terms and Conditions;<br>1.1.5.No term or provision contained in these Terms and Conditions is to be interpreted or construed so as to exclude any rights granted by Chapter VII of ECTA to any natural person who enters or intends entering into an electronic transaction with MTN on this Online Shop Website; and <br>1.1.6.References to 'writing' or notices 'in writing' by MTN in these Terms and Conditions only includes writing on paper signed in ink by an authorised representative of MTN and specifically excludes any writing which may be in electronic form."},
    {id: "2.Modification of these Terms and Conditions", value: "2.1.MTN reserves the right, in its sole discretion, to amend (including without limitation, by the addition of new terms and conditions) these Terms and Conditions, at any time, and from time to time, with notice to you. Any such amendments shall come into effect immediately and automatically. It is your responsibility and you undertake to visit this Online Shop Website to review these Terms and Conditions regularly, prior to use of this Online Shop Website for any such amendments. <br>2.2.MTN will notify you of amendments to these Terms and Conditions as and when they arise.<br>2.3.If you choose to visit https://shop.mtn.co.za your visit and any dispute over your privacy is subject to the Online Privacy Policy and these Terms and Conditions, including limitations on damages, resolution of disputes, and application of the law of Republic of South Africa. MTN’s business changes constantly, and the Online Privacy Policy and Terms and Conditions will also change. MTN will not make material changes to the Online Privacy Policy and practices to make them less protective of a customer’s personal information collected by MTN. <br>2.4.In the event that you are unsatisfied with any of the Terms and Conditions, kindly refrain from using and/or placing any orders on this Online Shop Website."},
    {id: "3.Products", value: "3.1.The price of each Product will be displayed with the product listing. In the event of a sales or special offer, the discounted price shall be displayed.<br>3.2.MTN makes every effort to ensure that the Product information supplied on the Online Shop Website is accurate and that the Products offered are available. In the event that there is a delay or MTN does not have stock of a particular Product, MTN will inform you thereof. <br>3.3.MTN shall, within reasonable efforts, ensure that Products offered are available, however should Products be ordered and MTN is not able to fulfil the order, MTN shall only be liable to refund the amounts received by the customer for such Products. <br>3.4.MTN reserves the right to change any Product offered on the Online Shop Website without prior notice. <br>3.5.You acknowledge and accept that certain Products ordered may vary in colour to those displayed on the Online Shop Website."},
    {id: "4.Approval of Orders", value: "4.1.The minimum order value for airtime on this Website is R30.00 (thirty Rand).<br>4.2.The maximum order value for airtime on this Website is R250.00 (Two hundred and fifty Rand), per day.<br>4.3.The minimum order value for Internet bundles or SMS bundles is R30.00 (thirty Rand).<br>4.4.The maximum order value for Internet bundles or SMS bundles is R1000.00 (one thousand Rand), per day.<br>4.5.The maximum total order value for airtime and Internet bundles or airtime and SMS bundles is R2000.00 (two thousand Rand) per day.<br>4.6.Customers will be able to order a maximum quantity of 8 (eight) items per day.<br>4.7.No order for Products will be approved unless and until the ordering procedure is completed and MTN notifies you thereof.<br>4.8.Your order will only be approved upon MTN confirming receipt of a fully submitted order, and upon MTN confirming receipt of payment of the order.<br>4.9.MTN may, in its sole and absolute discretion, decline any order for Products, without reason, liability or recourse to you."},
    {id: "5.Payments", value: "5.1.MTN accepts MasterCard and VISA credit card payments.<br>5.2.Customers who are not verified by VISA or MasterCard must register with VISA or MasterCard prior to purchasing on this Online Shop Website.<br>5.3.MTN shall request payment authorization from the institute from which payment is being made.<br>5.4.MTN uses an external third party to process the payments. By using this Online Shop Website, you consent to MTN providing your personal information to the third party in order to enable MTN to process your payment. Your personal information will be protected in terms of the Online Privacy Policy.<br>5.5.Upon the payment being authorized, MTN will advise you by means of an email notification, to the email address specified by you upon your registration to this Online Shop Website.<br>5.6.In the event that payment is not successful, the purchase process will be terminated and MTN will notify you thereof.<br>5.7.It is your responsibility to ensure that you provide valid and current credit card details. You will be held liable for all fines, penalties and administrative fees charged resulting from a failed transaction due to incorrect details."},
    {id: "6.Reservation of Products", value: "6.1.A virtual reservation of 30 (thirty) minutes applies to items that the customer “checks out” from their shopping cart. If the customer has not made payment within this 30 (thirty) minute period, the virtual reservation will be lifted and the customer will have to begin the order process again.<br>6.2.Registered customers’ shopping carts shall be stored on their profile and will not be cleared in the event that the last session is terminated."},
    {id: "7.Delivery of Products", value: '7.1.MTN delivers only within the Republic of South Africa.<br>7.2.Delivery charges will be displayed, as a separate item, together with the total cost of your purchase.<br>7.3.MTN delivers between Monday to Friday, from 08h00 to 17h00, excluding public holidays in the Republic of South Africa.<br>7.4.Delivery periods of physical Products ordered differ depending on the region within which the customer resides.<br>7.5.MTN will execute delivery of the Products ordered within 24 (twenty four) to 72 (seventy two) hours.<br>7.6.You acknowledge and accept that MTN relies solely on the details provided by you for delivery of your purchase(s). MTN will not be liable for any loss or damage suffered due to incorrect details provided by you.'},
    {id: '8.Risk and Ownership of Products', value: '8.1.All risk, including but not limited to risk of loss, theft, damage or unauthorized use, in and to the Product purchased through this Online Shop Website shall pass to you upon delivery to you.<br>8.2.You acknowledge and accept that ownership in the Product only passes to you upon receipt of full payment thereof by you to MTN.'},
    {id: '9.Returns, Repairs, Refunds and Cancellations', value: 'This clause only applies to hardware Products (such as handsets, SIM cards and accessories) (hereinafter referred to as “goods”) purchased from MTN via the Online Shop Website. Virtual products (such as airtime and content), by nature, cannot be returned, repaired, refunded or cancelled once purchased. For further information regarding returns, repairs and refunds, kindly refer to the MTN Returns and Refunds Policy, as well as a copy of the Consumer Protection Act which may be found here.'},
    {id: '9.1.Returns:', value: '9.1.1.The goods must have been purchased from MTN, in the Republic of South Africa.<br>9.1.2.Returns of goods must be done within 7 (seven) days after date of purchase or date of delivery (whichever is the later), regardless of whether the goods are unused by you, or as a result of an OBF (out of box failure)<br>9.1.3.All supporting documents, including your original invoice, (or in the event that the original invoice is unavailable, the invoice number or it number must be provided), with the goods, and you are required to provide a valid proof of identity in order to effect the return of the goods.<br>9.1.4.The complete unit must be returned. That is, the goods, together with any and all accessories and/or promotional items received with the goods; and<br>9.1.5.If the goods are required to be exchanged, you will receive your new goods within 10 (ten) Business Days.'},
    {id: '9.2.Implied 6 (six) month warranty:', value: 'Should you experience a problem with your goods, in accordance with section 55 of the Consumer Protection Act, within 6 (six) months after date of purchase or date of delivery (whichever is the later), you have a right to repair or replace such goods, or request a refund.'},
    {id: '9.3.Repairs:', value: 'Goods that are damaged due to physical or liquid damage do not qualify for returns and refunds. These devices will have to be referred to MTN’s HVRC (high volume repair centre), and the HVRC will determine whether the device may be repaired within its warranty or not.'},
    {id: '9.4.Refunds:', value: '9.4.1.A refund will only be paid to you if there was a pay-in amount by you. The refund will be limited to the amount paid in by you.<br>9.4.2.Where you have paid a delivery fee, this will be included in the refund.<br>9.4.3.MTN will refund you within 30 (thirty) days of your cancellation of the transaction.'},
    {id: '9.5.Obsolete Stock:', value: '9.5.1.Should you purchase goods which form part of obsolete stock (that is, stock which is sold as ‘end of life’ / ‘end of range’ stock), as indicated by MTN, and experience a problem with such goods within 6 (six) months after date of purchase or date of delivery (whichever is the later), you shall have the right to either repair such goods or request a refund for such goods. MTN is unable to replace such goods due to such goods being limited in nature.<br>9.5.2.In the event that you request a refund, you will be required to return the goods, together will all accessories received, in the original packaging.<br>9.5.3.You acknowledge and accept that you will be required to sign a disclaimer in this regard upon receipt of such goods, in accordance with these terms.'},
    {id: '9.6.Limited Edition Stock:', value: '9.6.1.Should you purchase goods which of a “limited edition”, as specified by the manufacturer and experience a problem with such goods within 7 (seven) days after date of purchase or date of delivery (whichever is the later), MTN’s OBF policy shall apply.<br>9.6.2.You may request a repair or refund for such goods. In the event that you request a replacement, MTN may only be to replace such goods with a regular stock item, due to the nature of the product being limited in nature.<br>9.6.3.You acknowledge and accept that you will be required to sign a disclaimer in this regard upon receipt of such goods, in accordance with these terms.'},
    {id: '10.RICA', value: '10.1.You acknowledge and accept that in the event that you purchase any price plan which includes a SIM card, you are required in terms of the Regulation of Interception of Communications and Provision of Communication-related Information Act 70 of 2002 as amended and any regulations thereto (“RICA”) to register such SIM card with MTN, in a face-to-face process.<br>10.2.MTN uses an external third party to deliver products purchased. By using this Online Shop Website, you consent to MTN providing your personal information to the third party in order to enable MTN to verify your details, as required in terms of RICA, and to deliver the products to you. Your personal information will be protected in terms of the Online Privacy Policy.<br>10.3.Upon delivery of your purchase which includes a SIM card, you are required to provide the following documentation to MTN’s courier company, which documentation will be verified against information provided by you on this Online Shop Website:<br>10.3.1.your original identity document, passport or refugee document at the point of delivery of your order, to allow the courier to verify your identity, for purposes of RICA;<br>10.3.2.a certified copy of an original identity document, passport or refugee document at the point of delivery of your order, for purposes of RICA; and<br>10.3.3.in the case of South African citizens, a certified copy of proof of residential address at the point of delivery of your order, for purposes of RICA. Proof of residence may be recorded in any of the following documentation:<br>10.3.3.1.Bank statement (which must not be older than 3 (three) months);<br>10.3.3.2.Rates and/or Electricity account;<br>10.3.3.3.Phone account;<br>10.3.3.4.TV license;<br>10.3.3.5.Insurance policy;<br>10.3.3.6.Lease agreement;<br>10.3.3.7.New vehicle license document.<br>10.4.You acknowledge and accept that any failure by you to provide same will result in MTN not activating the SIM card delivered to you. You will be required to visit an MTN store with the abovementioned documentation in order to activate your SIM card on the MTN network.'},
  ];
  constructor(private _router: Router, private _savepdf: SavePDFService, 
    private modalService: NgbModal, public activeModal: NgbActiveModal, private _common: CommonService, 
    private fb: FormBuilder, private _msisdnVal: StoreService, 
    private _payment: PayementGatewayService) {
    this.memberMSISDN = this._msisdnVal.getMsidnData();
    this.bundleID = this._msisdnVal.getVasCodeData();
  }
  ngOnInit() {
    console.log('this.memberMSISDN---' + this.memberMSISDN);
    if(this.memberMSISDN === 0) {
      this._router.navigate(['/', 'recharge']);
    } else {
      this.header_text = 'Confirm your recharge for ' + this.memberMSISDN;
    }
    // this.Individual_Items.push({Individual_ItemName: '1GB data (valid for 30 days) for' + this.memberMSISDN, Individual_Value: '149.00'});
    this.Individual_Items.push({Individual_ItemName: 'Airtime for' + this.memberMSISDN, Individual_Value: '149.00'});
    this.paygateURL = location.protocol + '//' + location.hostname + ':' + (location.port ? location.port : '') + '/app/api/paygateRedirect';
    // this.paygateURL = location.protocol + '//' + '10.206.3.39' + ':' + (location.port ? '4232' :  '') + '/app/api/paygateRedirect';
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
    this.payForm = this.fb.group({
      pay: ['', [Validators.required]]
    });
    this.Individual_Items.forEach((elem) => {
      this.total = parseFloat(elem.Individual_Value);
    });
    this.Total_Value = this.total.toFixed(2).toString();
    this.vat = (this.total * 0.08).toFixed(2).toString();
    this.VAT_Value = '(VAT incl. R' + this.vat + ' )';
  }

  agreeTnC({value, valid}: {value: EmailForm, valid: boolean}) {
    console.log('calling buttonAgree');
    const payload = {
      msisdn : format.msisdn(this.memberMSISDN.toString()),
      amount: this.total.toString(),
      email: value.email.toString(),
      // reference: this.paymentForm.get('msisdn').value.trim(),
      bundleID: this.bundleID
    };
    console.log(payload.msisdn + '--' + payload.amount + '--' + payload.email + '--' + payload.bundleID);
    this._payment.getPaymentRequest(payload)
    .then((res) => {
      if (res.statuscode === '0' && res.reference) {
        this.payForm = this.fb.group({
          pay: [res.reference, [Validators.required]]
        });
        document.forms['payform'].submit();
      } else {
        this.emailForm.reset();
        this.payForm.reset();
      }
    })
    .catch((err) => {
      this.emailForm.reset();
      this.payForm.reset();
    });

    // this._confirm.getRechargeConfirmation(format.msisdn(this.memberMSISDN.toString()), , , )
    // .then((resp) => {
    //   console.log('resp---' + JSON.stringify(resp));
    //   if (resp.statuscode ==='0' && resp.reference) {
    //     //pass value to that hidden form
    //   } else {
    //     this.emailForm.reset();
    //   }
    // }).catch(err => {
    //   this.emailForm.reset();
    // });
  }

  openVerticallyCentered(content) {
    // this.modalReference = this.modalService.open(content, { centered: true });
    const modalReference = this.modalService.open(TnCComponent, { centered: true });
    // this.modalService.open(content, { centered: true });
  }


  backButtonRedirection() {
    this._router.navigate(['recharge']);
  }
}
