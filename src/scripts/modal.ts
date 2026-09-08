// Accessible Modal and Tech Drawer Controllers
import { projectsData } from '../data/projects';
import { stackData } from '../data/stack';

export function initProjectModal() {
  const dialog = document.getElementById('project-modal') as HTMLDialogElement | null;
  const modalClose = document.getElementById('project-modal-close');
  const modalTitle = document.getElementById('modal-project-title');
  const modalCategory = document.getElementById('modal-project-category');
  const modalDesc = document.getElementById('modal-project-desc');
  const modalProblem = document.getElementById('modal-project-problem');
  const modalSolution = document.getElementById('modal-project-solution');
  const modalArchList = document.getElementById('modal-project-arch');
  const modalTechList = document.getElementById('modal-project-tech');
  const modalHighlights = document.getElementById('modal-project-highlights');
  const modalMetrics = document.getElementById('modal-project-metrics');

  let lastActiveElement: HTMLElement | null = null;

  if (!dialog) return;

  const openModal = (projectId: string, triggerBtn: HTMLElement) => {
    const project = projectsData.find((p) => p.id === projectId);
    if (!project) return;

    lastActiveElement = triggerBtn;

    if (modalTitle) modalTitle.textContent = project.title;
    if (modalCategory) modalCategory.textContent = project.category.toUpperCase();
    if (modalDesc) modalDesc.textContent = project.description;
    if (modalProblem) modalProblem.textContent = project.problem;
    if (modalSolution) modalSolution.textContent = project.solution;

    if (modalArchList) {
      modalArchList.innerHTML = '';
      project.architecture.forEach((step, idx) => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="step-num">0${idx + 1}</span> <span>${step}</span>`;
        modalArchList.appendChild(li);
      });
    }

    if (modalTechList) {
      modalTechList.innerHTML = '';
      project.technologies.forEach((tech) => {
        const tag = document.createElement('span');
        tag.className = 'tech-pill';
        tag.textContent = tech;
        modalTechList.appendChild(tag);
      });
    }

    if (modalHighlights) {
      modalHighlights.innerHTML = '';
      project.highlights.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        modalHighlights.appendChild(li);
      });
    }

    if (modalMetrics) {
      modalMetrics.innerHTML = '';
      if (project.metrics && project.metrics.length > 0) {
        project.metrics.forEach((m) => {
          const card = document.createElement('div');
          card.className = 'modal-metric-card';
          card.innerHTML = `<span class="metric-val">${m.value}</span><span class="metric-lbl">${m.label}</span>`;
          modalMetrics.appendChild(card);
        });
        modalMetrics.style.display = 'grid';
      } else {
        modalMetrics.style.display = 'none';
      }
    }

    dialog.showModal();
    document.body.style.overflow = 'hidden';
    modalClose?.focus();
  };

  const closeModal = () => {
    dialog.close();
    document.body.style.overflow = '';
    if (lastActiveElement) {
      lastActiveElement.focus();
    }
  };

  document.querySelectorAll<HTMLElement>('[data-open-project]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.openProject;
      if (id) openModal(id, btn);
    });
  });

  modalClose?.addEventListener('click', closeModal);

  // Close on backdrop click
  dialog.addEventListener('click', (e) => {
    const rect = dialog.getBoundingClientRect();
    const isInDialog =
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width;
    if (!isInDialog) {
      closeModal();
    }
  });

  dialog.addEventListener('close', () => {
    document.body.style.overflow = '';
    if (lastActiveElement) {
      lastActiveElement.focus();
    }
  });
}

export function initTechDrawer() {
  const drawer = document.getElementById('tech-drawer');
  const drawerClose = document.getElementById('tech-drawer-close');
  const drawerTitle = document.getElementById('drawer-tech-title');
  const drawerCategory = document.getElementById('drawer-tech-category');
  const drawerDesc = document.getElementById('drawer-tech-desc');
  const drawerUsage = document.getElementById('drawer-tech-usage');
  const drawerProjects = document.getElementById('drawer-tech-projects');

  let lastActiveElement: HTMLElement | null = null;

  if (!drawer) return;

  const openDrawer = (techId: string, triggerBtn: HTMLElement) => {
    const tech = stackData.find((t) => t.id === techId);
    if (!tech) return;

    lastActiveElement = triggerBtn;

    if (drawerTitle) drawerTitle.textContent = tech.name;
    if (drawerCategory) drawerCategory.textContent = tech.category.toUpperCase();
    if (drawerDesc) drawerDesc.textContent = tech.description;
    if (drawerUsage) drawerUsage.textContent = tech.usage;

    if (drawerProjects) {
      drawerProjects.innerHTML = '';
      tech.relatedProjects.forEach((pId) => {
        const p = projectsData.find((proj) => proj.id === pId);
        if (p) {
          const item = document.createElement('div');
          item.className = 'drawer-project-item';
          item.innerHTML = `<strong>${p.title}</strong><p>${p.category}</p>`;
          drawerProjects.appendChild(item);
        }
      });
    }

    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    drawerClose?.focus();
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    if (lastActiveElement) {
      lastActiveElement.focus();
    }
  };

  document.querySelectorAll<HTMLElement>('[data-open-tech]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.openTech;
      if (id) openDrawer(id, btn);
    });
  });

  drawerClose?.addEventListener('click', closeDrawer);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });
}
