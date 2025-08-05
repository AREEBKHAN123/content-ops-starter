import { Model } from '@stackbit/types';

export const IframeBlock: Model = {
  type: 'object',
  name: 'IframeBlock',
  label: 'Iframe Embed',
  fields: [
    {
      type: 'string',
      name: 'url',
      label: 'Embed URL (iframe src)',
      required: true
    },
    {
      type: 'number',
      name: 'height',
      label: 'Height (in pixels)',
      required: false,
      default: 450
    },
    {
      type: 'number',
      name: 'width',
      label: 'width (in pixels)',
      required: false,
      default: 500
    },
    {
      type: 'string',
      name: 'title',
      label: 'Accessible Title',
      required: false
    }
  ]
};
