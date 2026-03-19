import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetMeQuery } from "../../../api/authApi";
import { useGetSkillQuery } from "../../../api/skillApi";
import { useGetJobQuery } from "../../../api/jobApi";
import { useGetProjectsQuery } from "../../../api/projectApi";
import { useGetEducationQuery } from "../../../api/educationApi";
import { useGetSocialAccountsQuery } from "../../../api/socialAccountApi";
import { HiOutlineSparkles, HiOutlineBriefcase, HiOutlineAcademicCap, HiOutlineShare } from "react-icons/hi";

const SummaryCard = ({ title, count, icon: Icon, actionLabel, onAction, loading }) => {
  return (
    <div className="rounded-2xl  border border-white/10 bg-white/5 p-5 backdrop-blur-lg shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-white/70 uppercase tracking-wider">{title}</p>
          <p className="mt-1 text-3xl font-semibold text-white">{loading ? "..." : count}</p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-secondary">
          <Icon className="h-6 w-6" />
        </div>
      </div>

      {actionLabel && onAction ? (
        <button
          onClick={onAction}
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90"
        >
          {actionLabel}
        </button>
      ) : null}
    </div>
  );
};

export default function OverviewPage() {
  const navigate = useNavigate();
  const { data: me } = useGetMeQuery();
  const { data: skills, isLoading: skillsLoading } = useGetSkillQuery();
  const { data: jobs, isLoading: jobsLoading } = useGetJobQuery();
  const { data: projects, isLoading: projectsLoading } = useGetProjectsQuery();
  const { data: education, isLoading: educationLoading } = useGetEducationQuery();
  const { data: socialAccounts, isLoading: socialAccountsLoading } = useGetSocialAccountsQuery();

  const stats = [
    {
      title: "Skills",
      count: skills?.data?.length ?? 0,
      icon: HiOutlineSparkles,
      actionLabel: "Add Skill",
      onAction: () => navigate("/dashboard/create-skill"),
      loading: skillsLoading,
    },
    {
      title: "Experience",
      count: jobs?.data?.length ?? 0,
      icon: HiOutlineBriefcase,
      actionLabel: "Add Job",
      onAction: () => navigate("/dashboard/create-job"),
      loading: jobsLoading,
    },
    {
      title: "Projects",
      count: projects?.data?.length ?? 0,
      icon: HiOutlineSparkles,
      actionLabel: "Add Project",
      onAction: () => navigate("/dashboard/create-project"),
      loading: projectsLoading,
    },
    {
      title: "Education",
      count: education?.data?.length ?? 0,
      icon: HiOutlineAcademicCap,
      actionLabel: "Add Education",
      onAction: () => navigate("/dashboard/create-education"),
      loading: educationLoading,
    },
    {
      title: "Social Links",
      count: socialAccounts?.data?.length ?? 0,
      icon: HiOutlineShare,
      actionLabel: "Add Social",
      onAction: () => navigate("/dashboard/create-social-account"),
      loading: socialAccountsLoading,
    },
  ];

  return (
    <div className="space-y-6 bg-primary p-6 rounded-2xl">
      <header className="flex *: flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Overview</h1>
          <p className="text-sm text-white/60">
            Welcome back{me?.data?.name ? `, ${me.data.name}` : ""}! Here’s a quick summary of your portfolio.
          </p>
        </div>
        {/* 
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => navigate("/dashboard/template")}
            className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15"
          >
            Edit Templates
          </button>
          <button
            onClick={() => navigate("/dashboard/favorites")}
            className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15"
          >
            Favorites
          </button>
        </div> */}
      </header>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {stats.map((card) => (
          <SummaryCard key={card.title} {...card} />
        ))}
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg shadow-sm">
        <h2 className="text-lg font-semibold text-white">Quick Links</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <button
            onClick={() => navigate("/dashboard/create-skill")}
            className="rounded-xl border border-white/10 px-4 py-3 text-left text-white/80 transition hover:bg-white/10"
          >
            Create a new skill
          </button>
          <button
            onClick={() => navigate("/dashboard/create-job")}
            className="rounded-xl border border-white/10 px-4 py-3 text-left text-white/80 transition hover:bg-white/10"
          >
            Add new experience
          </button>
          <button
            onClick={() => navigate("/dashboard/create-project")}
            className="rounded-xl border border-white/10 px-4 py-3 text-left text-white/80 transition hover:bg-white/10"
          >
            Add a project
          </button>
          <button
            onClick={() => navigate("/dashboard/create-education")}
            className="rounded-xl border border-white/10 px-4 py-3 text-left text-white/80 transition hover:bg-white/10"
          >
            Add education
          </button>
          <button
            onClick={() => navigate("/dashboard/create-social-account")}
            className="rounded-xl border border-white/10 px-4 py-3 text-left text-white/80 transition hover:bg-white/10"
          >
            Add social links
          </button>
        </div>
      </section>
    </div>
  );
}
