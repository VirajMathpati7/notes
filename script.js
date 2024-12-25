// Array to hold notes (you can replace this with dynamic fetching)
const notes = [
    { title: "Day 1 Notes", link: "notes/day1.pdf", date: "2024-12-24" },
    { title: "Day 2 Notes", link: "notes/day2.pdf", date: "2024-12-25" },
  ];
  
  // Function to load notes dynamically
  function loadNotes() {
    const notesList = document.getElementById('notes-list');
    notesList.innerHTML = notes
      .map(note => `
        <div class="note-item">
          <h3>${note.title}</h3>
          <p>${note.date}</p>
          <a href="${note.link}" target="_blank">View Note</a>
        </div>
      `)
      .join('');
  }
  
  // Filter notes based on search input
  function filterNotes() {
    const search = document.getElementById('search').value.toLowerCase();
    const filteredNotes = notes.filter(note =>
      note.title.toLowerCase().includes(search)
    );
    const notesList = document.getElementById('notes-list');
    notesList.innerHTML = filteredNotes
      .map(note => `
        <div class="note-item">
          <h3>${note.title}</h3>
          <p>${note.date}</p>
          <a href="${note.link}" target="_blank">View Note</a>
        </div>
      `)
      .join('');
  }
  
  // Load notes on page load
  window.onload = loadNotes;
  