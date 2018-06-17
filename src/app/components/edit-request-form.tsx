import React from 'react';

import { Form, Input, Button, Divider } from 'antd';
const FormItem = Form.Item;
import 'antd/lib/form/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/divider/style/css';

import {
  FORM_ITEM_LAYOUT,
  FORM_TAIL_ITEM_LAYOUT,
  FORM_ITEM_LEGEND } from '../constants/edit-request';

class EditRequestFormComponent extends React.Component<any, {}> {

  handleSubmit = (e:any) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err:any, values:any) => {
      if (!err) {
        this.props.handleSubmit(values);
      } else {
        console.error('There is an error at the form validation.');
      }
    });
  }

  hasErrors(fieldsError:any) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  render() {
    const { nombre, apellido, documento } = this.props.defaultValues;
    const { getFieldDecorator, getFieldsError } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...FORM_ITEM_LEGEND}>
          <legend>Editar</legend>
        </FormItem>
        <FormItem
          {...FORM_ITEM_LAYOUT}
          label="Nombre" >
          {getFieldDecorator('nombre', {
            rules: [{
              required: true, message: 'El nombre es un campo requerido!',
            }],
            initialValue: nombre,
          })(<Input type="text" />)}
        </FormItem>
        <FormItem
          {...FORM_ITEM_LAYOUT}
          label="Apellido">
          {getFieldDecorator('apellido', {
            rules: [{
              required: true, message: 'El apellido es un campo requerido!',
            }],
            initialValue: apellido,
          })(<Input type="text" />)}
        </FormItem>
        <FormItem
          {...FORM_ITEM_LAYOUT}
          label="Documento">
          {getFieldDecorator('documento', {
            rules: [{
              required: true, message: 'El documento es un campo requerido!',
            }],
            initialValue: documento,
          })(<Input type="text" />)}
        </FormItem>
        <FormItem {...FORM_TAIL_ITEM_LAYOUT}>
          <Button type="primary" htmlType="submit"
            disabled={this.hasErrors(getFieldsError())}
          >Guardar</Button>
          <Divider type="vertical" />
          <Button type="danger" htmlType="button"
            onClick={this.props.goBack}>Volver</Button>
        </FormItem>
      </Form>
    );
  }
}

export const EditRequestForm =  Form.create()(EditRequestFormComponent);
