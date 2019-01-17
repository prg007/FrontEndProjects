var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} 
var projectName = 'drum-machine';
localStorage.setItem('example_project', 'Drum Machine');

var bankOne = [{
  keyCode: 82,
  keyTrigger: 'R',
  id: 'Heater-1',
  url: "https://www.dropbox.com/s/5ay0lnxgv192ol8/B5.mp3?raw=1" },
{
  keyCode: 84,
  keyTrigger: 'T',
  id: 'Heater-2',
  url: 'https://www.dropbox.com/s/zfru1g2fqeswo2r/A5.mp3?raw=1' },
{
  keyCode: 89,
  keyTrigger: 'Y',
  id: 'Heater-3',
  url: 'https://www.dropbox.com/s/7mu8z9qg1qhd96z/G5.mp3?raw=1' },
{
  keyCode: 70,
  keyTrigger: 'F',
  id: 'Heater-4',
  url: 'https://www.dropbox.com/s/usab3r9jc89jpb1/F5.mp3?raw=1' },
{
  keyCode: 71,
  keyTrigger: 'G',
  id: 'Clap',
  url: 'https://www.dropbox.com/s/3xggi1qws6iu5uh/As5.mp3?raw=1' },
{
  keyCode: 72,
  keyTrigger: 'H',
  id: 'Open-HH',
  url: 'https://www.dropbox.com/s/ed0b1wcjam9y6yo/Gs5.mp3?raw=1' },
{
  keyCode: 67,
  keyTrigger: 'C',
  id: "Kick-n'-Hat",
  url: 'https://www.dropbox.com/s/643oifp4rqznf05/Fs5.mp3?raw=1' },
{
  keyCode: 86,
  keyTrigger: 'V',
  id: 'Kick',
  url: 'https://www.dropbox.com/s/e3aupywjj6nlclx/kick.mp3?raw=1' },
{
  keyCode: 66,
  keyTrigger: 'B',
  id: 'Closed-HH',
  url: 'https://www.dropbox.com/s/c6yf5n05lsgglhd/snare.mp3?raw=1' }];



var bankTwo = [{
 keyCode: 82,
  keyTrigger: 'R',
  id: 'Heater-1',
  url: 'https://www.dropbox.com/s/d8mvp7doaigyvmj/hi-hat.mp3?raw=1' },
{
  keyCode: 84,
  keyTrigger: 'T',
  id: 'Heater-2',
  url: 'https://www.dropbox.com/s/m0ov2ilfh98rohb/long-hi-hat.mp3?raw=1' },
{
  keyCode: 89,
  keyTrigger: 'Y',
  id: 'Heater-3',
  url: 'https://www.dropbox.com/s/w1hjm0rjn10xziu/808-tight-snare.mp3?raw=1' },
{
  keyCode: 70,
  keyTrigger: 'F',
  id: 'Heater-4',
  url: 'https://www.dropbox.com/s/sk90qk6kpai9d6g/riff.mp3?raw=1' },
{
  keyCode: 71,
  keyTrigger: 'G',
  id: 'Clap',
  url: 'https://www.dropbox.com/s/r6ml8598cqyvy46/drums-stomp.mp3?raw=1' },
{
  keyCode: 72,
  keyTrigger: 'H',
  id: 'Open-HH',
  url: 'https://www.dropbox.com/s/y9gthdejo3gx61c/mix-loop-1.mp3?raw=1' },
{
  keyCode: 67,
  keyTrigger: 'C',
  id: "Kick-n'-Hat",
  url: 'https://www.dropbox.com/s/wkjy7m152vrst2g/mix-loop-2.mp3?raw=1' },
{
  keyCode: 86,
  keyTrigger: 'V',
  id: 'Kick',
  url: 'https://www.dropbox.com/s/d8mvp7doaigyvmj/hi-hat.mp3?raw=1' },
{
  keyCode: 66,
  keyTrigger: 'B',
  id: 'Closed-HH',
  url: 'https://www.dropbox.com/s/usab3r9jc89jpb1/F5.mp3?raw=1' }];


var activeStyle = {
  backgroundColor: 'pink',
  boxShadow: "0 3px pink",
  height: 77,
  marginTop: 13 };


var inactiveStyle = {
  backgroundColor: 'grey',
  marginTop: 10,
  boxShadow: "3px 3px 5px black" };var


DrumPad = function (_React$Component) {_inherits(DrumPad, _React$Component);
  function DrumPad(props) {_classCallCheck(this, DrumPad);var _this = _possibleConstructorReturn(this, (DrumPad.__proto__ || Object.getPrototypeOf(DrumPad)).call(this,
    props));
    _this.state = {
      padStyle: inactiveStyle };

    _this.playSound = _this.playSound.bind(_this);
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    _this.activatePad = _this.activatePad.bind(_this);return _this;
  }_createClass(DrumPad, [{ key: 'componentDidMount', value: function componentDidMount()
    {
      document.addEventListener('keydown', this.handleKeyPress);
    } }, { key: 'componentWillUnmount', value: function componentWillUnmount()
    {
      document.removeEventListener('keydown', this.handleKeyPress);
    } }, { key: 'handleKeyPress', value: function handleKeyPress(
    e) {
      if (e.keyCode === this.props.keyCode) {
        this.playSound();
      }
    } }, { key: 'activatePad', value: function activatePad()
    {
      if (this.props.power) {
        this.state.padStyle.backgroundColor === 'orange' ?
        this.setState({
          padStyle: inactiveStyle }) :

        this.setState({
          padStyle: activeStyle });

      } else {
        this.state.padStyle.marginTop === 13 ?
        this.setState({
          padStyle: inactiveStyle }) :

        this.setState({
          padStyle: {
            height: 77,
            marginTop: 13,
            backgroundColor: 'grey',
            boxShadow: "0 3px grey" } });


      }
    } }, { key: 'playSound', value: function playSound(
    e) {var _this2 = this;
      var sound = document.getElementById(this.props.keyTrigger);
      sound.currentTime = 0;
      sound.play();
      this.activatePad();
      setTimeout(function () {return _this2.activatePad();}, 100);
      this.props.updateDisplay(this.props.clipId.replace(/-/g, ' '));
    } }, { key: 'render', value: function render()
    {
      return (
        React.createElement('div', { id: this.props.clipId,
            onClick: this.playSound,
            className: 'drum-pad',
            style: this.state.padStyle },
          React.createElement('audio', { className: 'clip', id: this.props.keyTrigger, src: this.props.clip }),
          this.props.keyTrigger));


    } }]);return DrumPad;}(React.Component);var


PadBank = function (_React$Component2) {_inherits(PadBank, _React$Component2);
  function PadBank(props) {_classCallCheck(this, PadBank);return _possibleConstructorReturn(this, (PadBank.__proto__ || Object.getPrototypeOf(PadBank)).call(this,
    props));
  }_createClass(PadBank, [{ key: 'render', value: function render()
    {var _this4 = this;
      var padBank = void 0;
      this.props.power ?
      padBank = this.props.currentPadBank.map(function (drumObj, i, padBankArr) {
        return (
          React.createElement(DrumPad, {
            clipId: padBankArr[i].id,
            clip: padBankArr[i].url,
            keyTrigger: padBankArr[i].keyTrigger,
            keyCode: padBankArr[i].keyCode,
            updateDisplay: _this4.props.updateDisplay,
            power: _this4.props.power }));

      }) :
      padBank = this.props.currentPadBank.map(function (drumObj, i, padBankArr) {
        return (
          React.createElement(DrumPad, {
            clipId: padBankArr[i].id,
            clip: '#',
            keyTrigger: padBankArr[i].keyTrigger,
            keyCode: padBankArr[i].keyCode,
            updateDisplay: _this4.props.updateDisplay,
            power: _this4.props.power }));

      });
      return (
        React.createElement('div', { className: 'pad-bank' },
          padBank));


    } }]);return PadBank;}(React.Component);var


App = function (_React$Component3) {_inherits(App, _React$Component3);
  function App(props) {_classCallCheck(this, App);var _this5 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));
    _this5.state = {
      power: true,
      display: String.fromCharCode(160),
      currentPadBank: bankOne,
      currentPadBankId: 'Heater Kit',
      sliderVal: 0.3 };

    _this5.displayClipName = _this5.displayClipName.bind(_this5);
    _this5.selectBank = _this5.selectBank.bind(_this5);
    _this5.adjustVolume = _this5.adjustVolume.bind(_this5);
    _this5.powerControl = _this5.powerControl.bind(_this5);
    _this5.clearDisplay = _this5.clearDisplay.bind(_this5);return _this5;
  }_createClass(App, [{ key: 'powerControl', value: function powerControl()
    {
      this.setState({
        power: !this.state.power,
        display: String.fromCharCode(160) });

    } }, { key: 'selectBank', value: function selectBank()
    {
      if (this.state.power) {
        this.state.currentPadBankId === 'Heater Kit' ?
        this.setState({
          currentPadBank: bankTwo,
          display: 'Smooth Piano Kit',
          currentPadBankId: 'Smooth Piano Kit' }) :

        this.setState({
          currentPadBank: bankOne,
          display: 'Heater Kit',
          currentPadBankId: 'Heater Kit' });

      }
    } }, { key: 'displayClipName', value: function displayClipName(
    name) {
      if (this.state.power) {
        this.setState({
          display: name });

      }
    } }, { key: 'adjustVolume', value: function adjustVolume(
    e) {var _this6 = this;
      if (this.state.power) {
        this.setState({
          sliderVal: e.target.value,
          display: "Volume: " + Math.round(e.target.value * 100) });

        setTimeout(function () {return _this6.clearDisplay();}, 1000);
      }
    } }, { key: 'clearDisplay', value: function clearDisplay()
    {
      this.setState({
        display: String.fromCharCode(160) });

    } }, { key: 'render', value: function render()
    {var _this7 = this;
      var powerSlider = this.state.power ? {
        float: 'right' } :
      {
        float: 'left' };

      var bankSlider = this.state.currentPadBank === bankOne ? {
        float: 'left' } :
      {
        float: 'right' };
      {
        var clips = [].slice.call(document.getElementsByClassName('clip'));
        clips.forEach(function (sound) {
          sound.volume = _this7.state.sliderVal;
        });
      }
      return (
        React.createElement('div', { id: 'drum-machine', className: 'inner-container' },
          React.createElement(PadBank, {
            power: this.state.power,
            updateDisplay: this.displayClipName,
            clipVolume: this.state.sliderVal,
            currentPadBank: this.state.currentPadBank }),

          React.createElement('div', { className: 'logo' },
            React.createElement('div', { className: 'inner-logo ' }, 'Prasun' + String.fromCharCode(160)),
            React.createElement('i', { className: 'inner-logo ' })),


          React.createElement('div', { className: 'controls-container' },

            React.createElement('div', { className: 'control' },
              React.createElement('p', null, 'Power'),
              React.createElement('div', { onClick: this.powerControl, className: 'select' },
                React.createElement('div', { style: powerSlider, className: 'inner' }))),


            React.createElement('p', { id: 'display' },
              this.state.display),

            React.createElement('div', { className: 'volume-slider' },
              React.createElement('input', { type: 'range', min: '0', max: '1', step: '0.01', value: this.state.sliderVal, onChange: this.adjustVolume })),

            React.createElement('div', { className: 'control' },
              React.createElement('p', null, 'Bank'),
              React.createElement('div', { onClick: this.selectBank, className: 'select' },
                React.createElement('div', { style: bankSlider, className: 'inner' }))))));






    } }]);return App;}(React.Component);


ReactDOM.render(
React.createElement(App, null),
document.getElementById('root'));