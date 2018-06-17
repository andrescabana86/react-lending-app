import React from 'react';

import { Form, Input, Button, Select } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
import 'antd/lib/form/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/select/style/css';

import {
  FORM_ITEM_LAYOUT,
  FORM_TAIL_ITEM_LAYOUT,
  FORM_ITEM_LEGEND } from '../constants/edit-request';

import './scoring-form.css';
import { EGender } from '../enums/gender';

class ScoringForm extends React.Component<any, {}> {

  handleSubmit = (e:any) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err:any, values:any) => {
      if (!err) {
        this.props.handleSubmit(values);
      } else {
        console.error('There is an error at the scoring form validation.');
      }
    });
  }

  hasErrors(fieldsError:any) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  render() {
    const { getFieldDecorator, getFieldsError } = this.props.form;
    const genderCombo = Object.keys(EGender).map((key:any) => {
      return { idx: key, value: EGender[key] };
    });

    return (
      <Form onSubmit={this.handleSubmit}>

        <FormItem
          {...FORM_ITEM_LEGEND}>
          <legend>Solicitar Prestamo</legend>
        </FormItem>

        <FormItem
          {...FORM_ITEM_LAYOUT}
          label="Nombre" >
          {getFieldDecorator('nombre', {
            rules: [{
              required: true, message: 'El nombre es un campo requerido!',
            }],
          })(<Input type="text" autoComplete="off" />)}
        </FormItem>

        <FormItem
          {...FORM_ITEM_LAYOUT}
          label="Apellido">
          {getFieldDecorator('apellido', {
            rules: [{
              required: true, message: 'El apellido es un campo requerido!',
            }],
          })(<Input type="text" autoComplete="off" />)}
        </FormItem>

        <FormItem
          {...FORM_ITEM_LAYOUT}
          label="Documento">
          {getFieldDecorator('documento', {
            rules: [{
              required: true, message: 'El documento es un campo requerido!',
            }],
          })(<Input type="text" autoComplete="off" />)}
        </FormItem>

        <FormItem
          {...FORM_ITEM_LAYOUT}
          label="Genero">
          {getFieldDecorator('genero', {
            rules: [{
              required: true, message: 'El genero es un campo requerido!',
            }],
            initialValue: genderCombo[0].idx,
          })(<Select>
              {
                genderCombo.map(({ idx, value }:any) => {
                  return <Option key={idx} value={idx}>{value}</Option>;
                })
              }
            </Select>)}
        </FormItem>

        <FormItem
          {...FORM_ITEM_LAYOUT}
          label="Email">
          {getFieldDecorator('email', {
            rules: [{
              required: true, message: 'El email es un campo requerido!',
            }],
          })(<Input type="email" autoComplete="off" />)}
        </FormItem>

        <FormItem className="scoring-form__button-container" {...FORM_TAIL_ITEM_LAYOUT}>
          <Button type="primary" htmlType="submit"
            disabled={this.hasErrors(getFieldsError())}
          >Prestamo Ya!</Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(ScoringForm);
