// #[macro_use]
extern crate getset;

// use fast_log::config::Config;
// use fast_log::consts::LogSize;
// use fast_log::plugin::file_split::RollingType;
// use fast_log::plugin::packer::ZipPacker;
// use log::{LevelFilter};
use state::Container;
// use std::time::Duration;

pub mod pkg;
pub mod plugin;

pub static APPLICATION_CONTEXT: Container![Send + Sync] = <Container![Send + Sync]>::new();

