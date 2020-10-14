import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Form from '../components/form/form';

describe('<Form/>', () => {

  it('is alive at application start', () => {
    // const form = shallow(<Form />);
    // expect(form.find('.results .method').exists()).toBeTruthy();
  });
   
  it('is alive at application start', () => {
    // const form = shallow(<Form />);
    // expect(form.find('#GET').text()).toStrictEqual('GET');
    // expect(form.find('#POST').text()).toStrictEqual('POST');
    // expect(form.find('#PUT').text()).toStrictEqual('PUT');
    // expect(form.find('#DELETE').text()).toStrictEqual('DELETE');
  });

  it('properly store the users input into state', () => {
    // const form = mount(<Form />);
    // const getButton = form.find('#POST');
    // const textInput = form.find('#textInput');
    // const formTag = form.find('#form');

    // textInput.simulate('change', { target: { value: 'localhost:3000' } });
    // getButton.simulate('click');
    // formTag.simulate('submit');

    // expect(form.state('request').url).toStrictEqual('localhost:3000');
    // expect(form.state('request').method).toStrictEqual('POST');

  });

  it(' properly clear the state after the form is submitted', () => {
    // const form = mount(<Form />);
    // const formTag = form.find('#form');
    // const getButton = form.find('#POST');
    // const textInput = form.find('#textInput');

    // textInput.simulate('change', { target: { value: 'localhost:3000' } });
    // getButton.simulate('click');
    // formTag.simulate('submit');

    // expect(form.state('url')).toStrictEqual('');
    // expect(form.state('method')).toStrictEqual('');
  });

  it(' properly clear the form after the form is submitted', () => {
    // const form = mount(<Form />);
    // const formTag = form.find('#form');
    // const getButton = form.find('#POST');
    // const textInput = form.find('#textInput');  

    // textInput.simulate('change', {target:{value:'localhost:3000'}});
    // getButton.simulate('click');

    // formTag.simulate('submit');

    // expect(textInput.text()).toStrictEqual('');
    // expect(getButton.hasClass('')).toStrictEqual(true);
  });

  it('render the final result', ()=> {
    // const form = mount(<Form />);
    // const formTag = form.find('#form');
    // const getButton = form.find('#POST');
    // const textInput = form.find('#textInput');  

    // textInput.simulate('change', {target:{value:'localhost:3000'}});
    // getButton.simulate('click');

    // formTag.simulate('submit');

    // expect(form.find('.url').text()).toStrictEqual('localhost:3000');
    // expect(form.find('.method').text()).toStrictEqual('POST');
  });

  it('properly display the users input in the output area on form submit', () => {
    // const rendered = renderer.create(<Form />).toJSON();
    // expect(rendered).toMatchSnapshot();
  });

});