import React, { Component } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Card } from '@mui/material';

class TinyMceEditor extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.setData(e.target.getContent());
  }

  render() {
    return (
      <Card variant="outlined" sx={{ mt: 1 }}>
        <Editor
          apiKey="y7gnmtbsaxnjbgh3405ioqbdm24eit5f0ovek49w8yvq5r9q"
          initialValue={this.props.data}
          init={{
            branding: false,
            height: this.props.height || 400,
            menubar: true,
            plugins:
              'print preview paste searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern',
            toolbar:
              'formatselect | bold italic underline strikethrough | forecolor backcolor blockquote | link image media | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat',
            image_advtab: true
          }}
          onChange={this.onChange}
        />
      </Card>
    );
  }
}

export default TinyMceEditor;
