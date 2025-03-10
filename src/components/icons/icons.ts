import {
  BetweenHorizonalEnd,
  BetweenHorizonalStart,
  BetweenVerticalEnd,
  BetweenVerticalStart,
  Bold,
  BookMarked,
  ChevronDown,
  ChevronUp,
  ChevronsUpDown,
  Clipboard,
  Code,
  CodeXml,
  Columns2,
  Columns3,
  Columns4,
  Copy,
  CropIcon,
  Eraser,
  Eye,
  FlipHorizontal,
  FlipVertical,
  Frame,
  GripVertical,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  ImageUp,
  IndentDecrease,
  IndentIncrease,
  Italic,
  Link,
  List,
  ListOrdered,
  ListTodo,
  LoaderCircle,
  Maximize,
  Minimize,
  Minus,
  PaintRoller,
  PanelLeft,
  PanelRight,
  Paperclip,
  Pencil,
  Plus,
  Quote,
  Redo2,
  Replace,
  Settings,
  Sigma,
  SmilePlus,
  SmilePlusIcon,
  Sparkles,
  Strikethrough,
  Subscript,
  Superscript,
  Table,
  TableCellsMerge,
  TableCellsSplit,
  Trash,
  Trash2,
  Type,
  Underline,
  Undo2,
  Unlink,
  Video,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';
import {
  TextAlignCenterIcon,
  TextAlignJustifyIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
} from '@radix-ui/react-icons';
import ImportWord from './ImportWord';
import {
  AspectRatio,
  BlockquoteLeft,
  DeleteColumn,
  DeleteRow,
  FileWordOutline,
  FormatLineHeight,
  MenuDown,
  SizeL,
  SizeM,
  SizeS,
} from '@/components/icons';
import { ExportPdf } from '@/components/icons/ExportPdf';
import ExportWord from '@/components/icons/ExportWord';
import { ColumnAddLeft } from '@/components/icons/ColumnAddLeft';
import { ColumnAddRight } from '@/components/icons/ColumnAddRight';
import { Excalidraw } from '@/components/icons/Excalidraw';
import { Direction } from '@/components/icons/Direction';
import { LeftToRight } from '@/components/icons/LeftToRight';
import { RightToLeft } from '@/components/icons/RightToLeft';
import { GifIcon } from '@/components/icons/GIfIcon';
import { Mermaid } from '@/components/icons/Mermaid';
import { Twitter } from '@/components/icons/Twitter';

export const icons = {
  Bold,
  LoaderCircle,
  Italic,
  Underline,
  Quote,
  TextQuote: BlockquoteLeft,
  Strikethrough,
  Minus,
  Eraser,
  PaintRoller,
  Redo2,
  Undo2,
  AlignCenter: TextAlignCenterIcon,
  AlignJustify: TextAlignJustifyIcon,
  AlignLeft: TextAlignLeftIcon,
  AlignRight: TextAlignRightIcon,
  ChevronDown,
  Subscript,
  Superscript,
  Code,
  Code2: CodeXml,
  Type,
  IndentIncrease,
  IndentDecrease,
  List,
  ListOrdered,
  ListTodo,
  Link,
  ImageUp,
  Video,
  Maximize,
  Minimize,
  Table,
  Sparkles,
  Pencil,
  Unlink,
  BetweenHorizonalEnd,
  BetweenHorizonalStart,
  BetweenVerticalStart,
  BetweenVerticalEnd,
  TableCellsMerge,
  TableCellsSplit,
  Trash2,
  Trash,
  Replace,
  ChevronsUpDown,
  LineHeight: FormatLineHeight,
  Word: FileWordOutline,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Columns2,
  Columns3,
  Columns4,
  Plus,
  Grip: GripVertical,
  Copy,
  Clipboard,
  PanelLeft,
  PanelRight,
  Columns: Columns2,
  Iframe: Frame,

  MenuDown,
  SizeS,
  SizeM,
  SizeL,
  AspectRatio,

  Emoji: SmilePlus,

  DeleteColumn,
  DeleteRow,
  SearchAndReplace: Replace,
  EmojiIcon: SmilePlusIcon,
  KatexIcon: Sigma,
  ExportPdf,
  ExportWord,
  ImportWord,
  ColumnAddLeft,
  ColumnAddRight,
  BookMarked,
  Excalidraw,
  ZoomIn,
  ZoomOut,
  Settings,
  Eye,

  TextDirection: Direction,
  LeftToRight,
  RightToLeft,

  Attachment: Paperclip,
  GifIcon,
  ChevronUp,
  Crop: CropIcon,
  Mermaid,
  Twitter,
  FlipX: FlipVertical,
  FlipY: FlipHorizontal,
} as any;
