import React from 'react';
import {
  FileCode2,
  Flame,
  Layout,
  Globe,
  Database,
  HardDrive,
  GitBranch,
  Cpu,
  Code,
  Radio,
  Code2,
  Palette,
  HelpCircle,
  Terminal,
  Brain,
  ShieldAlert,
  TrendingUp,
  Youtube,
  Github,
  Store,
  Sun,
  Moon,
  Menu,
  X,
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
  User,
  ExternalLink,
  ChevronRight,
  GraduationCap,
  Briefcase,
  Calendar,
  Play,
  Users,
  Award,
  MessageSquare,
  Check,
  Facebook,
  Instagram,
  Linkedin,
  Clock,
  Eye,
  Heart,
  Send,
  Sparkles,
  Search,
  BookOpen
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<any>> = {
  FileCode2,
  Flame,
  Layout,
  Globe,
  Database,
  HardDrive,
  GitBranch,
  Cpu,
  Code,
  Radio,
  Code2,
  Palette,
  HelpCircle,
  Terminal,
  Brain,
  ShieldAlert,
  TrendingUp,
  Youtube,
  Github,
  Store,
  Sun,
  Moon,
  Menu,
  X,
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
  User,
  ExternalLink,
  ChevronRight,
  GraduationCap,
  Briefcase,
  Calendar,
  Play,
  Users,
  Award,
  MessageSquare,
  Check,
  Facebook,
  Instagram,
  Linkedin,
  Clock,
  Eye,
  Heart,
  Send,
  Sparkles,
  Search,
  BookOpen
};

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const LucideIcon: React.FC<LucideIconProps> = ({ name, className = '', size = 20 }) => {
  const IconComponent = iconMap[name];
  if (!IconComponent) {
    // Fallback to Code if the icon doesn't exist
    return <Code className={className} size={size} />;
  }
  return <IconComponent className={className} size={size} />;
};
