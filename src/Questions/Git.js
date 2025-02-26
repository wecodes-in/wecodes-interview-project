export const dummyQuestionsGit = [
  {
    id: 5000,
    question: "What is Git?",
    answer:
      "Git is a distributed version control system that helps developers track and manage changes in the source code during software development.",
    codeSnippet: "",
    example: false,
    difficulty: "Easy",
    technology: "Management",
  },
  {
    id: 5001,
    question: "What is the difference between Git and GitHub?",
    answer:
      "Git is a version control system for tracking changes in source code, while GitHub is a platform for hosting Git repositories, enabling collaboration, and providing features like pull requests, issue tracking, and more.",
    codeSnippet: "",
    example: false,
    difficulty: "Easy",
    technology: "Management",
  },
  {
    id: 5002,
    question: "What are the different types of Git repositories?",
    answer:
      "1. Local repository: The copy of the repository on your local machine. 2. Remote repository: A version of the repository stored on a server, typically on GitHub, GitLab, or Bitbucket. 3. Bare repository: A repository that does not have a working directory and is used for sharing or backup purposes.",
    codeSnippet: "",
    example: false,
    difficulty: "Easy",
    technology: "Management",
  },
  {
    id: 5003,
    question: "What is the purpose of git init?",
    answer:
      "git init initializes a new Git repository in the current directory, creating a .git directory to track changes.",
    codeSnippet: "",
    example: false,
    difficulty: "Easy",
    technology: "Management",
  },
  {
    id: 5004,
    question: "What is a commit in Git?",
    answer:
      "A commit is a snapshot of changes in the repository, recording a point in the project's history. It contains a message explaining the changes made.",
    codeSnippet: "",
    example: false,
    difficulty: "Easy",
    technology: "Management",
  },
  {
    id: 5005,
    question: "What is the difference between git pull and git fetch?",
    answer:
      "git fetch retrieves new commits from the remote repository without merging them into your local branch, while git pull fetches and automatically merges changes into your current branch.",
    codeSnippet: "",
    example: false,
    difficulty: "Easy",
    technology: "Management",
  },
  {
    id: 5006,
    question: "How do you undo the last commit?",
    answer:
      "Use git revert <commit> to create a new commit that undoes the changes from the last commit. If you want to completely remove the last commit (including changes in the working directory), use git reset --hard HEAD~1.",
    codeSnippet: "",
    example: false,
    difficulty: "Easy",
    technology: "Management",
  },
  {
    id: 5007,
    question: "What is the purpose of the git stash command?",
    answer:
      "git stash temporarily stores changes that are not ready to be committed, allowing you to work on something else and come back to the stashed changes later using git stash pop.",
    codeSnippet: "",
    example: false,
    difficulty: "Easy",
    technology: "Management",
  },
  {
    id: 5008,
    question: "How do you resolve conflicts in Git?",
    answer:
      "Conflicts occur when two branches have changed the same part of a file. Git will mark the conflicting sections, and you can manually resolve the conflict by editing the file, then use git add to stage the resolved file and git commit to finalize the merge.",
    codeSnippet: "",
    example: false,
    difficulty: "Easy",
    technology: "Management",
  },
  {
    id: 5009,
    question: "What is the difference between git merge and git rebase?",
    answer:
      "git merge combines changes from two branches into a single commit, preserving the branch history. git rebase moves or applies commits from one branch onto another, creating a linear history.",
    codeSnippet: "",
    example: false,
    difficulty: "Easy",
    technology: "Management",
  },
  {
    id: 5010,
    question: "What is a Git branch?",
    answer:
      "A Git branch is a pointer to a specific commit in the repository. It allows developers to work on different features or fixes without affecting the main codebase (typically the main or master branch).",
    codeSnippet: "",
    example: false,
    difficulty: "Easy",
    technology: "Management",
  },
  {
    id: 5011,
    question: "What is a detached HEAD state in Git?",
    answer:
      "A detached HEAD occurs when you check out a specific commit rather than a branch. In this state, any new commits you make will not be associated with any branch.",
    codeSnippet: "",
    example: false,
    difficulty: "Easy",
    technology: "Management",
  },
  {
    id: 5012,
    question: "How do you squash multiple commits in Git?",
    answer:
      "You can squash multiple commits into one by using git rebase -i HEAD~n (where n is the number of commits you want to squash). In the interactive rebase, change the word 'pick' to 'squash' for the commits you want to combine.",
    codeSnippet: "",
    example: false,
    difficulty: "Easy",
    technology: "Management",
  },
  {
    id: 5013,
    question: "What is Git’s “cherry-pick” command?",
    answer:
      "git cherry-pick is used to apply the changes from a specific commit from one branch to another branch. This is useful when you want to apply specific changes without merging the entire branch.",
    codeSnippet: "",
    example: false,
    difficulty: "Easy",
    technology: "Management",
  },
  {
    id: 5014,
    question: "How do you revert a Git merge?",
    answer:
      "To revert a merge, use git revert -m 1 <commit>, where -m 1 specifies the parent commit to retain. The commit is the merge commit you want to undo.",
    codeSnippet: "",
    example: false,
    difficulty: "Easy",
    technology: "Management",
  },
  {
    id: 5015,
    question: "What is the Git Flow workflow?",
    answer:
      "Git Flow is a branching model that defines a strict branching pattern: master, develop, and feature, release, and hotfix branches for managing releases and features.",
    codeSnippet: "",
    example: false,
    difficulty: "Easy",
    technology: "Management",
  },
  {
    id: 5016,
    question: 'Explain the concept of a "fork" in Git.',
    answer:
      "A fork is a copy of a repository, typically used in open-source development. It allows you to make changes without affecting the original project, and you can later submit a pull request to propose your changes.",
    codeSnippet: "",
    example: false,
    difficulty: "Easy",
    technology: "Management",
  },
  {
    id: 5017,
    question: "How would you handle large files in Git?",
    answer:
      "Git Large File Storage (Git LFS) is used to manage large files by replacing them with lightweight text pointers in the repository and storing the actual file contents on a remote server.",
    codeSnippet: "",
    example: false,
    difficulty: "Easy",
    technology: "Management",
  },
  {
    id: 5018,
    question: "What is a Git tag, and how do you use it?",
    answer:
      "A Git tag is a reference to a specific commit, often used to mark release points (e.g., v1.0.0). Tags can be created with git tag <tag_name> and pushed with git push origin <tag_name>.",
    codeSnippet: "",
    example: false,
    difficulty: "Easy",
    technology: "Management",
  },
  {
    id: 5019,
    question: "What is git diff used for?",
    answer:
      "git diff shows the differences between the working directory and the index (staged changes) or between two commits.",
    codeSnippet: "",
    example: false,
    difficulty: "Easy",
    technology: "Management",
  },
];
