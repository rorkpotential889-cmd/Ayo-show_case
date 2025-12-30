export type ComfyUIWorkflow = {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  useCase: string;
};

export const comfyUIWorkflows: ComfyUIWorkflow[] = [
  {
    id: '1',
    title: 'Photorealistic Portrait Generation',
    description:
      'Advanced workflow for generating high-quality photorealistic portraits with face detection, ControlNet, and detailed face enhancement.',
    image: '/workflows/comfyui-portrait-workflow.jpg',
    features: [
      'Face detection with YOLOv8',
      'Person segmentation',
      'ControlNet integration',
      'Face detailer enhancement',
      'Batch processing support',
    ],
    useCase:
      'Professional portrait generation with precise control over facial features and composition',
  },
  {
    id: '2',
    title: 'Anime Character Inpainting',
    description:
      'Specialized workflow for inpainting anime-style characters with ControlNet and advanced image manipulation.',
    image: '/workflows/comfyui-anime-inpaint.jpg',
    features: [
      'Inpainting preprocessor',
      'ControlNet application',
      'Anime model integration',
      'Mask-based editing',
      'High-resolution output',
    ],
    useCase: 'Anime character generation and editing with precise control over style and details',
  },
  {
    id: '3',
    title: 'AnimateDiff Video Generation',
    description:
      'Complex workflow for generating animated videos using AnimateDiff with OpenPose control and frame-by-frame processing.',
    image: '/workflows/comfyui-animatediff.jpg',
    features: [
      'AnimateDiff integration',
      'OpenPose control',
      'Video frame combination',
      'Uniform context options',
      'GIF/Video export',
    ],
    useCase: 'Creating animated sequences with pose control and smooth frame transitions',
  },
];
