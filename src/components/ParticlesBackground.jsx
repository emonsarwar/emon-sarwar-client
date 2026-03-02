import { useEffect, useState } from 'react';
import Particles from '@tsparticles/react';
import { loadStarsPreset } from '@tsparticles/preset-stars';

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initParticles = async () => {
      await loadStarsPreset(window.tsParticles);
      setInit(true);
    };

    initParticles();
  }, []);

  const particlesOptions = {
    preset: 'stars',
    background: {
      color: {
        value: 'transparent',
      },
    },
    particles: {
      number: {
        value: 50,
      },
      size: {
        value: 2,
      },
      move: {
        speed: 0.5,
      },
      opacity: {
        value: 0.5,
      },
    },
  };

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={particlesOptions}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -2,
        }}
      />
    );
  }

  return null;
}