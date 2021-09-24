import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RoadmapNode from './RoadmapNode';
import entryLevelImg from '../assets/img/entry_level.svg';
import internalLevelImg from '../assets/img/internal_level.svg';
import finalLevelImg from '../assets/img/final_level.svg';

describe('Testing RoadmapNode', () => {
  it('Should render node with entry level image', () => {
    const props = {
      gridNode: {
        isEntryLevel: true,
        name: 'Entry level node',
        description: 'Description',
        resources: [],
        problems: [],
      },
    };

    render(<RoadmapNode {...props} />);

    expect(screen.getByTestId('roadmap-node-img')).toHaveAttribute('src', entryLevelImg);
  });

  it('Should render node with final level image', () => {
    const props = {
      gridNode: {
        name: 'Entry level node',
        description: 'Description',
        resources: [],
        problems: [],
        next: [],
      },
    };

    render(<RoadmapNode {...props} />);

    expect(screen.getByTestId('roadmap-node-img')).toHaveAttribute('src', finalLevelImg);
  });

  it('Should render node with entry level image', () => {
    const props = {
      gridNode: {
        name: 'Entry level node',
        description: 'Description',
        resources: [],
        problems: [],
        next: ['next'],
      },
    };

    render(<RoadmapNode {...props} />);

    expect(screen.getByTestId('roadmap-node-img')).toHaveAttribute('src', internalLevelImg);
  });
});
