// Command Palette Controller (Cmd+K / Ctrl+K)
export interface CommandItem {
  id: string;
  label: string;
  category: string;
  action: () => void;
  shortcut?: string;
}

export function initCommandPalette() {
  const modal = document.getElementById('command-palette-modal');
  const input = document.getElementById('command-palette-input') as HTMLInputElement | null;
  const listContainer = document.getElementById('command-palette-list');

  if (!modal || !input || !listContainer) return;

  const commands: CommandItem[] = [
    {
      id: "about",
      label: "Jump to About Section",
      category: "Navigation",
      action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }),
      shortcut: "A"
    },
    {
      id: "infrastructure",
      label: "Jump to Infrastructure Topology",
      category: "Navigation",
      action: () => document.getElementById('infrastructure')?.scrollIntoView({ behavior: 'smooth' }),
      shortcut: "I"
    },
    {
      id: "projects",
      label: "Jump to Featured Projects",
      category: "Navigation",
      action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }),
      shortcut: "P"
    },
    {
      id: "pipeline",
      label: "Jump to CI/CD & IaC Pipelines",
      category: "Navigation",
      action: () => document.getElementById('pipeline')?.scrollIntoView({ behavior: 'smooth' }),
      shortcut: "L"
    },
    {
      id: "run-pipeline",
      label: "Trigger CI/CD Pipeline Run",
      category: "Actions",
      action: () => {
        document.getElementById('pipeline')?.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => document.getElementById('btn-run-pipeline')?.click(), 400);
      }
    },
    {
      id: "stack",
      label: "Jump to Technology Stack",
      category: "Navigation",
      action: () => document.getElementById('stack')?.scrollIntoView({ behavior: 'smooth' }),
      shortcut: "S"
    },
    {
      id: "experience",
      label: "Jump to Career Experience",
      category: "Navigation",
      action: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }),
      shortcut: "E"
    },
    {
      id: "mindset",
      label: "Jump to Engineering Mindset",
      category: "Navigation",
      action: () => document.getElementById('mindset')?.scrollIntoView({ behavior: 'smooth' }),
      shortcut: "M"
    },
    {
      id: "contact",
      label: "Jump to Contact",
      category: "Contact",
      action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }),
      shortcut: "C"
    },
    {
      id: "resume",
      label: "Download Official Resume (PDF)",
      category: "Document",
      action: () => window.open('/resume/prasaswo-tepe-resume.pdf', '_blank'),
      shortcut: "R"
    },
    {
      id: "github",
      label: "Open GitHub Profile",
      category: "External",
      action: () => window.open('https://github.com/tepe77', '_blank', 'noopener,noreferrer')
    },
    {
      id: "linkedin",
      label: "Open LinkedIn Profile",
      category: "External",
      action: () => window.open('https://www.linkedin.com/in/prasaswo-tepe-980a91b6/', '_blank', 'noopener,noreferrer')
    }
  ];

  let selectedIndex = 0;
  let filteredCommands: CommandItem[] = [...commands];

  const renderCommands = () => {
    listContainer.innerHTML = '';
    if (filteredCommands.length === 0) {
      const emptyEl = document.createElement('div');
      emptyEl.className = 'command-empty';
      emptyEl.textContent = 'No matching commands found.';
      listContainer.appendChild(emptyEl);
      return;
    }

    filteredCommands.forEach((cmd, index) => {
      const itemEl = document.createElement('button');
      itemEl.type = 'button';
      itemEl.className = `command-item ${index === selectedIndex ? 'selected' : ''}`;
      itemEl.setAttribute('role', 'option');
      itemEl.setAttribute('aria-selected', index === selectedIndex ? 'true' : 'false');

      const textWrapper = document.createElement('div');
      textWrapper.className = 'command-text-wrapper';

      const labelEl = document.createElement('span');
      labelEl.className = 'command-label';
      labelEl.textContent = cmd.label;

      const catEl = document.createElement('span');
      catEl.className = 'command-category';
      catEl.textContent = cmd.category;

      textWrapper.appendChild(labelEl);
      textWrapper.appendChild(catEl);
      itemEl.appendChild(textWrapper);

      if (cmd.shortcut) {
        const kbd = document.createElement('kbd');
        kbd.className = 'command-shortcut';
        kbd.textContent = cmd.shortcut;
        itemEl.appendChild(kbd);
      }

      itemEl.addEventListener('click', () => {
        executeCommand(cmd);
      });

      listContainer.appendChild(itemEl);
    });

    const selectedEl = listContainer.children[selectedIndex] as HTMLElement | undefined;
    selectedEl?.scrollIntoView({ block: 'nearest' });
  };

  const openPalette = () => {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    input.value = '';
    filteredCommands = [...commands];
    selectedIndex = 0;
    renderCommands();
    setTimeout(() => input.focus(), 50);
  };

  const closePalette = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  const executeCommand = (cmd: CommandItem) => {
    closePalette();
    cmd.action();
  };

  // Keyboard shortcut listener
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (modal.classList.contains('open')) {
        closePalette();
      } else {
        openPalette();
      }
    } else if (e.key === 'Escape' && modal.classList.contains('open')) {
      e.preventDefault();
      closePalette();
    }
  });

  // Modal navigation inside palette
  input.addEventListener('input', () => {
    const query = input.value.trim().toLowerCase();
    filteredCommands = commands.filter(
      (c) => c.label.toLowerCase().includes(query) || c.category.toLowerCase().includes(query)
    );
    selectedIndex = 0;
    renderCommands();
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedIndex = (selectedIndex + 1) % filteredCommands.length;
      renderCommands();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedIndex = (selectedIndex - 1 + filteredCommands.length) % filteredCommands.length;
      renderCommands();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        executeCommand(filteredCommands[selectedIndex]);
      }
    }
  });

  // Click backdrop to close
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closePalette();
    }
  });

  // Export openPalette for external triggers
  (window as unknown as { openCommandPalette: () => void }).openCommandPalette = openPalette;
}
