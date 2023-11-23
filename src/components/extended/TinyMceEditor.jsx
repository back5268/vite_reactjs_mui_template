import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Card } from '@mui/material';

// Documentation: https://www.tiny.cloud/docs/integrations/react/

const TinyMceEditor = (props) => {
  const { initialValue, value, setValue = () => {} } = props;

  const onEditorChange = (e, editor) => {
    setValue(e);
  };

  return (
    <Card variant="outlined" sx={{ mt: 1 }}>
      <Editor
        // apiKey="y7gnmtbsaxnjbgh3405ioqbdm24eit5f0ovek49w8yvq5r9q"
        initialValue={initialValue}
        init={{
          branding: false,
          height: 800,
          menubar: true,
          plugins:
            'print preview paste searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern',
          toolbar:
            'formatselect | bold italic underline strikethrough | forecolor backcolor blockquote | link image media | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat'
        }}
        value={value}
        onEditorChange={onEditorChange}
      />
    </Card>
  );
};

export default TinyMceEditor;
